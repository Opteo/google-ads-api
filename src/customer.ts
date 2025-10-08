import { CancellableStream } from "google-gax";
import axios from "axios";
import { chain } from "stream-chain";
import { parser, Parser } from "stream-json";

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
  ReportOptionsWithTotalResults,
  RequestOptions,
  RequestOptionsWithTotalResults,
} from "./types";

import { googleAdsVersion } from "./version";

const ROWS_PER_STREAMED_CHUNK = 10_000; // From experience, this is what can be expected from the API.

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
    // must get at least one row
    const { gaqlQuery, requestOptions } = buildQuery({ ...options, limit: 1 });

    // We do not allow this field in reportOptions, however it is still a valid request option
    requestOptions.search_settings = {
      return_total_results_count: true,
      return_summary_row: false,
    };

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

      const response: any[] = results.map((row: any) =>
        this.decamelizeKeysIfNeeded(row)
      );

      const summaryRow = this.decamelizeKeysIfNeeded(searchResponse.summaryRow);
      const nextPageToken = searchResponse.nextPageToken;
      const totalResultsCount = searchResponse.totalResultsCount
        ? +searchResponse.totalResultsCount
        : undefined;

      return { response, nextPageToken, totalResultsCount, summaryRow };
    } catch (e: any) {
      if (e.response?.data.error.details[0]) {
        throw new errors.GoogleAdsFailure(
          this.decamelizeKeysIfNeeded(e.response.data.error.details[0])
        );
      }
      throw e;
    }
  }

  private async paginatedSearch(
    gaqlQuery: string,
    requestOptions: Readonly<RequestOptionsWithTotalResults>
  ): Promise<{
    response: services.IGoogleAdsRow[];
    totalResultsCount?: number;
  }> {
    /*
      When possible, use the searchStream method to avoid the overhead of pagination.
    */
    if (
      requestOptions.page_size === undefined &&
      requestOptions.search_settings === undefined // If search_settings is set, we can't use searchStream.
    ) {
      // If no pagination or summary options are set, we can use the non-paginated search method.
      const { response } = await this.useStreamToImitateRegularSearch(
        gaqlQuery,
        requestOptions
      );

      return { response };
    }

    const response: services.IGoogleAdsRow[] = [];
    let nextPageToken: PageToken = undefined;
    const initialSearch = await this.search(gaqlQuery, requestOptions);

    let totalResultsCount = initialSearch.totalResultsCount;
    // Sometimes (when no results?) the totalResultsCount field is not included in the response.
    // In this case, we set it to 0.
    if (
      requestOptions.search_settings?.return_total_results_count &&
      initialSearch.totalResultsCount === undefined
    ) {
      totalResultsCount = 0;
    }

    let summaryRow = initialSearch.summaryRow;

    response.push(...initialSearch.response);
    nextPageToken = initialSearch.nextPageToken;

    while (nextPageToken) {
      const nextSearch = await this.search(gaqlQuery, {
        ...requestOptions,
        page_token: nextPageToken,
      });
      response.push(...nextSearch.response);
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

  // Google's searchStream method is faster than search, but it does not support all features.
  // When report() is called, we use searchStream if possible, otherwise we use paginatedSearch.
  // Note that just like `paginatedSearch`, this method accumulates results in memory. Use
  // `reportStream` for a more memory-efficient alternative (at the cost of more CPU usage).
  private async useStreamToImitateRegularSearch(
    gaqlQuery: string,
    requestOptions: Readonly<RequestOptions>
  ): Promise<{
    response: services.IGoogleAdsRow[];
  }> {
    const accessToken = await this.getAccessToken();

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

      const buffers = [];

      let rowCount = -ROWS_PER_STREAMED_CHUNK;
      for await (const data of stream) {
        if (
          this.clientOptions.max_reporting_rows &&
          !this.gaqlQueryStringIncludesLimit(gaqlQuery)
        ) {
          // This is a quick-and-dirty way to count rows, but it's good enough for our purposes.
          // We want to avoid using a proper JSON streamer here for performance reasons.
          if (data.toString("utf-8").includes(`results":`)) {
            rowCount += ROWS_PER_STREAMED_CHUNK;
          }

          if (rowCount > this.clientOptions.max_reporting_rows) {
            throw this.generateTooManyRowsError();
          }
        }

        buffers.push(data);
      }

      const asString = Buffer.concat(buffers).toString("utf-8");

      const accumulator: services.IGoogleAdsRow[] = [];
      let foundSummaryRow: services.IGoogleAdsRow | undefined;

      for (const { results, summaryRow } of JSON.parse(asString)) {
        if (summaryRow) {
          foundSummaryRow = this.decamelizeKeysIfNeeded(summaryRow);
        }

        accumulator.push(
          ...(results ?? []).map((row: any) => {
            return this.decamelizeKeysIfNeeded(row);
          })
        );

        if (foundSummaryRow) {
          accumulator.unshift(foundSummaryRow);
        }
      }

      return { response: accumulator };
    } catch (e: any) {
      await this.handleStreamError(e);
      throw e; // The line above should always throw.
    }
  }

  private async querier<T = services.IGoogleAdsRow[]>(
    gaqlQuery: string,
    requestOptions: RequestOptionsWithTotalResults = {},
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

    try {
      const accessToken = await this.getAccessToken();

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

      // The options below help to make the stream less CPU intensive.
      const parser = new Parser({
        streamValues: false,
        streamKeys: false,
        packValues: true,
        packKeys: true,
      });
      const streamArrayInstance = streamArray();

      const pipeline = chain([stream, parser, streamArrayInstance]);
      let count = 0;

      try {
        for await (const data of pipeline) {
          const results =
            data.value.results ??
            (data.value.summaryRow ? [data.value.summaryRow] : undefined) ??
            [];

          count += results.length;
          if (
            this.clientOptions.max_reporting_rows &&
            count > this.clientOptions.max_reporting_rows &&
            !this.gaqlQueryStringIncludesLimit(gaqlQuery)
          ) {
            throw this.generateTooManyRowsError();
          }

          for (const row of results) {
            const parsed = this.decamelizeKeysIfNeeded(row);
            yield parsed as T;
          }

          // Clear references to help GC
          data.value = null;
          data.key = null;
        }
      } finally {
        // Always destroy all components to prevent memory leaks
        pipeline.destroy();
        parser.destroy();
        streamArrayInstance.destroy();
        stream.destroy();
      }

      return;
    } catch (e: any) {
      try {
        await this.handleStreamError(e);
      } catch (_e: any) {
        if (this.hooks.onStreamError) {
          await this.hooks.onStreamError({
            ...baseHookArguments,
            error: _e,
          });
        }
        throw _e;
      }
    }
  }

  private async handleStreamError(e: any) {
    if (!e?.response?.data) {
      throw e;
    }
    // The error is a stream, so some effort is required to parse it.
    const stream = e.response.data as any;

    const pipeline = chain([stream, parser(), streamArray()]);

    const defaultErrorMessage = "Unknown GoogleAdsFailure";

    let googleAdsFailure: errors.GoogleAdsFailure | Error = new Error(
      defaultErrorMessage
    );

    // Only throw the first error.
    pipeline.once("data", (data) => {
      if (data?.value?.error?.details?.[0]) {
        googleAdsFailure = new errors.GoogleAdsFailure(
          this.decamelizeKeysIfNeeded(data.value.error.details[0])
        );
      } else {
        googleAdsFailure = new Error(
          data?.value?.error?.message ?? defaultErrorMessage,
          { cause: data?.value?.error ?? data?.value }
        );
      }
    });

    // Must always reject.
    await new Promise<void>((_, reject) => {
      pipeline.on("end", () => reject(googleAdsFailure));
      pipeline.on("error", (err) => reject(err));
    });
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
      },
      ...extra,
    };
  }

  private decamelizeKeysIfNeeded(input: any) {
    if (this.clientOptions.disable_parsing) {
      return input;
    }
    return decamelizeKeys(input);
  }

  private gaqlQueryStringIncludesLimit(gaqlQuery: string) {
    return gaqlQuery.toLowerCase().includes("limit ");
  }

  private generateTooManyRowsError() {
    return new Error(
      `Exceeded the maximum number of rows set by "max_reporting_rows" (${this.clientOptions.max_reporting_rows}).`
    );
  }
}
