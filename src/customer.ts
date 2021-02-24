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
  ): AsyncGenerator<T, void, undefined> {
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

    const { service, request } = this.buildSearchRequestAndService(
      gaqlQuery,
      requestOptions
    );

    try {
      const stream: AsyncIterable<services.IGoogleAdsRow> = service.searchAsync(
        request,
        { otherArgs: { headers: this.callHeaders } }
      );

      const result: services.IGoogleAdsRow[] = [];
      for await (const row of stream) {
        const [parsedResponse] = this.clientOptions.disable_parsing
          ? [row]
          : parse({ results: [row], reportOptions });

        result.push(parsedResponse);

        yield parsedResponse as T;
      }

      if (this.hooks.onQueryEnd) {
        await this.hooks.onQueryEnd({
          ...baseHookArguments,
          response: result,
          resolve: () => {
            return;
          },
        });
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

      if (this.hooks.onMutationEnd) {
        const mutationResolution: HookedResolution = { resolved: false };
        await this.hooks.onMutationEnd({
          ...baseHookArguments,
          response,
          resolve: (res) => {
            mutationResolution.resolved = true;
            mutationResolution.res = res;
          },
        });
        if (mutationResolution.resolved) {
          return mutationResolution.res;
        }
      }

      return response;
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
