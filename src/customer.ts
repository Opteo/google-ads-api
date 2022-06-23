import { CancellableStream } from "google-gax";
import { ClientOptions } from "./client";
import {
  BaseMutationHookArgs,
  BaseRequestHookArgs,
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
    @description Single query using a raw GAQL string.
    @hooks onQueryStart, onQueryError, onQueryEnd
  */
  public async query<T = services.IGoogleAdsRow[]>(
    gaqlQuery: string,
    requestOptions: RequestOptions = {}
  ): Promise<T> {
    const { response } = await this.querier<T>(gaqlQuery, requestOptions);
    return response;
  }

  /** 
    @description Stream query using a raw GAQL string. If a generic type is provided, it must be the type of a single row.
    If a summary row is requested then this will be the last emitted row of the stream.
    @hooks onStreamStart, onStreamError
    @example
    const stream = queryStream<T>(gaqlQuery)
    for await (const row of stream) { ... }
  */
  public async *queryStream<T = services.IGoogleAdsRow>(
    gaqlQuery: string,
    requestOptions: RequestOptions = {}
  ): AsyncGenerator<T> {
    const stream = this.streamer<T>(gaqlQuery, requestOptions);
    for await (const row of stream) {
      yield row;
    }
  }

  /** 
    @description Single query using ReportOptions.
    If a summary row is requested then this will be the first row of the results.
    @hooks onQueryStart, onQueryError, onQueryEnd
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
    @description Get the total row count of a report.
    @hooks none
  */
  public async reportCount(
    options: ReportOptions
  ): Promise<number | undefined> {
    options.limit = 1; // must get at least one row
    const { gaqlQuery, requestOptions } = buildQuery(options);
    // @ts-expect-error we do not allow this field in reportOptions, however it is still a valid request option
    requestOptions.return_total_results_count = true;
    const useHooks = false; // to avoid cacheing conflicts
    const { totalResultsCount } = await this.querier(
      gaqlQuery,
      requestOptions,
      options,
      useHooks
    );

    return totalResultsCount;
  }

  /** 
    @description Stream query using ReportOptions. If a generic type is provided, it must be the type of a single row.
    If a summary row is requested then this will be the last emitted row of the stream.
    @hooks onStreamStart, onStreamError
    @example
    const stream = reportStream<T>(reportOptions)
    for await (const row of stream) { ... }
  */
  public async *reportStream<T = services.IGoogleAdsRow>(
    reportOptions: ReportOptions
  ): AsyncGenerator<T> {
    const { gaqlQuery, requestOptions } = buildQuery(reportOptions);
    const stream = this.streamer<T>(gaqlQuery, requestOptions, reportOptions);
    for await (const row of stream) {
      yield row;
    }
  }

  /** 
    @description Retreive the raw stream using ReportOptions.
    @hooks onStreamStart
    @example
    const stream = reportStreamRaw(reportOptions)
    stream.on('data', (chunk) => { ... }) // a chunk contains up to 10,000 un-parsed rows
    stream.on('error', (error) => { ... })
    stream.on('end', () => { ... })
  */
  public async reportStreamRaw(
    reportOptions: ReportOptions
  ): Promise<CancellableStream | void> {
    const { gaqlQuery, requestOptions } = buildQuery(reportOptions);

    const baseHookArguments: BaseRequestHookArgs = {
      credentials: this.credentials,
      query: gaqlQuery,
      reportOptions,
    };

    const queryStart: HookedCancellation = { cancelled: false };
    if (this.hooks.onStreamStart) {
      await this.hooks.onStreamStart({
        ...baseHookArguments,
        cancel: () => {
          queryStart.cancelled = true;
        },
        editOptions: (options) => {
          Object.entries(options).forEach(([key, val]) => {
            // @ts-ignore
            requestOptions[key] = val;
          });
        },
      });

      if (queryStart.cancelled) {
        return;
      }
    }

    const { service, request } = this.buildSearchStreamRequestAndService(
      gaqlQuery,
      requestOptions
    );

    return service.searchStream(request, {
      otherArgs: { headers: this.callHeaders },
    });
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
    requestOptions: RequestOptions,
    parser: (rows: services.IGoogleAdsRow[]) => services.IGoogleAdsRow[]
  ): Promise<{
    response: services.IGoogleAdsRow[];
    totalResultsCount?: number;
  }> {
    const response: services.IGoogleAdsRow[] = [];
    let nextPageToken: PageToken = undefined;
    const initialSearch = await this.search(gaqlQuery, requestOptions);
    const totalResultsCount = initialSearch.totalResultsCount;

    response.push(...parser(initialSearch.response));
    nextPageToken = initialSearch.nextPageToken;
    while (nextPageToken) {
      const nextSearch = await this.search(gaqlQuery, {
        ...requestOptions,
        page_token: nextPageToken,
      });
      response.push(...parser(nextSearch.response));
      nextPageToken = nextSearch.nextPageToken;
    }

    return { response, totalResultsCount };
  }

  private async querier<T = services.IGoogleAdsRow[]>(
    gaqlQuery: string,
    requestOptions: RequestOptions = {},
    reportOptions?: ReportOptions,
    useHooks = true
  ): Promise<{ response: T; totalResultsCount?: number }> {
    const baseHookArguments: BaseRequestHookArgs = {
      credentials: this.credentials,
      query: gaqlQuery,
      reportOptions,
    };

    if (this.hooks.onQueryStart && useHooks) {
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
      const parsingWapper = (rows: services.IGoogleAdsRow[]) => {
        return this.clientOptions.disable_parsing
          ? rows
          : reportOptions
          ? parse({ results: rows, reportOptions })
          : parse({ results: rows, gaqlString: gaqlQuery });
      };

      const { response, totalResultsCount } = await this.paginatedSearch(
        gaqlQuery,
        requestOptions,
        parsingWapper
      );

      if (this.hooks.onQueryEnd && useHooks) {
        const queryResolution: HookedResolution = { resolved: false };
        await this.hooks.onQueryEnd({
          ...baseHookArguments,
          response,
          resolve: (res) => {
            queryResolution.resolved = true;
            queryResolution.res = res;
          },
        });
        if (queryResolution.resolved) {
          return { response: queryResolution.res as T, totalResultsCount };
        }
      }

      return { response: response as unknown as T, totalResultsCount };
    } catch (searchError: any) {
      const googleAdsError = this.getGoogleAdsError(searchError);
      if (this.hooks.onQueryError && useHooks) {
        await this.hooks.onQueryError({
          ...baseHookArguments,
          error: googleAdsError,
        });
      }
      throw googleAdsError;
    }
  }

  private async *streamer<T = services.IGoogleAdsRow>(
    gaqlQuery: string,
    requestOptions: RequestOptions = {},
    reportOptions?: ReportOptions
  ): AsyncGenerator<T> {
    const baseHookArguments: BaseRequestHookArgs = {
      credentials: this.credentials,
      query: gaqlQuery,
      reportOptions,
    };

    if (this.hooks.onStreamStart) {
      const queryStart: HookedCancellation = { cancelled: false };

      await this.hooks.onStreamStart({
        ...baseHookArguments,
        cancel: () => {
          queryStart.cancelled = true;
        },
        editOptions: (options) => {
          Object.entries(options).forEach(([key, val]) => {
            // @ts-expect-error
            requestOptions[key] = val;
          });
        },
      });

      if (queryStart.cancelled) {
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

    let streamFinished = false;
    const accumulator: T[] = [];

    let nextChunk = createNextChunkArrivedPromise();

    stream.on("data", (chunk: services.SearchGoogleAdsStreamResponse) => {
      const results = chunk.summary_row ? [chunk.summary_row] : chunk.results;
      const parsedResponse = this.clientOptions.disable_parsing
        ? results
        : reportOptions
        ? parse({ results, reportOptions })
        : parse({ results, gaqlString: gaqlQuery });
      accumulator.push(...(parsedResponse as T[]));

      nextChunk.resolve();
      nextChunk = createNextChunkArrivedPromise();
    });

    stream.on("error", (searchError: Error) => {
      nextChunk.reject(searchError);
    });

    stream.on("end", () => {
      streamFinished = true;
      nextChunk.resolve();
    });

    try {
      while (!streamFinished || accumulator.length) {
        if (accumulator.length > 0) {
          const item = accumulator.shift();
          if (item === undefined) {
            throw new Error("UNDEFINED_STREAM_ERROR");
          }
          yield item;
        } else {
          await nextChunk.newPromise;
        }
      }
    } catch (searchError: any) {
      const googleAdsError = this.getGoogleAdsError(searchError);
      if (this.hooks.onStreamError) {
        await this.hooks.onStreamError({
          ...baseHookArguments,
          error: googleAdsError,
        });
      }
      throw googleAdsError;
    } finally {
      stream.destroy();
    }
  }

  /**
   * @description Creates, updates, or removes resources. This method supports atomic transactions
   * with multiple types of resources. For example, you can atomically create a campaign and a
   * campaign budget, or perform up to thousands of mutates atomically.
   * @hooks onMutationStart, onMutationError, onMutationEnd
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
      const response = (
        await service.mutate(request, {
          otherArgs: { headers: this.callHeaders },
        })
      )[0] as services.MutateGoogleAdsResponse;

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
    } catch (mutateError: any) {
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
          otherArgs: { headers: this.callHeaders },
        });
      },
    };
  }
}
