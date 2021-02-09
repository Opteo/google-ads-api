import { ClientOptions } from "./client";
import ServiceFactory from "./protos/autogen/serviceFactory";
import { errors, services } from "./protos";
import { buildQuery } from "./query";
import {
  MutateOperation,
  MutateOptions,
  ReportOptions,
  RequestOptions,
} from "./types";
import { getFieldMask, toCamelCase } from "./utils";
import { parse } from "./parser";

export type CustomerCredentials = Pick<
  CustomerOptions,
  "customer_id" | "login_customer_id" | "linked_customer_id"
>;

type BaseHookArgs = {
  credentials: CustomerCredentials;
  query: string; // GAQL query
  reportOptions?: ReportOptions; // Available on report and reportStream
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PreHookArgs = { cancel: (args?: any) => void }; // Utility function for cancelling the request. If args are provided then these will be returned from the query
type ErrorHookArgs = { error: errors.GoogleAdsFailure | Error };
type PostHookArgs = {
  response: services.IGoogleAdsRow[]; // Results of the query
  resolve: (args: any) => void; // Utility function for resolving the request with an alternative value.
};

type HookArgs = PreHookArgs | ErrorHookArgs | PostHookArgs;
type Hook<H extends HookArgs> = (args: BaseHookArgs & H) => void;

export interface Hooks {
  /**
   * @description Hook called before execution of query.
   * @params `{ credentials, query, reportOptions, cancel }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param cancel utility function for cancelling the request. if an argument is provided then the query/report will return this argument
   */
  onQueryStart?: Hook<PreHookArgs>;
  /**
   * @description Hook called upon error from query.
   * @params `{ credentials, query, reportOptions, error }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param error google ads error(s)
   */
  onQueryError?: Hook<ErrorHookArgs>;
  /**
   * @description Hook called after successful execution of query.
   * @params `{ credentials, query, reportOptions, response, resolve }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param response query results
   * @param resolve utility function for returning an alternative value from the query/report. does not work with reportStream
   */
  onQueryEnd?: Hook<PostHookArgs>;
}

type QueryCancellation = { cancelled: boolean; res?: any };
type QueryResolution = { resolved: boolean; res?: any };

export interface CustomerOptions {
  customer_id: string;
  refresh_token: string;
  login_customer_id?: string;
  linked_customer_id?: string;
}

export class Customer extends ServiceFactory {
  protected readonly hooks: Hooks;

  constructor(
    clientOptions: ClientOptions,
    customerOptions: CustomerOptions,
    hooks?: Hooks
  ) {
    super(clientOptions, customerOptions);
    this.hooks = hooks || {};
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

    const baseHookArguments: BaseHookArgs = {
      credentials: this.credentials,
      query: gaqlQuery,
      reportOptions,
    };

    const queryStart: QueryCancellation = { cancelled: false };
    if (this.hooks.onQueryStart) {
      this.hooks.onQueryStart({
        ...baseHookArguments,
        cancel: (res) => {
          queryStart.cancelled = true;
          queryStart.res = res;
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
    const { service, request } = await this.buildSearchRequestAndService(
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
        this.hooks.onQueryEnd({
          ...baseHookArguments,
          response: result,
          resolve: () => {
            return;
          },
        });
      }
    } catch (searchError) {
      throw this.onSearchError(searchError, baseHookArguments);
    }
  }

  /**
    @description Single query using a GAQL query
   */
  public async query<T = services.IGoogleAdsRow[]>(
    gaqlQuery: string,
    requestOptions?: RequestOptions,
    reportOptions?: ReportOptions
  ): Promise<T> {
    const baseHookArguments: BaseHookArgs = {
      credentials: this.credentials,
      query: gaqlQuery,
      reportOptions,
    };

    if (this.hooks.onQueryStart) {
      const queryCancellation: QueryCancellation = { cancelled: false };
      this.hooks.onQueryStart({
        ...baseHookArguments,
        cancel: (res) => {
          queryCancellation.cancelled = true;
          queryCancellation.res = res;
        },
      });
      if (queryCancellation.cancelled) {
        return queryCancellation.res as T;
      }
    }
    const { service, request } = await this.buildSearchRequestAndService(
      gaqlQuery,
      requestOptions
    );
    try {
      const [response] = await service.search(request, {
        otherArgs: {
          headers: this.callHeaders,
        },
      });

      const parsedResponse = this.clientOptions.disable_parsing
        ? response
        : reportOptions
        ? parse({ results: response, reportOptions })
        : parse({ results: response, gaqlString: gaqlQuery });

      if (this.hooks.onQueryEnd) {
        const queryResolution: QueryResolution = { resolved: false };
        this.hooks.onQueryEnd({
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
      throw this.onSearchError(searchError, baseHookArguments);
    }
  }

  private onSearchError(
    searchError: Error,
    baseHookArguments: BaseHookArgs
  ): errors.GoogleAdsFailure | Error {
    const googleAdsError = this.getGoogleAdsError(searchError);
    if (this.hooks.onQueryError) {
      this.hooks.onQueryError({
        ...baseHookArguments,
        error: googleAdsError,
      });
    }
    return googleAdsError;
  }

  /**
   * @description Creates, updates, or removes resources. This method supports atomic transactions with multiple types of resources. For example, you can atomically create a campaign and a campaign budget, or perform up to thousands of mutates atomically.
   */
  public async mutateResources<T>(
    mutations: MutateOperation<T>[],
    options?: MutateOptions
  ): Promise<services.MutateGoogleAdsResponse> {
    const service = this.loadService<services.GoogleAdsService>(
      "GoogleAdsServiceClient"
    );
    const mutateOperations = mutations.map((mutation) => {
      const opKey = `${toCamelCase(mutation.entity)}Operation`;
      const operation = {
        [mutation.operation ?? "create"]: mutation.resource,
      };
      if (mutation.operation === "update") {
        // @ts-expect-error Resource operations should have updateMask defined
        op.updateMask = getFieldMask(mutation.resource);
      }
      const mutateOperation = new services.MutateOperation({
        [opKey]: operation,
      });
      return mutateOperation;
    });
    const request = new services.MutateGoogleAdsRequest({
      customer_id: this.customerOptions.customer_id,
      mutate_operations: mutateOperations,
      ...options,
    });
    try {
      const response = await service.mutate(request, {
        // @ts-expect-error Field not included in type definitions
        otherArgs: {
          headers: this.callHeaders,
        },
      });
      return response;
    } catch (err) {
      throw this.getGoogleAdsError(err);
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
