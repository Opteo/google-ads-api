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
import {
  CustomerOptions,
  MutateOperation,
  MutateOptions,
  PageToken,
  ReportOptions,
  RequestOptions,
} from "./types";
import { createNextChunkArrivedPromise } from "./utils";

export class Customer extends ServiceFactory {
  constructor(
    clientOptions: ClientOptions,
    customerOptions: CustomerOptions,
    hooks?: Hooks
  ) {
    super(clientOptions, customerOptions, hooks ?? {});
  }

  /** 
    @description Single query using ReportOptions.
    If a summary row is requested then this will be the first row of the results.
  */
  public async report<T = services.IGoogleAdsRow[]>(
    options: ReportOptions
  ): Promise<T> {
    const { gaqlQuery, requestOptions } = buildQuery(options);
    const { response } = await this.querier<T>(
      gaqlQuery,
      requestOptions,
      options
    );
    return response;
  }

  /**
    @description Single query using a GAQL query
   */
  public async query<T = services.IGoogleAdsRow[]>(
    gaqlQuery: string,
    requestOptions: RequestOptions = {}
  ): Promise<T> {
    const { response } = await this.querier<T>(gaqlQuery, requestOptions);
    return response;
  }

  public async reportCount(
    options: ReportOptions
  ): Promise<number | undefined> {
    options.limit = 1; // must get at least one row
    const { gaqlQuery, requestOptions } = buildQuery(options);
    // @ts-expect-error we do not allow this field in reportOptions, however it is still a valid request option
    requestOptions.return_total_results_count = true;

    const { totalResultsCount } = await this.querier(
      gaqlQuery,
      requestOptions,
      options
    );

    return totalResultsCount;
  }

  /** 
    @description Stream query using ReportOptions. If a generic type is provided, it must be the type of a single row.
    If a summary row is requested then this will be the last emitted row of the stream.
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

    let nextChunk = createNextChunkArrivedPromise();

    stream.on("data", (chunk: services.SearchGoogleAdsStreamResponse) => {
      const results = chunk.summary_row ? [chunk.summary_row] : chunk.results;
      const parsedResponse = this.clientOptions.disable_parsing
        ? results
        : parse({ results, reportOptions });
      accumulator.push(...(parsedResponse as T[]));

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
    totalResultsCount?: number;
  }> {
    const { service, request } = this.buildSearchRequestAndService(
      gaqlQuery,
      requestOptions
    );

    const searchResponse = await service.search(request, {
      otherArgs: { headers: this.callHeaders },
      autoPaginate: false, // autoPaginate doesn't work
    });

    const response = searchResponse[0];
    const summaryRow = searchResponse[2].summary_row;
    const nextPageToken = searchResponse[2].next_page_token;
    const totalResultsCount = searchResponse[2].total_results_count
      ? +searchResponse[2].total_results_count
      : undefined;

    if (summaryRow) {
      response.unshift(summaryRow);
    }

    return { response, nextPageToken, totalResultsCount };
  }

  private async paginatedSearch(
    gaqlQuery: string,
    requestOptions: RequestOptions
  ): Promise<{
    response: services.IGoogleAdsRow[];
    totalResultsCount?: number;
  }> {
    const response: services.IGoogleAdsRow[] = [];
    let nextPageToken: PageToken = undefined;

    const initialSearch = await this.search(gaqlQuery, requestOptions);
    const totalResultsCount = initialSearch.totalResultsCount;

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

    return { response, totalResultsCount };
  }

  /**
    @description Single query using a GAQL query
   */
  private async querier<T = services.IGoogleAdsRow[]>(
    gaqlQuery: string,
    requestOptions: RequestOptions = {},
    reportOptions?: ReportOptions
  ): Promise<{ response: T; totalResultsCount?: number }> {
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
        return { response: queryCancellation.res as T };
      }
    }

    try {
      const { response, totalResultsCount } = await this.paginatedSearch(
        gaqlQuery,
        requestOptions
      );

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
          return { response: queryResolution.res as T, totalResultsCount };
        }
      }

      return { response: (parsedResponse as unknown) as T, totalResultsCount };
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
