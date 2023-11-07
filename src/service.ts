import { grpc } from "google-gax";
import { UserRefreshClient } from "google-auth-library";
import { ClientOptions } from "./client";
import {
  AllServices,
  errors,
  GoogleAdsServiceClient,
  ServiceName,
  services,
} from "./protos";
import {
  CustomerOptions,
  CustomerCredentials,
  RequestOptions,
  MutateOperation,
  MutateOptions,
} from "./types";
import { getFieldMask, toSnakeCase } from "./utils";
import { googleAdsVersion } from "./version";
import { Hooks } from "./hooks";
import TTLCache from "@isaacs/ttlcache";

// Make sure to update this version number when upgrading
export const FAILURE_KEY = `google.ads.googleads.${googleAdsVersion}.errors.googleadsfailure-bin`;

export interface CallHeaders {
  "developer-token": string;
  "login-customer-id"?: string;
  "linked-customer-id"?: string;
}

// A global service cache to avoid re-initialising services
const serviceCache = new TTLCache({
  max: 1000,
  ttl: 10 * 60 * 1000, // 10 minutes
  dispose: async (service: any) => {
    // Close connections when services are removed from the cache
    await service.close();
  },
});

export class Service {
  protected readonly clientOptions: ClientOptions;
  protected readonly customerOptions: CustomerOptions;
  protected readonly hooks: Hooks;

  constructor(
    clientOptions: ClientOptions,
    customerOptions: CustomerOptions,
    hooks?: Hooks
  ) {
    this.clientOptions = clientOptions;
    this.customerOptions = customerOptions;
    this.hooks = hooks ?? {};

    // @ts-expect-error All fields don't need to be set here
    this.serviceCache = {};
  }

  public get credentials(): CustomerCredentials {
    return {
      customer_id: this.customerOptions.customer_id,
      login_customer_id: this.customerOptions.login_customer_id,
      linked_customer_id: this.customerOptions.linked_customer_id,
    };
  }

  protected get callHeaders(): CallHeaders {
    const headers: CallHeaders = {
      "developer-token": this.clientOptions.developer_token,
    };
    if (this.customerOptions.login_customer_id) {
      headers["login-customer-id"] = this.customerOptions.login_customer_id;
    }
    if (this.customerOptions.linked_customer_id) {
      headers["linked-customer-id"] = this.customerOptions.linked_customer_id;
    }
    return headers;
  }

  private getCredentials(): grpc.ChannelCredentials {
    const sslCreds = grpc.credentials.createSsl();
    const authClient = new UserRefreshClient(
      this.clientOptions.client_id,
      this.clientOptions.client_secret,
      this.customerOptions.refresh_token
    );
    const credentials = grpc.credentials.combineChannelCredentials(
      sslCreds,
      grpc.credentials.createFromGoogleCredential(authClient)
    );
    return credentials;
  }

  protected loadService<T = AllServices>(service: ServiceName): T {
    const serviceCacheKey = `${service}_${this.customerOptions.refresh_token}`;

    if (serviceCache.has(serviceCacheKey)) {
      return serviceCache.get(serviceCacheKey) as unknown as T;
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { [service]: protoService } = require("google-ads-node");
    if (typeof protoService === "undefined") {
      throw new Error(`Service "${service}" could not be found`);
    }

    // Initialising services can take a few ms, so we cache when possible.
    const client = new protoService({
      sslCreds: this.getCredentials(),
    });

    serviceCache.set(serviceCacheKey, client);
    return client as unknown as T;
  }

  protected getGoogleAdsError(error: Error): errors.GoogleAdsFailure | Error {
    // @ts-expect-error No type exists for GA query error
    if (typeof error?.metadata?.internalRepr.get(FAILURE_KEY) === "undefined") {
      return error;
    }
    // @ts-expect-error No type exists for GA query error
    const [buffer] = error.metadata.internalRepr.get(FAILURE_KEY);
    return this.decodeGoogleAdsFailureBuffer(buffer);
  }

  private decodeGoogleAdsFailureBuffer(
    buffer: Buffer
  ): errors.GoogleAdsFailure {
    const googleAdsFailure = errors.GoogleAdsFailure.decode(buffer);
    return googleAdsFailure;
  }

  protected decodePartialFailureError<T>(response: T): T {
    if (
      typeof (response as any)?.partial_failure_error === "undefined" ||
      !(response as any)?.partial_failure_error
    ) {
      return response;
    }
    const { details } = (response as any).partial_failure_error;
    const buffer = details?.find((d: { type_url: string; value: Buffer }) =>
      d.type_url.includes("errors.GoogleAdsFailure")
    )?.value;
    if (typeof buffer === "undefined") {
      return response;
    }
    // Update the partial failure field with the decoded error details
    return {
      ...response,
      partial_failure_error: this.decodeGoogleAdsFailureBuffer(buffer),
    };
  }

  protected buildSearchRequestAndService(
    gaql: string,
    options?: RequestOptions
  ): {
    service: GoogleAdsServiceClient;
    request: services.SearchGoogleAdsRequest;
  } {
    const service: GoogleAdsServiceClient = this.loadService(
      "GoogleAdsServiceClient"
    );
    const request: services.SearchGoogleAdsRequest =
      new services.SearchGoogleAdsRequest({
        customer_id: this.customerOptions.customer_id,
        query: gaql,
        ...options,
      });
    return { service, request };
  }

  protected buildSearchStreamRequestAndService(
    gaql: string,
    options?: RequestOptions
  ): {
    service: GoogleAdsServiceClient;
    request: services.SearchGoogleAdsStreamRequest;
  } {
    const service: GoogleAdsServiceClient = this.loadService(
      "GoogleAdsServiceClient"
    );
    const request: services.SearchGoogleAdsStreamRequest =
      new services.SearchGoogleAdsStreamRequest({
        customer_id: this.customerOptions.customer_id,
        query: gaql,
        ...options,
      });
    return { service, request };
  }

  protected buildMutationRequestAndService<T>(
    mutations: MutateOperation<T>[],
    options?: MutateOptions
  ): {
    service: GoogleAdsServiceClient;
    request: services.MutateGoogleAdsRequest;
  } {
    const service: GoogleAdsServiceClient = this.loadService(
      "GoogleAdsServiceClient"
    );

    const mutateOperations = mutations.map(
      (mutation): services.MutateOperation => {
        const opKey = toSnakeCase(`${mutation.entity}Operation`);
        const operation = {
          [mutation.operation ?? "create"]: mutation.resource,
        };
        if (
          mutation.operation === "create" &&
          //@ts-ignore
          mutation?.exempt_policy_violation_keys?.length
        ) {
          operation.exempt_policy_violation_keys =
            // @ts-expect-error Field required for policy violation exemptions
            mutation.exempt_policy_violation_keys;
        } else if (mutation.operation === "update") {
          // @ts-expect-error Resource operations should have updateMask defined
          operation.update_mask = getFieldMask(mutation.resource);
        }
        const mutateOperation = new services.MutateOperation({
          [opKey]: operation,
        });
        return mutateOperation;
      }
    );

    const request = new services.MutateGoogleAdsRequest({
      customer_id: this.customerOptions.customer_id,
      mutate_operations: mutateOperations,
      ...options,
    });

    return { service, request };
  }

  protected buildOperations<Op, Ent>(
    type: "create" | "update" | "remove",
    entities: Ent[],
    message?: Ent
  ): Op[] {
    const ops = entities.map((e) => {
      const op = {
        [type]: e,
        operation: type,
      };
      //@ts-ignore
      if (type === "create" && e?.exempt_policy_violation_keys?.length) {
        // @ts-expect-error Field required for policy violation exemptions
        op.exempt_policy_violation_keys = e.exempt_policy_violation_keys;
        //@ts-ignore
        delete e.exempt_policy_violation_keys;
      } else if (type === "update") {
        // @ts-expect-error Field required for updates
        op.update_mask = getFieldMask(
          // @ts-expect-error Message types have a toObject method
          message.toObject(e, {
            defaults: false,
          })
        );
      }
      return op;
    });
    return ops as unknown as Op[];
  }

  protected buildRequest<Op, Req, Options>(
    operations: Op[],
    options?: Options
  ): Req {
    const request = {
      customer_id: this.customerOptions.customer_id,
      operations,
      ...options,
    };
    return request as unknown as Req;
  }
}
