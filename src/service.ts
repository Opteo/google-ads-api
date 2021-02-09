import { grpc } from "google-gax";
import { UserRefreshClient } from "google-auth-library";
import { ClientOptions } from "./client";
import { CustomerOptions, CustomerCredentials } from "./customer";
import {
  AllServices,
  errors,
  GoogleAdsServiceClient,
  ServiceName,
  services,
} from "./protos";
import { RequestOptions } from "./types";
import { getFieldMask } from "./utils";
import { googleAdsVersion } from "../package.json";

// Make sure to update this version number when upgrading
export const FAILURE_KEY = `google.ads.googleads.${googleAdsVersion}.errors.googleadsfailure-bin`;

export interface CallHeaders {
  "developer-token": string;
  "login-customer-id"?: string;
  "linked-customer-id"?: string;
}

export class Service {
  protected readonly clientOptions: ClientOptions;
  protected readonly customerOptions: CustomerOptions;
  private serviceCache!: Record<ServiceName, AllServices>;

  constructor(clientOptions: ClientOptions, customerOptions: CustomerOptions) {
    this.clientOptions = clientOptions;
    this.customerOptions = customerOptions;

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
    if (this.serviceCache[service]) {
      return (this.serviceCache[service] as unknown) as T;
    }
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { [service]: protoService } = require("google-ads-node");
    if (typeof protoService === "undefined") {
      throw new Error(`Service "${service}" could not be found`);
    }
    const client = new protoService({
      sslCreds: this.getCredentials(),
    });
    this.serviceCache[service] = client;
    return (client as unknown) as T;
  }

  protected getGoogleAdsError(error: Error): errors.GoogleAdsFailure | Error {
    // @ts-expect-error No type exists for GA query error
    if (typeof error?.metadata?.internalRepr.get(FAILURE_KEY) === "undefined") {
      return error;
    }
    // @ts-expect-error No type exists for GA query error
    const [buffer] = error.metadata.internalRepr.get(FAILURE_KEY);
    const googleAdsFailure = errors.GoogleAdsFailure.decode(buffer);
    return googleAdsFailure;
  }

  protected async buildSearchRequestAndService(
    gaql: string,
    options?: RequestOptions
  ): Promise<{
    service: GoogleAdsServiceClient;
    request: services.SearchGoogleAdsRequest;
  }> {
    const service: GoogleAdsServiceClient = await this.loadService(
      "GoogleAdsServiceClient"
    );
    const request: services.SearchGoogleAdsRequest = new services.SearchGoogleAdsRequest(
      {
        customer_id: this.customerOptions.customer_id,
        query: gaql,
        ...options,
      }
    );
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
      if (type === "update") {
        // @ts-expect-error Field required for updates
        op.updateMask = getFieldMask(
          // @ts-expect-error Message types have a toObject method
          message.toObject(e, {
            defaults: false,
          })
        );
      }
      return op;
    });
    return (ops as unknown) as Op[];
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
    return (request as unknown) as Req;
  }
}
