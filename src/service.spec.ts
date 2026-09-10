import {
  CustomerServiceClient,
  GoogleAdsServiceClient,
  protos,
} from "google-ads-node";
import { operationsProtos } from "google-gax";
import { UserRefreshClient } from "google-auth-library";
import { errors, services } from "./protos/index.js";
import { disposeService, FAILURE_KEY, serviceCache } from "./service.js";
import { Customer } from "./customer.js";
import {
  failTestIfExecuted,
  newCustomer,
  MOCK_CID,
  MOCK_CLIENT_ID,
  MOCK_CLIENT_SECRET,
  MOCK_LOGIN_CID,
  MOCK_DEVELOPER_TOKEN,
  MOCK_REFRESH_TOKEN,
} from "./testUtils.js";
import { googleAdsVersion } from "../src/version.js";
type google = typeof operationsProtos.google;
const google = operationsProtos.google;

beforeAll(() => {
  // Timeout required as the first service load can take a while
  jest.setTimeout(20000);
});

describe("Service", () => {
  afterEach(() => {
    // Tests share the module-level cache; clear it so no test depends on
    // entries cached by another
    serviceCache.clear();
  });

  describe("loadService", () => {
    it("should load a valid service", () => {
      const customer = newCustomer();
      // @ts-expect-error Accessing private method for test purposes
      const service = customer.loadService("GoogleAdsServiceClient");
      expect(service).toBeInstanceOf(GoogleAdsServiceClient);
    });

    it("does not cache the service when skipCache is set", () => {
      const customer = newCustomer();
      // @ts-expect-error Accessing private method for test purposes
      const service = customer.loadService("CustomerServiceClient", {
        skipCache: true,
      });
      expect(service).toBeDefined();

      const cachedKeys = [...serviceCache.keys()];
      expect(
        cachedKeys.some((key) =>
          String(key).startsWith("CustomerServiceClient")
        )
      ).toBe(false);
    });

    it("should throw an error if the service is invalid", () => {
      const customer = newCustomer();
      try {
        // @ts-expect-error Accessing private method for test purposes
        customer.loadService("BadServiceClient");
        failTestIfExecuted(); // should not be called
      } catch (err) {
        if (err instanceof Error) {
          expect(err.message.includes("could not be found")).toEqual(true);
        } else {
          throw new Error("error should be an instance of an Error");
        }
      }
    });
  });

  describe("getCredentials", () => {
    it("should create grpc channel credentials with customer auth", () => {
      const customer = newCustomer();
      // @ts-expect-error Accessing private method for test purposes
      const creds = customer.getCredentials();
      // This could be better
      expect(creds._isSecure()).toEqual(true);
    });
  });

  describe("getGoogleAdsError", () => {
    it("should decode an error buffer into a GoogleAdsFailure instance", async () => {
      // Prepare an error buffer
      const errorCode = errors.RequestErrorEnum.RequestError.BAD_RESOURCE_ID;
      const errorMessage = "error message";
      const errorFieldLocation = {
        field_name: "fake field",
        index: 0,
      };

      const failureMessage = new errors.GoogleAdsFailure({
        errors: [
          {
            error_code: new errors.ErrorCode({
              request_error: errorCode,
            }),
            message: errorMessage,
            location: {
              field_path_elements: [errorFieldLocation],
            },
          },
        ],
      });

      const failureBuffer =
        errors.GoogleAdsFailure.encode(failureMessage).finish();

      const customer = newCustomer();
      // @ts-expect-error Accessing private method for test purposes
      const service = customer.loadService<services.GoogleAdsService>(
        "GoogleAdsServiceClient"
      );

      // Hack to get an error object from the service call
      try {
        await service.search({});
        failTestIfExecuted();
      } catch (err) {
        if (err instanceof Error) {
          // @ts-expect-error Accessing private property for test purposes
          err.metadata.internalRepr.set(FAILURE_KEY, [failureBuffer]);
        } else {
          throw new Error("error should be an instance of an Error");
        }

        // @ts-expect-error Accessing private property for test purposes
        const error = customer.getGoogleAdsError(err);

        expect(error instanceof errors.GoogleAdsFailure).toEqual(true);
        // @ts-expect-error In thise case the error is a GoogleAdsFailure
        expect(error.toJSON()).toEqual({
          errors: [
            {
              error_code: {
                request_error: "BAD_RESOURCE_ID",
              },
              location: {
                field_path_elements: [errorFieldLocation],
              },
              message: errorMessage,
            },
          ],
        });
      }
    });

    it("should handle standard grpc errors", async () => {
      try {
        const customer = newCustomer();
        // @ts-expect-error Accessing private method for test purposes
        const service = customer.loadService<services.GoogleAdsService>(
          "GoogleAdsServiceClient"
        );
        await service.search({});
        failTestIfExecuted();
      } catch (err) {
        if (err instanceof Error) {
          expect(err instanceof Error).toEqual(true);
          // @ts-expect-error This field exists
          expect(err.code).toEqual(2);
        } else {
          throw new Error("err should be an instance of an Error");
        }
      }
    });
  });

  describe("decodePartialFailureError", () => {
    it("should decode a partial failure error buffer if present", () => {
      // Prepare an error buffer
      const failureMessage = new errors.GoogleAdsFailure({
        errors: [
          {
            error_code: new errors.ErrorCode({
              request_error:
                errors.RequestErrorEnum.RequestError.BAD_RESOURCE_ID,
            }),
            message: "error message",
            location: {
              field_path_elements: [
                {
                  field_name: "fake field",
                  index: 0,
                },
              ],
            },
          },
        ],
      });

      const failureBuffer =
        errors.GoogleAdsFailure.encode(failureMessage).finish();

      const response = new services.MutateGoogleAdsResponse({
        partial_failure_error: new google.rpc.Status({
          details: [
            {
              type_url: `google.ads.googleads.${googleAdsVersion}.errors.GoogleAdsFailure`,
              value: failureBuffer,
            },
          ],
        }),
      });

      const customer = newCustomer();

      const parsedPartialFailureResponse =
        // @ts-expect-error Accessing private method for test purposes
        customer.decodePartialFailureError(response);

      expect(parsedPartialFailureResponse).toEqual({
        mutate_operation_responses: [],
        partial_failure_error: failureMessage,
      });
    });

    it("should do nothing if no partial failures exist", () => {
      const customer = newCustomer();
      // @ts-expect-error Accessing private method for test purposes
      const parsedPartialFailureResponse = customer.decodePartialFailureError(
        new services.MutateGoogleAdsResponse({
          partial_failure_error: undefined,
        })
      );
      expect(parsedPartialFailureResponse).toEqual({
        mutate_operation_responses: [],
      });
    });
  });

  describe("credentials", () => {
    it("should expose the customer ids", () => {
      const customer = newCustomer();
      expect(customer.credentials).toEqual({
        customer_id: MOCK_CID,
        login_customer_id: MOCK_LOGIN_CID,
        linked_customer_id: undefined,
      });
    });
  });

  describe("callHeaders", () => {
    it("should build the call headers for service requests", () => {
      const customer = newCustomer();
      // @ts-expect-error Accessing private property for test purposes
      expect(customer.callHeaders).toEqual({
        "developer-token": MOCK_DEVELOPER_TOKEN,
        "login-customer-id": MOCK_LOGIN_CID,
      });
    });
  });

  describe("FAILURE_KEY", () => {
    it("matches the API version of the installed google-ads-node package", () => {
      const installedVersions = Object.keys(
        (protos.google.ads as any).googleads
      );
      expect(installedVersions).toContain(googleAdsVersion);
      expect(FAILURE_KEY).toBe(
        `google.ads.googleads.${googleAdsVersion}.errors.googleadsfailure-bin`
      );
    });
  });

  describe("serviceCache disposal", () => {
    it("closes services removed from the cache", async () => {
      const close = jest.fn().mockResolvedValue(undefined);
      serviceCache.set("disposal_test_key", { close });
      serviceCache.delete("disposal_test_key");

      await new Promise((resolve) => setImmediate(resolve));
      expect(close).toHaveBeenCalledTimes(1);
    });

    it("disposeService survives a rejected close()", async () => {
      const close = jest.fn().mockRejectedValue(new Error("channel down"));

      expect(() => disposeService({ close })).not.toThrow();

      await new Promise((resolve) => setImmediate(resolve));
      expect(close).toHaveBeenCalledTimes(1);
    });

    it("disposeService survives a synchronously throwing close()", () => {
      const close = jest.fn(() => {
        throw new Error("already destroyed");
      });

      expect(() => disposeService({ close })).not.toThrow();
    });

    it("creates a fresh service when the cached one has expired but is not yet purged", () => {
      const customer = newCustomer();
      // @ts-expect-error Accessing private method for test purposes
      const original = customer.loadService<CustomerServiceClient>(
        "CustomerServiceClient"
      );
      const key = [...serviceCache.keys()].find((cacheKey) =>
        String(cacheKey).startsWith("CustomerServiceClient")
      ) as string;
      expect(key).toBeDefined();

      serviceCache.set(key, original, { ttl: 1 });
      const start = Date.now();
      while (Date.now() - start < 10) {
        void 0;
      }

      // @ts-expect-error Accessing private method for test purposes
      const reloaded = customer.loadService("CustomerServiceClient");
      expect(reloaded).toBeInstanceOf(CustomerServiceClient);
    });
  });
});

describe("universe domain", () => {
  it("pins service clients to googleapis.com so no credential probe runs", () => {
    const customer = newCustomer();
    // @ts-expect-error Accessing protected method for test purposes
    const service = customer.loadService<{ _opts: Record<string, unknown> }>(
      "CustomerServiceClient",
      { skipCache: true }
    );
    expect(service._opts.universeDomain).toBe("googleapis.com");
  });
});

describe("getGoogleAdsError without a GoogleAdsFailure trailer", () => {
  it("returns the original error when metadata has no internalRepr", () => {
    const customer = newCustomer();
    const err = Object.assign(new Error("SERVICE_DISABLED"), { metadata: {} });
    // @ts-expect-error Accessing protected method for test purposes
    expect(customer.getGoogleAdsError(err)).toBe(err);
  });

  it("returns the original error when the trailer key is absent", () => {
    const customer = newCustomer();
    const err = Object.assign(new Error("UNAVAILABLE"), {
      metadata: { internalRepr: new Map() },
    });
    // @ts-expect-error Accessing protected method for test purposes
    expect(customer.getGoogleAdsError(err)).toBe(err);
  });
});

describe("grpc_channel_options", () => {
  it("passes channel options through to the service client", () => {
    const customer = new Customer(
      {
        client_id: MOCK_CLIENT_ID,
        client_secret: MOCK_CLIENT_SECRET,
        developer_token: MOCK_DEVELOPER_TOKEN,
        grpc_channel_options: { "grpc.keepalive_time_ms": 30000 },
      },
      { customer_id: MOCK_CID, refresh_token: MOCK_REFRESH_TOKEN }
    );
    // @ts-expect-error Accessing protected method for test purposes
    const service = customer.loadService<{ _opts: Record<string, unknown> }>(
      "CustomerServiceClient",
      { skipCache: true }
    );
    expect(service._opts["grpc.keepalive_time_ms"]).toBe(30000);
  });
});

describe("service cache partitioning", () => {
  const clientOptions = {
    client_id: MOCK_CLIENT_ID,
    client_secret: MOCK_CLIENT_SECRET,
    developer_token: MOCK_DEVELOPER_TOKEN,
  };
  const customerOptions = {
    customer_id: MOCK_CID,
    refresh_token: MOCK_REFRESH_TOKEN,
  };

  it("does not share cached clients between different channel options", () => {
    const first = new Customer(
      {
        ...clientOptions,
        grpc_channel_options: { "grpc.keepalive_time_ms": 1000 },
      },
      customerOptions
    );
    const second = new Customer(
      {
        ...clientOptions,
        grpc_channel_options: { "grpc.keepalive_time_ms": 2000 },
      },
      customerOptions
    );
    // @ts-expect-error Accessing protected method for test purposes
    const a = first.loadService<{ _opts: Record<string, unknown> }>(
      "CustomerServiceClient"
    );
    // @ts-expect-error Accessing protected method for test purposes
    const b = second.loadService<{ _opts: Record<string, unknown> }>(
      "CustomerServiceClient"
    );
    expect(b).not.toBe(a);
    expect(a._opts["grpc.keepalive_time_ms"]).toBe(1000);
    expect(b._opts["grpc.keepalive_time_ms"]).toBe(2000);
  });

  it("keeps sslCreds and universeDomain under library control", () => {
    const customer = new Customer(
      {
        ...clientOptions,
        grpc_channel_options: {
          universeDomain: "example.com",
          sslCreds: "nope",
        },
      },
      customerOptions
    );
    // @ts-expect-error Accessing protected method for test purposes
    const service = customer.loadService<{ _opts: Record<string, unknown> }>(
      "CustomerServiceClient",
      {
        skipCache: true,
      }
    );
    expect(service._opts.universeDomain).toBe("googleapis.com");
    expect(service._opts.sslCreds).not.toBe("nope");
  });
});

describe("gRPC call credentials", () => {
  it("forwards the auth client's headers as call metadata", async () => {
    jest
      .spyOn(UserRefreshClient.prototype, "getRequestHeaders")
      .mockResolvedValue(new Headers({ authorization: "Bearer test-token" }));
    const customer = newCustomer();
    // @ts-expect-error Accessing private method for test purposes
    const credentials = customer.getCredentials();
    const { callCredentials } = credentials as unknown as {
      callCredentials: {
        generateMetadata(options: {
          service_url: string;
        }): Promise<{ get(key: string): unknown[] }>;
      };
    };
    const metadata = await callCredentials.generateMetadata({
      service_url: "https://googleads.googleapis.com",
    });
    expect(metadata.get("authorization")).toEqual(["Bearer test-token"]);
  });
});
