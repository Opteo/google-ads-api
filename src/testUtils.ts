import { Customer } from "./customer";
import { Hooks } from "./hooks";
import * as parser from "./parser";
import { PageToken } from "./types";
import { GoogleAdsServiceClient, services, errors } from "./protos";

import { PassThrough } from "stream";

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

export const mockMutationReturnValue: services.MutateGoogleAdsResponse = {
  mutate_operation_responses: [],
  toJSON: () => {
    return {};
  },
};

export const mockError = {
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

export const mockErrorMessage = "mock error message";

export const mockParseValues = [
  "mock",
  "parsed",
  "values",
] as services.IGoogleAdsRow[];

export const mockParseValue = "mock parse value" as services.IGoogleAdsRow;

export function mockPaginatedSearch(customer: Customer): jest.SpyInstance {
  return (
    jest
      // @ts-expect-error private method
      .spyOn(customer, "paginatedSearch")
      // @ts-expect-error
      .mockImplementation(() => mockQueryReturnValue)
  );
}

export function mockSearchOnce(
  customer: Customer,
  response: {
    response: any[];
    nextPageToken: PageToken;
  }
): jest.SpyInstance {
  return (
    jest
      // @ts-expect-error private method
      .spyOn(customer, "search")
      // @ts-expect-error
      .mockImplementationOnce(() => response)
  );
}

export function mockBuildSearchStreamRequestAndService(
  customer: Customer
): {
  spyBuild: jest.SpyInstance;
  mockStreamData: (data: services.IGoogleAdsRow[]) => void;
  mockStreamError: (error: Error) => void;
  mockStreamEnd: () => void;
} {
  const mockedStream = new PassThrough();

  const mockStreamData = (results: services.IGoogleAdsRow[]) => {
    mockedStream.emit("data", {
      results,
    } as services.SearchGoogleAdsStreamResponse);
  };

  const mockStreamError = (error: Error) => {
    mockedStream.emit("error", error);
  };

  const mockStreamEnd = () => {
    mockedStream.emit("end");
  };

  const spyBuild = jest
    // @ts-expect-error protected method
    .spyOn(customer, "buildSearchStreamRequestAndService")
    // @ts-expect-error
    .mockImplementation(() => {
      return {
        service: { searchStream: () => mockedStream },
        request: {} as services.SearchGoogleAdsStreamRequest,
      };
    });

  return {
    spyBuild,
    mockStreamData,
    mockStreamError,
    mockStreamEnd,
  };
}

export function mockBuildSearchRequestAndService(
  customer: Customer,
  shouldThrow = false
): { mockService: GoogleAdsServiceClient; spyBuild: jest.SpyInstance } {
  const mockService = ({
    search: () => {
      if (shouldThrow) {
        throw new Error(mockErrorMessage);
      }
      return [mockQueryReturnValue];
    },
    searchAsync: () => {
      if (shouldThrow) {
        throw new Error(mockErrorMessage);
      }
      return mockQueryReturnValue;
    },
  } as unknown) as GoogleAdsServiceClient;

  const spyBuild = jest
    // @ts-expect-error protected method
    .spyOn(customer, "buildSearchRequestAndService")
    // @ts-expect-error
    .mockImplementation(() => {
      return {
        service: mockService,
        request: {} as services.SearchGoogleAdsRequest,
      };
    });

  return { mockService, spyBuild };
}

export function mockBuildMutateRequestAndService(
  customer: Customer,
  shouldThrow = false
): { mockService: services.GoogleAdsService; spyBuild: jest.SpyInstance } {
  const mockService = ({
    mutate() {
      if (shouldThrow) {
        throw new Error(mockErrorMessage);
      }
      return mockMutationReturnValue;
    },
  } as unknown) as services.GoogleAdsService;

  const spyBuild = jest
    // @ts-expect-error protected method
    .spyOn(customer, "buildMutationRequestAndService")
    // @ts-expect-error
    .mockImplementation(() => {
      return {
        service: mockService,
        request: {} as services.MutateGoogleAdsRequest,
      };
    });

  return { mockService, spyBuild };
}

export function mockGetGoogleAdsError(customer: Customer): jest.SpyInstance {
  return (
    jest
      // @ts-expect-error protected method
      .spyOn(customer, "getGoogleAdsError")
      // @ts-expect-error
      .mockImplementation(() => mockError)
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

export function mockMethod(): {
  method(): void;
} {
  return {
    method() {
      return;
    },
  };
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
