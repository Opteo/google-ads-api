import { Customer } from "./customer";
import { Hooks } from "./hooks";
import { services } from "./protos";
import { Service } from "./service";
import { CustomerOptions } from "./types";

// Minimal interface for service account auth, to allow to get access token
export interface ServiceAccountAuth {
  getAccessToken(): Promise<{ token?: string | null }>;
}

export interface OAuth2ClientOptions {
  client_id: string;
  client_secret: string;
  developer_token: string;
  disable_parsing?: boolean;
  max_reporting_rows?: number;
}

export interface ServiceAccountClientOptions {
  auth_client: ServiceAccountAuth;
  developer_token: string;
  disable_parsing?: boolean;
  max_reporting_rows?: number;
}

export type ClientOptions = OAuth2ClientOptions | ServiceAccountClientOptions;

export function isServiceAccountOptions(
  options: ClientOptions
): options is ServiceAccountClientOptions {
  return "auth_client" in options;
}

export function isOAuth2Options(
  options: ClientOptions
): options is OAuth2ClientOptions {
  return "client_id" in options && "client_secret" in options;
}

export class Client {
  private readonly options: ClientOptions;

  constructor(options: ClientOptions) {
    this.options = options;
  }

  public Customer(customerOptions: CustomerOptions, hooks?: Hooks): Customer {
    const cus = new Customer(this.options, customerOptions, hooks);
    return cus;
  }

  public async listAccessibleCustomers(
    refreshToken?: string
  ): Promise<services.ListAccessibleCustomersResponse> {
    let service: Service;

    if (isServiceAccountOptions(this.options)) {
      // For service accounts, we don't need a refresh token
      service = new Service(this.options, {
        customer_id: "",
      });
    } else if (isOAuth2Options(this.options)) {
      // For OAuth2, we need the refresh token
      if (!refreshToken) {
        throw new Error("refresh_token is required for OAuth2 authentication");
      }
      service = new Service(this.options, {
        customer_id: "",
        refresh_token: refreshToken,
      });
    } else {
      throw new Error("Invalid client options");
    }
    // @ts-expect-error Protected usage is fine here
    const customerService = await service.loadService<services.CustomerService>(
      "CustomerServiceClient"
    );
    try {
      // @ts-expect-error Type definition is incorrect, response is an array
      const [response] = await customerService.listAccessibleCustomers(
        {},
        {
          // @ts-expect-error Field not included in type definitions
          otherArgs: {
            // @ts-expect-error Protected usage is fine here
            headers: service.callHeaders,
          },
        }
      );
      return response;
    } catch (err) {
      console.log(err);
      // @ts-expect-error Protected usage is fine here
      throw service.getGoogleAdsError(err);
    }
  }
}
