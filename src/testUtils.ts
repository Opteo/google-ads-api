import { Readable } from "stream";
import { Customer } from "./customer";
import { Hooks } from "./hooks";
import * as parser from "./parser";
import { errors, GoogleAdsServiceClient, services } from "./protos";
import { PageToken, ReportOptions, MutateOperation } from "./types";

export const MOCK_CLIENT_ID = "MOCK CLIENT ID";
export const MOCK_CLIENT_SECRET = "MOCK CLIENT SECRET";
export const MOCK_DEVELOPER_TOKEN = "MOCK DEVELOPER TOKEN";
export const MOCK_REFRESH_TOKEN = "MOCK REFRESH TOKEN";
export const MOCK_CID = "MOCK CID";
export const MOCK_LOGIN_CID = "MOCK LOGIN CID";

export const mockGaqlQuery = `SELECT campaign.resource_name FROM campaign LIMIT 1`;

export const mockReportOptions: ReportOptions = {
  entity: "campaign",
  attributes: ["campaign.resource_name"],
  limit: 1,
};

export const mockMutations: MutateOperation<any>[] = [
  { resource: "abc", entity: "campaign", operation: "create" },
];

export const mockQueryReturnValue: services.IGoogleAdsRow[] = [
  { campaign: { resource_name: "customers/1/campaigns/11" } },
  { campaign: { resource_name: "customers/2/campaigns/22" } },
  { campaign: { resource_name: "customers/3/campaigns/33" } },
];

export const mockSummaryRow: services.IGoogleAdsRow = {
  metrics: { clicks: 90, impressions: 153 },
};

export const mockTotalResultsCount = 23;

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
export const mockParseValue = "mock parse value" as services.IGoogleAdsRow;
export const mockParsedValues = [
  mockParseValue,
  mockParseValue,
  mockParseValue,
];

export function mockPaginatedSearch(
  customer: Customer,
  includeTotalResultsCount = false
): jest.SpyInstance {
  return (
    jest
      // @ts-expect-error private method
      .spyOn(customer, "paginatedSearch")
      // @ts-expect-error
      .mockImplementation((gaqlQuery, requestOptions, _parser) => {
        const totalResultsCount = includeTotalResultsCount
          ? mockTotalResultsCount
          : undefined;
        return {
          response: _parser(mockQueryReturnValue),
          totalResultsCount,
        };
      })
  );
}

export function mockSearchOnce({
  customer,
  response,
  nextPageToken,
  includeTotalResultsCount,
}: {
  customer: Customer;
  response: any[];
  nextPageToken: PageToken;
  includeTotalResultsCount?: boolean;
}): jest.SpyInstance {
  return (
    jest
      // @ts-expect-error private method
      .spyOn(customer, "search")
      // @ts-expect-error
      .mockImplementationOnce(() => {
        return {
          response,
          nextPageToken,
          totalResultsCount: includeTotalResultsCount
            ? mockTotalResultsCount
            : undefined,
        };
      })
  );
}

export function mockBuildSearchStreamRequestAndService(
  customer: Customer
): {
  spyBuild: jest.SpyInstance;
  mockStreamData: (data: services.IGoogleAdsRow[]) => void;
  mockStreamSummaryRow: () => void;
  mockStreamError: (error: Error) => void;
  mockStreamEnd: () => void;
} {
  const mockStream = new Readable({ objectMode: true });

  const mockStreamData = (results: services.IGoogleAdsRow[]) => {
    const chunk = { results } as services.SearchGoogleAdsStreamResponse;
    mockStream.push(chunk);
  };

  const mockStreamSummaryRow = () => {
    const chunk = {
      summary_row: mockSummaryRow,
    } as services.SearchGoogleAdsStreamResponse;
    mockStream.push(chunk);
  };

  const mockStreamError = (error: Error) => {
    mockStream.destroy(error);
  };

  const mockStreamEnd = () => {
    mockStream.push(null);
  };

  const spyBuild = jest
    // @ts-expect-error protected method
    .spyOn(customer, "buildSearchStreamRequestAndService")
    // @ts-expect-error
    .mockImplementation(() => {
      return {
        service: {
          searchStream: () => mockStream,
        } as GoogleAdsServiceClient,
        request: {} as services.SearchGoogleAdsStreamRequest,
      };
    });

  return {
    spyBuild,
    mockStreamData,
    mockStreamSummaryRow,
    mockStreamError,
    mockStreamEnd,
  };
}

export function mockBuildSearchRequestAndService({
  customer,
  shouldThrow = false,
  includeSummaryRow = false,
  includeTotalResultsCount = false,
}: {
  customer: Customer;
  shouldThrow?: boolean;
  includeSummaryRow?: boolean;
  includeTotalResultsCount?: boolean;
}): { mockService: GoogleAdsServiceClient; spyBuild: jest.SpyInstance } {
  const mockService = ({
    search: (): [
      services.IGoogleAdsRow[],
      null,
      services.ISearchGoogleAdsResponse
    ] => {
      if (shouldThrow) {
        throw new Error(mockErrorMessage);
      }

      const searchGoogleAdsResponse: services.ISearchGoogleAdsResponse = {
        summary_row: includeSummaryRow ? mockSummaryRow : undefined,
        total_results_count: includeTotalResultsCount
          ? mockTotalResultsCount
          : undefined,
      };

      return [mockQueryReturnValue, null, searchGoogleAdsResponse];
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

export function mockBuildMutateRequestAndService({
  customer,
  shouldThrow = false,
  request,
  response,
}: {
  customer: Customer;
  shouldThrow?: boolean;
  request?: services.MutateGoogleAdsRequest;
  response?: services.MutateGoogleAdsResponse;
}): { mockService: services.GoogleAdsService; spyBuild: jest.SpyInstance } {
  const mockService = ({
    mutate() {
      if (shouldThrow) {
        throw new Error(mockErrorMessage);
      }
      return response ?? mockMutationReturnValue;
    },
  } as unknown) as services.GoogleAdsService;

  const spyBuild = jest
    // @ts-expect-error protected method
    .spyOn(customer, "buildMutationRequestAndService")
    // @ts-expect-error
    .mockImplementation(() => {
      return {
        service: mockService,
        request: request ?? ({} as services.MutateGoogleAdsRequest),
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
      // @ts-expect-error private method
      .spyOn(customer, "querier")
      // @ts-expect-error
      .mockImplementation(() => {
        return {
          response: mockQueryReturnValue,
          totalResultsCount: mockTotalResultsCount,
        };
      })
  );
}

export function mockParse(
  mockParsedValues: services.IGoogleAdsRow[]
): jest.SpyInstance {
  return jest.spyOn(parser, "parse").mockImplementation(() => mockParsedValues);
}

export function noopParser(
  rows: services.IGoogleAdsRow[]
): services.IGoogleAdsRow[] {
  return rows;
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
