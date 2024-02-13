import { CancellableStream } from "google-gax";
import axios from "axios";
import { chain } from "stream-chain";
import { parser } from "stream-json";
import { streamArray } from "stream-json/streamers/StreamArray";

import { ClientOptions } from "./client";
import {
  BaseMutationHookArgs,
  BaseRequestHookArgs,
  HookedCancellation,
  HookedResolution,
  Hooks,
} from "./hooks";

import { decamelizeKeys } from "./parserRest";
import { services, errors } from "./protos";
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
import { googleAdsVersion } from "./version";

/**
 * TODO:
 *  - rename querierRest to streamRest. Add hooks support to it. OK
 *  - write querierRest, using pagination. OK
 *  - make sure return_total_results_count works
 *  - make sure SUMMARY_ROW_SETTING works
 *  - adapt query()
 *  - adapt queryStream
 *  - adapt report()
 *  - adapt reportCount()
 *  - adapt reportStream()
 *  - reportStreamRaw() ?
 *  - bonus: use queryStream when the params allow it
 *  - bonus: make it possible to cancel a stream or pagination when row count exceeds specified max
 *
 */
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
    requestOptions: Readonly<RequestOptions> = {}
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
    requestOptions: Readonly<RequestOptions> = {}
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
    options: Readonly<ReportOptions>
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
    options: Readonly<ReportOptions>
  ): Promise<number | undefined> {
    const { gaqlQuery, requestOptions } = buildQuery({ ...options, limit: 1 }); // must get at least one row
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
    reportOptions: Readonly<ReportOptions>
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
    reportOptions: Readonly<ReportOptions>
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
    requestOptions: Readonly<RequestOptions>
  ): Promise<{
    response: services.IGoogleAdsRow[];
    nextPageToken: PageToken;
    totalResultsCount?: number;
    summaryRow?: services.IGoogleAdsRow;
  }> {
    const accessToken = await this.getAccessToken();

    try {
      const rawResponse = await axios(
        this.prepareGoogleAdsServicePostRequestArgs("search", accessToken, {
          data: {
            query: gaqlQuery,
            ...requestOptions,
          },
        })
      );

      const searchResponse = rawResponse.data as any;

      const results = searchResponse.results ?? [];
      // console.time("parsing");
      const response: any[] = this.clientOptions.disable_parsing
        ? results
        : results.map((row: any) => decamelizeKeys(row));
      // console.timeEnd("parsing");

      const summaryRow = decamelizeKeys(searchResponse.summaryRow);
      const nextPageToken = searchResponse.nextPageToken;
      const totalResultsCount = searchResponse.totalResultsCount
        ? +searchResponse.totalResultsCount
        : undefined;

      return { response, nextPageToken, totalResultsCount, summaryRow };
    } catch (e: any) {
      console.dir({ e: e.response.data }, { depth: null });
      if (e.response.data.error.details[0]) {
        throw new errors.GoogleAdsFailure(
          decamelizeKeys(e.response.data.error.details[0])
        );
      }
      throw "bag";
    }
  }

  private async paginatedSearch(
    gaqlQuery: string,
    requestOptions: Readonly<RequestOptions>
  ): Promise<{
    response: services.IGoogleAdsRow[];
    totalResultsCount?: number;
  }> {
    const response: services.IGoogleAdsRow[] = [];
    let nextPageToken: PageToken = undefined;
    const initialSearch = await this.search(gaqlQuery, requestOptions);
    const totalResultsCount = initialSearch.totalResultsCount;
    let summaryRow = initialSearch.summaryRow;

    response.push(...initialSearch.response);
    nextPageToken = initialSearch.nextPageToken;

    while (nextPageToken) {
      const nextSearch = await this.search(gaqlQuery, {
        ...requestOptions,
        page_token: nextPageToken,
      });
      response.push(...initialSearch.response);
      nextPageToken = nextSearch.nextPageToken;
      if (nextSearch.summaryRow) {
        summaryRow = nextSearch.summaryRow;
      }
    }

    if (summaryRow) {
      response.unshift(summaryRow);
    }

    return { response, totalResultsCount };
  }

  private async querier<T = services.IGoogleAdsRow[]>(
    gaqlQuery: string,
    requestOptions: RequestOptions = {},
    reportOptions?: Readonly<ReportOptions>,
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
      const { response, totalResultsCount } = await this.paginatedSearch(
        gaqlQuery,
        requestOptions
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

  private async *streamer<T = services.IGoogleAdsRow[]>(
    gaqlQuery: string,
    requestOptions: RequestOptions = {},
    reportOptions?: Readonly<ReportOptions>
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

    const accessToken = await this.getAccessToken();

    // console.time("request");

    let streamFinished = false;
    const accumulator: T[] = [];

    let nextChunk = createNextChunkArrivedPromise();

    try {
      const args = this.prepareGoogleAdsServicePostRequestArgs(
        "searchStream",
        accessToken,
        {
          responseType: "stream",
          data: {
            query: gaqlQuery,
            ...requestOptions,
          },
        }
      );

      const response = await axios(args);

      const stream = response.data as any;

      const pipeline = chain([stream, parser(), streamArray()]);

      stream.once("data", () => {
        // console.timeEnd("request");
      });

      pipeline.on("data", (data) => {
        // console.time("chunk parsing");

        const results = data.value.results ?? [data.value.summaryRow];

        const parsed = this.clientOptions.disable_parsing
          ? results
          : results.map((row: any) => decamelizeKeys(row));

        // console.timeEnd("chunk parsing");

        accumulator.push(...(parsed as T[]));

        nextChunk.resolve();
        nextChunk = createNextChunkArrivedPromise();
      });

      pipeline.on("error", (searchError: Error) => {
        nextChunk.reject(searchError);
      });

      stream.on("end", () => {
        streamFinished = true;
        nextChunk.resolve();
      });

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
    } catch (e: any) {
      // The error is also a stream, so some effort is required to parse it.
      const stream = e.response.data as any;

      const pipeline = chain([stream, parser(), streamArray()]);

      stream.once("data", () => {
        console.timeEnd("request");
        console.time("parsing");
      });

      let googleAdsFailure: errors.GoogleAdsFailure | undefined;

      // Only throw the first error.
      pipeline.once("data", (data) => {
        googleAdsFailure = new errors.GoogleAdsFailure(
          decamelizeKeys(data.value.error.details[0])
        );
      });

      // Must always reject.
      await new Promise<void>((_, reject) => {
        pipeline.on("end", () => reject(googleAdsFailure));
        pipeline.on("error", (err) => reject(err));
      });
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

  private prepareGoogleAdsServicePostRequestArgs(
    functionName: string,
    accessToken: string,
    extra: Record<string, any>
  ) {
    return {
      method: "POST",
      url: `https://googleads.googleapis.com/${googleAdsVersion}/customers/${this.customerOptions.customer_id}/googleAds:${functionName}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...this.callHeaders,
        "developer-token": this.clientOptions.developer_token ?? "",
        "login-customer-id": this.credentials.login_customer_id ?? "",
      },
      ...extra,
    };
  }
}
