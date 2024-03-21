import { google } from "google-gax/build/protos/operations";
import { Hooks } from "./hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { enums, errors, services } from "./protos";
import {
  failTestIfExecuted,
  mockBuildMutateRequestAndService,
  mockBuildSearchRequestAndService,
  mockBuildSearchStreamRequestAndService,
  mockError,
  mockGaqlQuery,
  // mockGenerator,
  mockGetAccessToken,
  mockGetGoogleAdsError,
  mockMethod,
  mockMutationReturnValue,
  mockMutations,
  mockPaginatedSearch,
  mockParse,
  mockParsedValues,
  mockParseRest,
  mockParseValue,
  mockQuery,
  mockQueryReturnValue,
  mockQueryReturnValueUnparsed,
  mockQueryReturnValueWithSummaryRow,
  mockReportOptions,
  mockSearchOnce,
  mockSearchRawResult,
  mockSearchRawResultWithSummaryRow,
  mockStream,
  mockStreamWithBadData,
  mockStreamWithSummaryRow,
  mockSummaryRow,
  mockTotalResultsCount,
  newCustomer,
} from "./testUtils";
import { MutateOptions, RequestOptions } from "./types";
import { googleAdsVersion } from "../src/version";

const axiosMock = new MockAdapter(axios);

describe("querier", () => {
  afterEach(() => {
    jest.resetAllMocks();
    axiosMock.reset();
  });

  it("parses query results by default", async () => {
    const customer = newCustomer({});

    axiosMock.onPost().reply(200, mockStream());

    mockGetAccessToken(customer);

    // @ts-expect-error private method
    const { response } = await customer.querier(mockGaqlQuery);

    expect(response).toEqual(mockQueryReturnValue);
  });

  it("skips query parsing if it is disabled in the client options", async () => {
    const customer = newCustomer({}, true);

    axiosMock.onPost().reply(200, mockStream());

    mockGetAccessToken(customer);

    // @ts-expect-error private method
    const { response } = await customer.querier(mockGaqlQuery);

    expect(response).toEqual(mockQueryReturnValueUnparsed);
  });

  it("includes the total results count if provided", async () => {
    const customer = newCustomer({});

    axiosMock.onPost().reply(200, mockSearchRawResult[0]);

    mockGetAccessToken(customer);
    //@ts-expect-error private method
    const { totalResultsCount } = await customer.querier(mockGaqlQuery, {
      // @ts-expect-error
      return_total_results_count: true,
    });

    expect(totalResultsCount).toEqual(mockTotalResultsCount);
  });

  it("calls onQueryStart when provided", async () => {
    const hooks: Hooks = {
      onQueryStart() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    mockPaginatedSearch(customer);
    mockParse(mockQueryReturnValue);
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    // @ts-expect-error private method
    await customer.querier(mockGaqlQuery);

    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: mockGaqlQuery,
      reportOptions: undefined,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
  });

  it("calls onQueryStart asynchronously", async () => {
    const container = mockMethod();
    const spyMockMethod = jest.spyOn(container, "method");
    const hooks: Hooks = {
      async onQueryStart() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        container.method();
      },
    };
    const customer = newCustomer(hooks);
    mockPaginatedSearch(customer);
    mockParse(mockQueryReturnValue);
    // @ts-expect-error private method
    await customer.querier(mockGaqlQuery);

    expect(spyMockMethod).toHaveBeenCalled();
  });

  it("cancels the query when cancel() is called in onQueryStart", async () => {
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel();
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService({ customer });
    mockParse(mockQueryReturnValue);
    const spyMockSearch = jest.spyOn(mockService, "search");
    jest.spyOn(hooks, "onQueryStart");
    // @ts-expect-error private method
    const { response } = await customer.querier(mockGaqlQuery);

    expect(spyMockSearch).not.toHaveBeenCalled();
    expect(typeof response).toEqual("undefined");
  });

  it("returns the argument of cancel() if one is provided in onQueryStart", async () => {
    const alternativeReturnValue = "return this instead";
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel(alternativeReturnValue);
      },
    };
    const customer = newCustomer(hooks);
    mockPaginatedSearch(customer);
    mockParse(mockQueryReturnValue);
    // @ts-expect-error private method
    const { response } = await customer.querier(mockGaqlQuery);

    expect(response).toEqual(alternativeReturnValue);
  });

  it("edits the requestOptions when editOptions() is called in onQueryStart", async () => {
    const hooks: Hooks = {
      onQueryStart({ editOptions }) {
        editOptions({ validate_only: true, page_size: 4 });
      },
    };
    const customer = newCustomer(hooks);
    const spyPaginatedSearch = mockPaginatedSearch(customer);
    mockParse(mockQueryReturnValue);
    const requestOptions: RequestOptions = {
      validate_only: false,
      page_token: "abcd",
      page_size: 2,
    };
    // @ts-expect-error private method
    await customer.querier(mockGaqlQuery, requestOptions);

    expect(spyPaginatedSearch).toHaveBeenCalledWith(mockGaqlQuery, {
      validate_only: true, // changed
      page_token: "abcd",
      page_size: 4, // changed
    });
  });

  it("calls onQueryError when provided and when the query throws an error", async () => {
    const shouldThrow = true;
    const hooks: Hooks = {
      onQueryError() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService({
      customer,
      shouldThrow,
    });
    mockParse(mockQueryReturnValue);
    const mockedError = mockGetGoogleAdsError(customer);
    const spyMockSearch = jest.spyOn(mockService, "search");
    const spyHook = jest.spyOn(hooks, "onQueryError");

    try {
      // @ts-expect-error private method
      await customer.querier(mockGaqlQuery);
      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(spyMockSearch).toThrow();
      expect(mockedError).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalledWith({
        credentials: expect.any(Object),
        query: mockGaqlQuery,
        reportOptions: undefined,
        error: mockError,
      });
    }
  });

  it("calls onQueryError asynchronously", async () => {
    const shouldThrow = true;
    const container = mockMethod();
    const spyMockMethod = jest.spyOn(container, "method");
    const hooks: Hooks = {
      async onQueryError() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        container.method();
      },
    };
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService({ customer, shouldThrow });
    mockParse(mockQueryReturnValue);
    mockGetGoogleAdsError(customer);

    try {
      // @ts-expect-error private method
      await customer.querier(mockGaqlQuery);
      failTestIfExecuted(); // should not be called
    } catch (err) {
      expect(spyMockMethod).toHaveBeenCalled();
    }
  });

  it("does not call onQueryError when provided but when the query does not throw an error", async () => {
    const hooks: Hooks = {
      onQueryError() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    mockPaginatedSearch(customer);
    mockParse(mockQueryReturnValue);
    mockGetGoogleAdsError(customer);
    const spyHook = jest.spyOn(hooks, "onQueryError");
    // @ts-expect-error private method
    await customer.querier(mockGaqlQuery);

    expect(spyHook).not.toHaveBeenCalled();
  });

  it("calls onQueryEnd when provided", async () => {
    const hooks: Hooks = {
      onQueryEnd() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    mockPaginatedSearch(customer);
    mockParse(mockQueryReturnValue);
    const spyHook = jest.spyOn(hooks, "onQueryEnd");
    // @ts-expect-error private method
    await customer.querier(mockGaqlQuery);

    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: mockGaqlQuery,
      reportOptions: undefined,
      response: mockQueryReturnValue,
      resolve: expect.any(Function),
    });
  });

  it("calls onQueryEnd asynchronously", async () => {
    const container = mockMethod();
    const spyMockMethod = jest.spyOn(container, "method");
    const hooks: Hooks = {
      async onQueryEnd() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        container.method();
      },
    };
    const customer = newCustomer(hooks);
    mockPaginatedSearch(customer);
    mockParse(mockQueryReturnValue);
    // @ts-expect-error private method
    await customer.querier(mockGaqlQuery);

    expect(spyMockMethod).toHaveBeenCalled();
  });

  it("resolves the query with the argument of resolve() in onQueryEnd", async () => {
    const hookReturnValue = "hook return value";
    const hooks: Hooks = {
      onQueryEnd({ resolve }) {
        resolve(hookReturnValue);
      },
    };
    const customer = newCustomer(hooks);
    mockPaginatedSearch(customer);
    mockParse(mockQueryReturnValue);
    // @ts-expect-error private method
    const { response } = await customer.querier<string>(mockGaqlQuery);

    expect(response).toEqual(hookReturnValue);
  });
});

describe("paginatedSearch", () => {
  afterEach(() => {
    jest.resetAllMocks();
    axiosMock.reset();
  });

  it("returns the response of the initial query if there is no next page token", async () => {
    const customer = newCustomer({});
    mockSearchOnce({
      customer,
      response: ["a", "b", "c"],
      nextPageToken: null,
    });

    // @ts-expect-error private method
    const { response } = await customer.paginatedSearch(mockGaqlQuery, {
      return_total_results_count: false,
      page_size: 1000,
    });

    expect(response).toEqual(["a", "b", "c"]);
  });

  it("gets the next response if there is a next page token", async () => {
    const customer = newCustomer({});
    mockSearchOnce({
      customer,
      response: ["a", "b", "c"],
      nextPageToken: "token",
    });
    mockSearchOnce({
      customer,
      response: ["d", "e", "f"],
      nextPageToken: null,
    });

    // @ts-expect-error private method
    const { response } = await customer.paginatedSearch(mockGaqlQuery, {
      return_total_results_count: false,
      page_size: 1000,
    });

    expect(response).toEqual(["a", "b", "c", "d", "e", "f"]);
  });

  it("iterates many times until there is no next page token", async () => {
    const customer = newCustomer({});
    mockSearchOnce({ customer, response: ["a"], nextPageToken: "token" });
    mockSearchOnce({ customer, response: ["b"], nextPageToken: "token" });
    mockSearchOnce({ customer, response: ["c"], nextPageToken: "token" });
    mockSearchOnce({ customer, response: ["d"], nextPageToken: "token" });
    mockSearchOnce({ customer, response: ["e"], nextPageToken: "token" });
    mockSearchOnce({ customer, response: ["f"], nextPageToken: "token" });
    mockSearchOnce({ customer, response: ["g"], nextPageToken: "token" });
    mockSearchOnce({ customer, response: ["h"], nextPageToken: null });

    // @ts-expect-error private method
    const { response } = await customer.paginatedSearch(mockGaqlQuery, {
      return_total_results_count: false,
      page_size: 1000,
    });

    expect(response).toEqual(["a", "b", "c", "d", "e", "f", "g", "h"]);
  });

  it("includes the total results count if provided", async () => {
    const customer = newCustomer({});
    mockSearchOnce({
      customer,
      response: ["a"],
      nextPageToken: null,
      includeTotalResultsCount: true,
    });

    // @ts-expect-error private method
    const { totalResultsCount } = await customer.paginatedSearch(
      mockGaqlQuery,
      {
        return_total_results_count: true,
        page_size: 1000,
      }
    );
    expect(totalResultsCount).toEqual(mockTotalResultsCount);
  });
});

describe("search", () => {
  afterEach(() => {
    jest.resetAllMocks();
    axiosMock.reset();
  });

  it("includes the summary row if a summary row is returned", async () => {
    const customer = newCustomer({});
    mockGetAccessToken(customer);
    axiosMock.onPost().reply(200, mockSearchRawResultWithSummaryRow[1]);

    // @ts-expect-error private method
    const { summaryRow } = await customer.search(mockGaqlQuery);

    expect(summaryRow).toEqual(mockSummaryRow);
  });

  it("includes the total results count if provided", async () => {
    const customer = newCustomer({});
    mockGetAccessToken(customer);
    axiosMock.onPost().reply(200, mockSearchRawResult[0]);

    // @ts-expect-error private method
    const { totalResultsCount } = await customer.search(mockGaqlQuery);
    expect(totalResultsCount).toEqual(mockTotalResultsCount);
  });
});

describe("reportStream", () => {
  afterEach(() => {
    jest.resetAllMocks();
    axiosMock.reset();
  });

  it("parses reportStream results by default", async () => {
    const customer = newCustomer({});

    mockGetAccessToken(customer);
    axiosMock.onPost().reply(200, mockStream());

    const stream = customer.reportStream(mockReportOptions);

    const acc: any[] = [];
    for await (const row of stream) {
      acc.push(row);
    }

    expect(acc).toEqual(mockQueryReturnValue);
  });

  it("skips reportStream parsing if it is disabled in the client options", async () => {
    const disableParsing = true;
    const customer = newCustomer({}, disableParsing);
    mockGetAccessToken(customer);
    axiosMock.onPost().reply(200, mockStream());

    const stream = customer.reportStream(mockReportOptions);

    const acc: any[] = [];
    for await (const row of stream) {
      acc.push(row);
    }

    expect(acc).toEqual(mockQueryReturnValueUnparsed);
  });

  it("includes the summary row if a summary row is returned", async () => {
    const customer = newCustomer({});

    mockGetAccessToken(customer);
    axiosMock.onPost().reply(200, mockStreamWithSummaryRow());

    const stream = customer.reportStream(mockReportOptions);

    const acc: any[] = [];
    for await (const row of stream) {
      acc.push(row);
    }

    expect(acc).toEqual(mockQueryReturnValueWithSummaryRow);
  });

  it("calls onStreamStart when provided", async () => {
    const hooks: Hooks = {
      onStreamStart() {
        return;
      },
    };
    const customer = newCustomer(hooks);

    const spyHook = jest.spyOn(hooks, "onStreamStart");
    mockGetAccessToken(customer);
    axiosMock.onPost().reply(200, mockStream());

    const stream = customer.reportStream(mockReportOptions);

    const acc: any[] = [];
    for await (const row of stream) {
      acc.push(row);
    }

    expect(acc).toEqual(mockQueryReturnValue);

    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: expect.any(String),
      reportOptions: mockReportOptions,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
  });

  it("calls onStreamStart asynchronously", async () => {
    const container = mockMethod();
    const spyMockMethod = jest.spyOn(container, "method");
    const hooks: Hooks = {
      async onStreamStart() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        container.method();
      },
    };
    const customer = newCustomer(hooks);
    mockGetAccessToken(customer);
    axiosMock.onPost().reply(200, mockStream());

    const stream = customer.reportStream(mockReportOptions);

    const acc: any[] = [];
    for await (const row of stream) {
      acc.push(row);
    }

    expect(spyMockMethod).toHaveBeenCalled();
  });

  it("cancels the query when cancel() is called in onStreamStart", async () => {
    const hooks: Hooks = {
      onStreamStart({ cancel }) {
        cancel();
      },
    };

    const customer = newCustomer(hooks);

    const stream = customer.reportStream(mockReportOptions);

    for await (const row of stream) {
      failTestIfExecuted(); // should be no rows in stream
    }

    // This will fail if not cancelled correctly because the unmocked fns will be called
  });

  it("does NOT return the argument of cancel() if one is provided in onStreamStart", async () => {
    const alternativeReturnValue = "return this instead";
    const hooks: Hooks = {
      onStreamStart({ cancel }) {
        // @ts-expect-error should not be passing an alternate value to onStreamStart
        cancel(alternativeReturnValue);
      },
    };
    const customer = newCustomer(hooks);

    const stream = customer.reportStream(mockReportOptions);

    for await (const row of stream) {
      failTestIfExecuted(); // should be no rows in stream
    }
  });

  it("edits the requestOptions when editOptions() is called in onStreamStart", async () => {
    const hooks: Hooks = {
      onStreamStart({ editOptions }) {
        editOptions({ validate_only: true, page_size: 4 });
      },
    };
    const customer = newCustomer(hooks);

    const spyAxiosArgsBuilder = jest.spyOn(
      customer,
      // @ts-expect-error private method
      "prepareGoogleAdsServicePostRequestArgs"
    );

    const requestOptions: RequestOptions = {
      validate_only: false, // changed
      page_token: "abcd",
      page_size: 2, // changed
    };

    mockGetAccessToken(customer);
    axiosMock.onPost().reply(200, mockStream());

    const stream = customer.reportStream({
      ...mockReportOptions,
      ...requestOptions,
    });

    for await (const row of stream) {
      // don't care
    }

    expect(spyAxiosArgsBuilder).toHaveBeenCalledWith(
      "searchStream",
      "mockedAccessTokenHere",
      {
        data: {
          query: expect.any(String),
          validate_only: true,
          page_token: "abcd",
          page_size: 4,
        },
        responseType: "stream",
      }
    );
  });

  it("calls onStreamError when provided and when the stream throws an error", async () => {
    const hooks: Hooks = {
      onStreamError() {
        return;
      },
    };
    const spyHook = jest.spyOn(hooks, "onStreamError");

    const customer = newCustomer(hooks);

    mockGetAccessToken(customer);

    try {
      axiosMock.onPost().networkError();

      const stream = customer.reportStream({
        ...mockReportOptions,
      });

      for await (const row of stream) {
        failTestIfExecuted(); // should not be called
      }

      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(spyHook).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalledWith({
        credentials: expect.any(Object),
        query: expect.any(String),
        reportOptions: mockReportOptions,
        error: expect.any(Error),
      });
    }
  });

  it("calls onStreamError asynchronously", async () => {
    const container = mockMethod();
    const spyMockMethod = jest.spyOn(container, "method");
    const hooks: Hooks = {
      async onStreamError() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        container.method();
      },
    };

    const customer = newCustomer(hooks);

    mockGetAccessToken(customer);

    try {
      axiosMock.onPost().networkError();

      const stream = customer.reportStream({
        ...mockReportOptions,
      });

      for await (const row of stream) {
        failTestIfExecuted(); // should not be called
      }

      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(spyMockMethod).toHaveBeenCalled();
    }
  });

  it("does not call onStreamError when provided but when the query does not throw an error", async () => {
    const hooks: Hooks = {
      onStreamError() {
        return;
      },
    };
    const spyHook = jest.spyOn(hooks, "onStreamError");

    const customer = newCustomer(hooks);

    mockGetAccessToken(customer);

    axiosMock.onPost().reply(200, mockStream());

    const stream = customer.reportStream({
      ...mockReportOptions,
    });

    for await (const row of stream) {
      // don't care
    }

    expect(spyHook).not.toHaveBeenCalled();
  });
});

describe("reportStreamRaw", () => {
  afterEach(() => jest.resetAllMocks());

  it("does not parse any results", async () => {
    const customer = newCustomer({});
    const { mockStreamData, mockStreamEnd } =
      mockBuildSearchStreamRequestAndService(customer);
    const mockedParse = mockParse(mockParsedValues);
    await customer.reportStreamRaw(mockReportOptions);
    mockStreamData(mockQueryReturnValue);
    mockStreamEnd();

    expect(mockedParse).not.toHaveBeenCalled();
  });

  it("calls onStreamStart when provided", async () => {
    const hooks: Hooks = {
      onStreamStart() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    const { mockStreamData, mockStreamEnd } =
      mockBuildSearchStreamRequestAndService(customer);
    const spyHook = jest.spyOn(hooks, "onStreamStart");
    await customer.reportStreamRaw(mockReportOptions);
    mockStreamData(mockQueryReturnValue);
    mockStreamEnd();

    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: expect.any(String),
      reportOptions: mockReportOptions,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
  });

  it("calls onStreamStart asynchronously", async () => {
    const container = mockMethod();
    const spyMockMethod = jest.spyOn(container, "method");
    const hooks: Hooks = {
      async onStreamStart() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        container.method();
      },
    };
    const customer = newCustomer(hooks);
    const { mockStreamData, mockStreamEnd } =
      mockBuildSearchStreamRequestAndService(customer);
    await customer.reportStreamRaw(mockReportOptions);
    mockStreamData(mockQueryReturnValue);
    mockStreamEnd();

    expect(spyMockMethod).toHaveBeenCalled();
  });

  it("cancels the query when cancel() is called in onStreamStart", async () => {
    const hooks: Hooks = {
      onStreamStart({ cancel }) {
        cancel();
      },
    };
    const customer = newCustomer(hooks);
    const { spyBuild } = mockBuildSearchStreamRequestAndService(customer);
    const stream = await customer.reportStreamRaw(mockReportOptions);

    expect(stream).not.toBeDefined();
    expect(spyBuild).not.toHaveBeenCalled();
  });

  it("edits the requestOptions when editOptions() is called in onStreamStart", async () => {
    const hooks: Hooks = {
      onStreamStart({ editOptions }) {
        editOptions({ validate_only: true, page_size: 4 });
      },
    };
    const customer = newCustomer(hooks);
    const { spyBuild, mockStreamData, mockStreamEnd } =
      mockBuildSearchStreamRequestAndService(customer);
    const requestOptions: RequestOptions = {
      validate_only: false, // changed
      page_token: "abcd",
      page_size: 2, // changed
    };
    await customer.reportStreamRaw({
      ...mockReportOptions,
      ...requestOptions,
    });
    mockStreamData(mockQueryReturnValue);
    mockStreamEnd();

    expect(spyBuild).toHaveBeenCalledWith(mockGaqlQuery, {
      validate_only: true,
      page_token: "abcd",
      page_size: 4,
    });
  });
});

describe("querier callers", () => {
  it("query calls querier and returns the response", async () => {
    const customer = newCustomer();
    const mockedQuery = mockQuery(customer);
    const res = await customer.query(mockGaqlQuery);

    expect(mockedQuery).toHaveBeenCalled();
    expect(mockedQuery).toHaveBeenCalledWith(mockGaqlQuery, expect.any(Object));
    expect(res).toEqual(mockQueryReturnValue);
  });

  it("report calls querier and returns the response", async () => {
    const customer = newCustomer();
    const mockedQuery = mockQuery(customer);
    const res = await customer.report(mockReportOptions);

    expect(mockedQuery).toHaveBeenCalled();
    expect(mockedQuery).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Object),
      mockReportOptions
    );
    expect(res).toEqual(mockQueryReturnValue);
  });

  it("reportCount calls querier and returns the total results count", async () => {
    const customer = newCustomer();
    const mockedQuery = mockQuery(customer);
    const res = await customer.reportCount(mockReportOptions);

    expect(mockedQuery).toHaveBeenCalled();
    expect(mockedQuery).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Object),
      mockReportOptions,
      false // use hooks should be false for reportCount
    );
    expect(res).toEqual(mockTotalResultsCount);
  });
});

describe("mutateResources", () => {
  afterEach(() => jest.resetAllMocks());

  it("calls onMutationStart when provided", async () => {
    const hooks: Hooks = {
      onMutationStart() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    mockBuildMutateRequestAndService({ customer });
    const spyHook = jest.spyOn(hooks, "onMutationStart");
    await customer.mutateResources(mockMutations);

    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      method: "GoogleAdsService.mutate",
      isServiceCall: false,
      mutations: mockMutations,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
  });

  it("calls onMutationStart asynchronously", async () => {
    const container = mockMethod();
    const spyMockMethod = jest.spyOn(container, "method");
    const hooks: Hooks = {
      async onMutationStart() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        container.method();
      },
    };
    const customer = newCustomer(hooks);
    mockBuildMutateRequestAndService({ customer });
    await customer.mutateResources(mockMutations);

    expect(spyMockMethod).toHaveBeenCalled();
  });

  it("cancels the query when cancel() is called in onMutationStart", async () => {
    const hooks: Hooks = {
      onMutationStart({ cancel }) {
        cancel();
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildMutateRequestAndService({ customer });
    const spyMockMutate = jest.spyOn(mockService, "mutate");
    const res = await customer.mutateResources(mockMutations);

    expect(spyMockMutate).not.toHaveBeenCalled();
    expect(typeof res).toEqual("undefined");
  });

  it("returns the argument of cancel() if one is provided in onMutationStart", async () => {
    const alternativeReturnValue = "return this instead";
    const hooks: Hooks = {
      onMutationStart({ cancel }) {
        cancel(alternativeReturnValue);
      },
    };
    const customer = newCustomer(hooks);
    mockBuildMutateRequestAndService({ customer });
    const res = await customer.mutateResources(mockMutations);

    expect(res).toEqual(alternativeReturnValue);
  });

  it("edits the mutationOptions when editOptions() is called in onQueryStart", async () => {
    const hooks: Hooks = {
      onMutationStart({ editOptions }) {
        editOptions({
          validate_only: true,
          response_content_type: enums.ResponseContentType.MUTABLE_RESOURCE,
        });
      },
    };
    const customer = newCustomer(hooks);
    const { spyBuild } = mockBuildMutateRequestAndService({ customer });
    const mutateOptions: MutateOptions = {
      validate_only: false,
      partial_failure: true,
      response_content_type: enums.ResponseContentType.RESOURCE_NAME_ONLY,
    };
    await customer.mutateResources(mockMutations, mutateOptions);

    expect(spyBuild).toHaveBeenCalledWith(mockMutations, {
      validate_only: true, // changed
      partial_failure: true,
      response_content_type: enums.ResponseContentType.MUTABLE_RESOURCE, // changed
    });
  });

  it("calls onMutationError when provided and when the query throws an error", async () => {
    const shouldThrow = true;
    const hooks: Hooks = {
      onMutationError() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildMutateRequestAndService({
      customer,
      shouldThrow,
    });
    const mockedError = mockGetGoogleAdsError(customer);
    const spyMockMutate = jest.spyOn(mockService, "mutate");
    const spyHook = jest.spyOn(hooks, "onMutationError");

    try {
      await customer.mutateResources(mockMutations);
      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(spyMockMutate).toThrow();
      expect(mockedError).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalledWith({
        credentials: expect.any(Object),
        method: "GoogleAdsService.mutate",
        isServiceCall: false,
        mutations: mockMutations,
        error: mockError,
      });
    }
  });

  it("calls onMutationError asynchronously", async () => {
    const shouldThrow = true;
    const container = mockMethod();
    const spyMockMethod = jest.spyOn(container, "method");
    const hooks: Hooks = {
      async onMutationError() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        container.method();
      },
    };
    const customer = newCustomer(hooks);
    mockBuildMutateRequestAndService({ customer, shouldThrow });
    mockGetGoogleAdsError(customer);

    try {
      await customer.mutateResources(mockMutations);
      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(spyMockMethod).toHaveBeenCalled();
    }
  });

  it("does not call onMutationError when provided but when the query does not throw an error", async () => {
    const shouldThrow = false;
    const hooks: Hooks = {
      onMutationError() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildMutateRequestAndService({
      customer,
      shouldThrow,
    });
    mockGetGoogleAdsError(customer);
    const spyMockMutate = jest.spyOn(mockService, "mutate");
    const spyHook = jest.spyOn(hooks, "onMutationError");
    await customer.mutateResources(mockMutations);

    expect(spyMockMutate).not.toThrow();
    expect(spyHook).not.toHaveBeenCalled();
  });

  it("calls onMutationEnd when provided", async () => {
    const hooks: Hooks = {
      onMutationEnd() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    mockBuildMutateRequestAndService({ customer });
    const spyHook = jest.spyOn(hooks, "onMutationEnd");
    await customer.mutateResources(mockMutations);

    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      method: "GoogleAdsService.mutate",
      isServiceCall: false,
      mutations: mockMutations,
      response: mockMutationReturnValue,
      resolve: expect.any(Function),
    });
  });

  it("calls onMutationEnd asynchronously", async () => {
    const container = mockMethod();
    const spyMockMethod = jest.spyOn(container, "method");
    const hooks: Hooks = {
      async onMutationEnd() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        container.method();
      },
    };
    const customer = newCustomer(hooks);
    mockBuildMutateRequestAndService({ customer });
    await customer.mutateResources(mockMutations);

    expect(spyMockMethod).toHaveBeenCalled();
  });

  it("resolves the query with the argument of resolve() in onMutationEnd", async () => {
    const hookReturnValue = "hook return value";
    const hooks: Hooks = {
      onMutationEnd({ resolve }) {
        resolve(hookReturnValue);
      },
    };
    const customer = newCustomer(hooks);
    mockBuildMutateRequestAndService({ customer });
    const res = await customer.mutateResources(mockMutations);

    expect(res).toEqual(hookReturnValue);
  });

  it("should decode partial failure errors if present on the response", async () => {
    // Prepare an error buffer
    const failureMessage = new errors.GoogleAdsFailure({
      errors: [
        {
          error_code: new errors.ErrorCode({
            request_error: errors.RequestErrorEnum.RequestError.BAD_RESOURCE_ID,
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

    // Mock request and response for mutate call
    const customer = newCustomer();

    mockBuildMutateRequestAndService({
      customer,
      request: new services.MutateGoogleAdsRequest({
        partial_failure: true,
      }),
      response: new services.MutateGoogleAdsResponse({
        partial_failure_error: new google.rpc.Status({
          details: [
            {
              type_url: `google.ads.googleads.${googleAdsVersion}.errors.GoogleAdsFailure`,
              value: failureBuffer,
            },
          ],
        }),
      }),
    });

    const response = await customer.mutateResources(mockMutations, {
      partial_failure: true,
    });

    expect(
      response.partial_failure_error instanceof errors.GoogleAdsFailure
    ).toEqual(true);
    expect(response.partial_failure_error).toEqual(failureMessage);
  });
});
