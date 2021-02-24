import { errors, services } from "./protos";
import {
  CustomerCredentials,
  MutateOperation,
  ReportOptions,
  RequestOptions,
  MutateOptions,
} from "./types";

export type BaseQueryHookArgs = {
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

type PreHookArgs<T = RequestOptions | MutateOptions> = {
  cancel: (args?: any) => void;
  editOptions: (options: Partial<T>) => void;
};

type ErrorHookArgs = {
  error: errors.GoogleAdsFailure | Error;
};

type PostHookArgs<
  T = services.IGoogleAdsRow[] | services.MutateGoogleAdsResponse
> = {
  response: T;
  resolve: (args: any) => void;
};

type HookArgs = PreHookArgs | ErrorHookArgs | PostHookArgs;

type QueryHook<H extends HookArgs> = (args: BaseQueryHookArgs & H) => void;

type MutationHook<H extends HookArgs> = (
  args: BaseMutationHookArgs & H
) => void;

export type OnQueryStart = QueryHook<PreHookArgs<RequestOptions>>;
export type OnQueryError = QueryHook<ErrorHookArgs>;
export type OnQueryEnd = QueryHook<PostHookArgs<services.IGoogleAdsRow[]>>;

export type OnMutationStart = MutationHook<PreHookArgs<MutateOptions>>;
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
   * @param cancel utility function for cancelling the query. if an argument is provided then the query will return this argument
   * @param editOptions utility function for editing the request options. any request option keys that are passed will be changed
   */
  onQueryStart?: OnQueryStart;
  /**
   * @description Hook called upon a query throwing an error
   * @params `{ credentials, query, reportOptions, error }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param error google ads error
   */
  onQueryError?: OnQueryError;
  /**
   * @description Hook called after successful execution of a query
   * @params `{ credentials, query, reportOptions, response, resolve }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param response results of the query
   * @param resolve utility function for returning an alternative value from the query. will not work with reportStream
   */
  onQueryEnd?: OnQueryEnd;
  /**
   * @description Hook called before execution of a mutation.
   * @params `{ credentials, mutations, cancel, editOptions }`
   * @param credentials customer id, login customer id, linked customer id
   * @param mutations
   * @param cancel utility function for cancelling the mutation. if an argument is provided then the query/report will return this argument
   * @param editOptions utility function for editing the mutate options. any mutate option keys that are passed will be changed
   */
  onMutationStart?: OnMutationStart;
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
