import { errors, services } from "./protos";
import {
  CustomerCredentials,
  MutateOperation,
  ReportOptions,
  RequestOptions,
  MutateOptions,
} from "./types";

export type BaseRequestHookArgs = {
  credentials: CustomerCredentials;
  query: string;
  reportOptions?: ReportOptions;
};

export type BaseMutationHookArgs = {
  credentials: CustomerCredentials;
  method: `${keyof typeof services}.${string}`;
} & (
  | // Mutation was executed with customer.mutateResources
  { mutations: MutateOperation<any>[]; isServiceCall: false }
  // Mutation was executed with a service e.g. customer.campaigns.create
  | { mutation: any; isServiceCall: true }
);

type OneArgFn<A> = A extends void ? () => void : (args?: A) => void;

type PreHookArgs<T = RequestOptions | MutateOptions, A = void> = {
  cancel: OneArgFn<A>;
  editOptions: (options: Partial<T>) => void;
};

type ErrorHookArgs = {
  error: errors.GoogleAdsFailure | Error;
};

type PostHookArgs<
  T = services.IGoogleAdsRow[] | services.MutateGoogleAdsResponse
> = {
  response?: T;
  resolve: (args: any) => void;
};

type HookArgs = PreHookArgs | ErrorHookArgs | PostHookArgs;

type RequestHook<H extends HookArgs> = (args: BaseRequestHookArgs & H) => void;

type MutationHook<H extends HookArgs> = (
  args: BaseMutationHookArgs & H
) => void;

export type OnRequestStart<A = void> = RequestHook<
  PreHookArgs<RequestOptions, A | void>
>;
export type OnRequestError = RequestHook<ErrorHookArgs>;
export type OnRequestEnd = RequestHook<PostHookArgs<services.IGoogleAdsRow[]>>;

export type OnMutationStart<A = void> = MutationHook<
  PreHookArgs<MutateOptions, A | void>
>;
export type OnMutationError = MutationHook<ErrorHookArgs>;
export type OnMutationEnd = MutationHook<
  PostHookArgs<services.MutateGoogleAdsResponse>
>;

export interface Hooks {
  /**
   * @description Hook called before execution of a query.
   * @params `{ credentials, query, reportOptions, cancel, editOptions }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param cancel utility function for cancelling the query. if an argument is provided then the query will return this argument. however a generic type will need to be passed to `OnRequestStart` to represent the type of the alternative result.
   * @param editOptions utility function for editing the request options. any request option keys that are passed will be changed
   */
  onQueryStart?: OnRequestStart<any>;
  /**
   * @description Hook called upon a query throwing an error
   * @params `{ credentials, query, reportOptions, error }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param error google ads error
   */
  onQueryError?: OnRequestError;
  /**
   * @description Hook called after successful execution of a query
   * @params `{ credentials, query, reportOptions, response, resolve }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param response results of the query, not available on reportStream
   * @param resolve utility function for returning an alternative value from the query. will not work with reportStream
   */
  onQueryEnd?: OnRequestEnd;
  /**
   * @description Hook called before execution of a stream.
   * @params `{ credentials, query, reportOptions, cancel, editOptions }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param cancel utility function for cancelling the stream
   * @param editOptions utility function for editing the request options. any request option keys that are passed will be changed
   */
  onStreamStart?: OnRequestStart<void>;
  /**
   * @description Hook called upon a stream throwing an error
   * @params `{ credentials, query, reportOptions, error }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param error google ads error
   */
  onStreamError?: OnRequestError;
  /**
   * @description Hook called before execution of a mutation.
   * @params `{ credentials, mutations, cancel, editOptions }`
   * @param credentials customer id, login customer id, linked customer id
   * @param mutations
   * @param cancel utility function for cancelling the mutation. if an argument is provided then the query/report will return this argument
   * @param editOptions utility function for editing the mutate options. any mutate option keys that are passed will be changed
   */
  onMutationStart?: OnMutationStart<any>;
  /**
   * @description Hook called upon a mutation throwing an error
   * @params `{ credentials, mutations error }`
   * @param credentials customer id, login customer id, linked customer id
   * @param mutations
   * @param error google ads error
   */
  onMutationError?: OnMutationError;
  /**
   * @description Hook called after successful execution of a mutation
   * @params `{ credentials, mutations, response, resolve }`
   * @param credentials customer id, login customer id, linked customer id
   * @mutations
   * @param response results of the mutation
   * @param resolve utility function for returning an alternative value from the mutation
   */
  onMutationEnd?: OnMutationEnd;
}

export type HookedCancellation = { cancelled: boolean; res?: any };
export type HookedResolution = { resolved: boolean; res?: any };
