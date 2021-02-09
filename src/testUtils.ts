import { Customer, Hooks } from "./customer";
import * as parser from "./parser";
import { GoogleAdsServiceClient, services, errors } from "./protos";

export const MOCK_CLIENT_ID = "MOCK CLIENT ID";
export const MOCK_CLIENT_SECRET = "MOCK CLIENT SECRET";
export const MOCK_DEVELOPER_TOKEN = "MOCK DEVELOPER TOKEN";
export const MOCK_REFRESH_TOKEN = "MOCK REFRESH TOKEN";
export const MOCK_CID = "MOCK CID";
export const MOCK_LOGIN_CID = "MOCK LOGIN CID";

export const mockQueryReturnValue: services.IGoogleAdsRow[] = [
  { campaign: { resource_name: "customers/1/campaigns/11" } },
  { campaign: { resource_name: "customers/2/campaigns/22" } },
  { campaign: { resource_name: "customers/3/campaigns/33" } },
];

export const mockQueryError = {
  errors: [
    {
      errorCode: {
        queryError:
          errors.QueryErrorEnum.QueryError.BAD_RESOURCE_TYPE_IN_FROM_CLAUSE,
      },
      message: "Error in campaigns:  is not a valid resource name.",
    },
  ],
};

export const mockQueryErrorMessage = "mock error message";

export const mockParseValues = [
  "mock",
  "parsed",
  "values",
] as services.IGoogleAdsRow[];

export const mockParseValue = "mock parse value" as services.IGoogleAdsRow;

export function mockBuildSearchRequestAndService(
  customer: Customer,
  shouldThrow = false
): void {
  jest
    // @ts-expect-error protected method
    .spyOn(customer, "buildSearchRequestAndService")
    // @ts-expect-error
    .mockImplementation(() => {
      return Promise.resolve({
        service: ({
          search: () => {
            if (shouldThrow) {
              throw new Error(mockQueryErrorMessage);
            }
            return [mockQueryReturnValue];
          },
          searchAsync: () => {
            if (shouldThrow) {
              throw new Error(mockQueryErrorMessage);
            }
            return mockQueryReturnValue;
          },
        } as unknown) as GoogleAdsServiceClient,
        request: {} as services.SearchGoogleAdsRequest,
      });
    });
}

export function mockGetGoogleAdsError(customer: Customer): jest.SpyInstance {
  return (
    jest
      // @ts-expect-error protected method
      .spyOn(customer, "getGoogleAdsError")
      // @ts-expect-error
      .mockImplementation(() => mockQueryError)
  );
}

export function mockQuery(customer: Customer): jest.SpyInstance {
  return (
    jest
      .spyOn(customer, "query")
      // @ts-expect-error
      .mockImplementation(() => [])
  );
}

export function mockParse(
  mockParseValue: services.IGoogleAdsRow[]
): jest.SpyInstance {
  return jest.spyOn(parser, "parse").mockImplementation(() => mockParseValue);
}

export function failTestIfExecuted(): void {
  expect(true).toBeFalsy();
}

export function newCustomer(hooks?: Hooks, disableParsing = false): Customer {
  return new Customer(
    {
      client_id: MOCK_CLIENT_ID,
      client_secret: MOCK_CLIENT_SECRET,
      developer_token: MOCK_DEVELOPER_TOKEN,
      disable_parsing: disableParsing,
    },
    {
      refresh_token: MOCK_REFRESH_TOKEN,
      customer_id: MOCK_CID,
      login_customer_id: MOCK_LOGIN_CID,
    },
    hooks
  );
}
