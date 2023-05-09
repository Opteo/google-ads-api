import { GoogleAdsServiceClient } from "google-ads-node";
import { google } from "google-gax/build/protos/operations";
import { errors, services } from "./protos";
import { FAILURE_KEY } from "./service";
import {
  failTestIfExecuted,
  newCustomer,
  MOCK_CID,
  MOCK_LOGIN_CID,
  MOCK_DEVELOPER_TOKEN,
} from "./testUtils";
import { googleAdsVersion } from "../src/version";

beforeAll(() => {
  // Timeout required as the first service load can take a while
  jest.setTimeout(20000);
});

describe("Service", () => {
  describe("loadService", () => {
    it("should load a valid service", () => {
      const customer = newCustomer();
      // @ts-expect-error Accessing private method for test purposes
      const service = customer.loadService("GoogleAdsServiceClient");
      expect(service).toBeInstanceOf(GoogleAdsServiceClient);
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
});
