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

export type BaseServiceHookArgs = {
  credentials: CustomerCredentials;
  method: `${keyof typeof services}.${string}`;
  requestOptions: any;
};

// TODO: add options for services
type StartHookArgs<T = RequestOptions | MutateOptions, A = void> = {
  cancel: A extends void ? () => void : (args?: A) => void;
  editOptions: (options: Partial<T>) => void;
};

type ErrorHookArgs = {
  error: errors.GoogleAdsFailure | Error;
};

type EndHookArgs<
  T = services.IGoogleAdsRow[] | services.MutateGoogleAdsResponse
> = {
  response?: T;
  resolve: (args: any) => void;
};

type HookArgs = StartHookArgs | ErrorHookArgs | EndHookArgs;

type RequestHook<H extends HookArgs> = (a: BaseRequestHookArgs & H) => void;
type MutationHook<H extends HookArgs> = (a: BaseMutationHookArgs & H) => void;
type ServiceHook<H extends HookArgs> = (a: BaseServiceHookArgs & H) => void;

export type OnQueryStart = RequestHook<StartHookArgs<RequestOptions, any>>;
export type OnQueryError = RequestHook<ErrorHookArgs>;
export type OnQueryEnd = RequestHook<EndHookArgs<services.IGoogleAdsRow[]>>;

export type OnStreamStart = RequestHook<StartHookArgs<RequestOptions, void>>;
export type OnStreamError = RequestHook<ErrorHookArgs>;

export type OnMutationStart = MutationHook<StartHookArgs<MutateOptions, any>>;
export type OnMutationError = MutationHook<ErrorHookArgs>;
export type OnMutationEnd = MutationHook<
  EndHookArgs<services.MutateGoogleAdsResponse>
>;

// TODO: add type instead of any
export type OnServiceStart = ServiceHook<StartHookArgs<any, any>>;
export type OnServiceError = ServiceHook<ErrorHookArgs>;
// TODO: add type instead of any
export type OnServiceEnd = ServiceHook<EndHookArgs<any>>;

export interface Hooks {
  /**
   * @description Hook called before execution of a query in the `query` and `report` methods
   * @params `{ credentials, query, reportOptions, cancel, editOptions }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param cancel utility function for cancelling the query. if an argument is provided then the query will return this argument
   * @param editOptions utility function for editing the request options. any request option keys that are passed will be changed
   */
  onQueryStart?: OnQueryStart;
  /**
   * @description Hook called upon a query throwing an error in the `query` and `report` methods
   * @params `{ credentials, query, reportOptions, error }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param error google ads error
   */
  onQueryError?: OnQueryError;
  /**
   * @description Hook called after successful execution of a query in the `query` and `report` methods
   * @params `{ credentials, query, reportOptions, response, resolve }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param response results of the query, not available on reportStream
   * @param resolve utility function for returning an alternative value from the query
   */
  onQueryEnd?: OnQueryEnd;
  /**
   * @description Hook called before execution of a stream in the `reportStream` and `reportStreamRaw` methods
   * @params `{ credentials, query, reportOptions, cancel, editOptions }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param cancel utility function for cancelling the stream
   * @param editOptions utility function for editing the request options. any request option keys that are passed will be changed
   */
  onStreamStart?: OnStreamStart;
  /**
   * @description Hook called upon a stream throwing an error in the `reportStream` method. Will not be called for an error in `reportStreamRaw`
   * @params `{ credentials, query, reportOptions, error }`
   * @param credentials customer id, login customer id, linked customer id
   * @param query gaql
   * @param reportOptions
   * @param error google ads error
   */
  onStreamError?: OnStreamError;
  /**
   * @description Hook called before execution of a mutation
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
  onServiceStart?: OnServiceStart;
  onServiceError?: OnServiceError;
  onServiceEnd?: OnServiceEnd;
}

export type HookedCancellation = { cancelled: boolean; res?: any };
export type HookedResolution = { resolved: boolean; res?: any };
