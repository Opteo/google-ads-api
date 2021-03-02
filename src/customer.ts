import { ClientOptions } from "./client";
import {
  BaseMutationHookArgs,
  BaseQueryHookArgs,
  HookedCancellation,
  HookedResolution,
  Hooks,
} from "./hooks";
import { parse } from "./parser";
import { services } from "./protos";
import ServiceFactory from "./protos/autogen/serviceFactory";
import { buildQuery } from "./query";
import { createNextChunkArrivedPromise } from "./utils";
import {
  CustomerOptions,
  MutateOperation,
  MutateOptions,
  ReportOptions,
  RequestOptions,
  PageToken,
} from "./types";

export class Customer extends ServiceFactory {
  constructor(
    clientOptions: ClientOptions,
    customerOptions: CustomerOptions,
    hooks?: Hooks
  ) {
    super(clientOptions, customerOptions, hooks ?? {});
  }

  /** 
    @description Single query using ReportOptions
  */
  public async report<T = services.IGoogleAdsRow[]>(
    options: ReportOptions
  ): Promise<T> {
    const { gaqlQuery, requestOptions } = buildQuery(options);
    return this.query<T>(gaqlQuery, requestOptions, options);
  }

  /** 
    @description Stream query using ReportOptions. If a generic type is provided, it must be the type of a single row.
    @example
    const stream = reportStream<T>(reportOptions)
    for await (const row of stream) { ... }
  */
  public async *reportStream<T = services.IGoogleAdsRow>(
    reportOptions: ReportOptions
  ): AsyncGenerator<T> {
    const { gaqlQuery, requestOptions } = buildQuery(reportOptions);

    const baseHookArguments: BaseQueryHookArgs = {
      credentials: this.credentials,
      query: gaqlQuery,
      reportOptions,
    };

    const queryStart: HookedCancellation = { cancelled: false };
    if (this.hooks.onQueryStart) {
      await this.hooks.onQueryStart({
        ...baseHookArguments,
        cancel: (res) => {
          queryStart.cancelled = true;
          queryStart.res = res;
        },
        editOptions: (options) => {
          Object.entries(options).forEach(([key, val]) => {
            // @ts-ignore
            requestOptions[key] = val;
          });
        },
      });

      if (queryStart.cancelled) {
        if (Array.isArray(queryStart.res)) {
          for (const row of queryStart.res) {
            yield row as T;
          }
        } else {
          yield queryStart.res as T;
        }

        return;
      }
    }

    const { service, request } = this.buildSearchStreamRequestAndService(
      gaqlQuery,
      requestOptions
    );

    const stream = service.searchStream(request, {
      otherArgs: { headers: this.callHeaders },
    });

    let done = false;
    const accumulator: T[] = [];
    const response: T[] = [];

    let nextChunk = createNextChunkArrivedPromise();

    stream.on("data", (chunk: services.SearchGoogleAdsStreamResponse) => {
      const parsedResponse = this.clientOptions.disable_parsing
        ? chunk.results
        : parse({ results: chunk.results, reportOptions });
      accumulator.push(...(parsedResponse as T[]));
      response.push(...(parsedResponse as T[]));

      nextChunk.resolve();
      nextChunk = createNextChunkArrivedPromise();
    });

    stream.on("error", (searchError: Error) => {
      nextChunk.reject(searchError);
    });

    stream.on("end", () => {
      done = true;
      nextChunk.resolve();
    });

    try {
      while (!done || accumulator.length) {
        if (accumulator.length !== 0) {
          const item = accumulator.shift();
          if (item === undefined) {
            throw new Error("UNDEFINED_STREAM_ERROR");
          }
          yield item;
        } else {
          await nextChunk.newPromise;
        }
      }
    } catch (searchError) {
      const googleAdsError = this.getGoogleAdsError(searchError);
      if (this.hooks.onQueryError) {
        await this.hooks.onQueryError({
          ...baseHookArguments,
          error: googleAdsError,
        });
      }
      throw googleAdsError;
    } finally {
      if (this.hooks.onQueryEnd) {
        await this.hooks.onQueryEnd({
          ...baseHookArguments,
          response,
          resolve: () => {
            return;
          },
        });
      }

      stream.destroy();
    }
  }

  private async search(
    gaqlQuery: string,
    requestOptions: RequestOptions
  ): Promise<{
    response: services.IGoogleAdsRow[];
    nextPageToken: PageToken;
  }> {
    const { service, request } = this.buildSearchRequestAndService(
      gaqlQuery,
      requestOptions
    );

    const searchResponse = await service.search(request, {
      otherArgs: { headers: this.callHeaders },
      autoPaginate: false, // autoPaginate doesn't work
    });

    return {
      response: searchResponse[0],
      nextPageToken: searchResponse[2].next_page_token,
    };
  }

  private async paginatedSearch(
    gaqlQuery: string,
    requestOptions: RequestOptions
  ): Promise<services.IGoogleAdsRow[]> {
    const response: services.IGoogleAdsRow[] = [];
    let nextPageToken: PageToken = undefined;

    const initialSearch = await this.search(gaqlQuery, requestOptions);
    response.push(...initialSearch.response);
    nextPageToken = initialSearch.nextPageToken;

    while (nextPageToken) {
      const nextSearch = await this.search(gaqlQuery, {
        ...requestOptions,
        page_token: nextPageToken,
      });
      response.push(...nextSearch.response);
      nextPageToken = nextSearch.nextPageToken;
    }

    return response;
  }

  /**
    @description Single query using a GAQL query
   */
  public async query<T = services.IGoogleAdsRow[]>(
    gaqlQuery: string,
    requestOptions: RequestOptions = {},
    reportOptions?: ReportOptions
  ): Promise<T> {
    const baseHookArguments: BaseQueryHookArgs = {
      credentials: this.credentials,
      query: gaqlQuery,
      reportOptions,
    };

    if (this.hooks.onQueryStart) {
      const queryCancellation: HookedCancellation = { cancelled: false };
      await this.hooks.onQueryStart({
        ...baseHookArguments,
        cancel: (res) => {
          queryCancellation.cancelled = true;
          queryCancellation.res = res;
        },
        editOptions: (options) => {
          Object.entries(options).forEach(([key, val]) => {
            // @ts-ignore
            requestOptions[key] = val;
          });
        },
      });
      if (queryCancellation.cancelled) {
        return queryCancellation.res as T;
      }
    }

    try {
      const response = await this.paginatedSearch(gaqlQuery, requestOptions);

      const parsedResponse = this.clientOptions.disable_parsing
        ? response
        : reportOptions
        ? parse({ results: response, reportOptions })
        : parse({ results: response, gaqlString: gaqlQuery });

      if (this.hooks.onQueryEnd) {
        const queryResolution: HookedResolution = { resolved: false };
        await this.hooks.onQueryEnd({
          ...baseHookArguments,
          response: parsedResponse,
          resolve: (res) => {
            queryResolution.resolved = true;
            queryResolution.res = res;
          },
        });
        if (queryResolution.resolved) {
          return queryResolution.res as T;
        }
      }

      return (parsedResponse as unknown) as T;
    } catch (searchError) {
      const googleAdsError = this.getGoogleAdsError(searchError);
      if (this.hooks.onQueryError) {
        await this.hooks.onQueryError({
          ...baseHookArguments,
          error: googleAdsError,
        });
      }
      throw googleAdsError;
    }
  }

  /**
   * @description Creates, updates, or removes resources. This method supports atomic transactions with multiple types of resources. For example, you can atomically create a campaign and a campaign budget, or perform up to thousands of mutates atomically.
   */
  public async mutateResources<T>(
    mutations: MutateOperation<T>[],
    mutateOptions: MutateOptions = {}
  ): Promise<services.MutateGoogleAdsResponse> {
    const baseHookArguments: BaseMutationHookArgs = {
      credentials: this.credentials,
      method: "GoogleAdsService.mutate",
      mutations,
      isServiceCall: false,
    };

    if (this.hooks.onMutationStart) {
      const mutationCancellation: HookedCancellation = { cancelled: false };
      await this.hooks.onMutationStart({
        ...baseHookArguments,
        cancel: (res) => {
          mutationCancellation.cancelled = true;
          mutationCancellation.res = res;
        },
        editOptions: (options) => {
          Object.entries(options).forEach(([key, val]) => {
            // @ts-ignore
            mutateOptions[key] = val;
          });
        },
      });
      if (mutationCancellation.cancelled) {
        return mutationCancellation.res;
      }
    }

    const { service, request } = this.buildMutationRequestAndService(
      mutations,
      mutateOptions
    );

    try {
      const response = await service.mutate(request, {
        // @ts-expect-error Field not included in type definitions
        otherArgs: {
          headers: this.callHeaders,
        },
      });

      const parsedResponse = request.partial_failure
        ? this.decodePartialFailureError(response)
        : response;

      if (this.hooks.onMutationEnd) {
        const mutationResolution: HookedResolution = { resolved: false };
        await this.hooks.onMutationEnd({
          ...baseHookArguments,
          response: parsedResponse,
          resolve: (res) => {
            mutationResolution.resolved = true;
            mutationResolution.res = res;
          },
        });
        if (mutationResolution.resolved) {
          return mutationResolution.res;
        }
      }

      return parsedResponse;
    } catch (mutateError) {
      const googleAdsError = this.getGoogleAdsError(mutateError);
      if (this.hooks.onMutationError) {
        await this.hooks.onMutationError({
          ...baseHookArguments,
          error: googleAdsError,
        });
      }
      throw googleAdsError;
    }
  }

  private get googleAdsFields() {
    return {
      searchGoogleAdsFields: async (
        request: services.SearchGoogleAdsFieldsRequest
      ) => {
        const service: services.GoogleAdsFieldService = await this.loadService(
          "GoogleAdsFieldServiceClient"
        );
        return service.searchGoogleAdsFields(request, {
          // @ts-expect-error This method does support call headers
          otherArgs: {
            headers: this.callHeaders,
          },
        });
      },
    };
  }
}
