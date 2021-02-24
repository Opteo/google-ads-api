import { Hooks } from "./hooks";
import { enums } from "./protos";
import {
  failTestIfExecuted,
  mockPaginatedSearch,
  mockSearchOnce,
  mockBuildMutateRequestAndService,
  mockBuildSearchRequestAndService,
  mockError,
  mockGetGoogleAdsError,
  mockMethod,
  mockMutationReturnValue,
  mockParse,
  mockParseValue,
  mockParseValues,
  mockQuery,
  mockQueryReturnValue,
  newCustomer,
} from "./testUtils";
import {
  MutateOperation,
  MutateOptions,
  ReportOptions,
  RequestOptions,
} from "./types";

const gaqlQuery = `SELECT campaign.resource_name FROM campaign LIMIT 1`;
const reportOptions: ReportOptions = {
  entity: "campaign",
  attributes: ["campaign.resource_name"],
  limit: 1,
};
const mutations: MutateOperation<any>[] = [
  { resource: "abc", entity: "campaign", operation: "create" },
];

describe("query", () => {
  afterEach(() => jest.resetAllMocks());

  it("parses query results by default", async () => {
    const customer = newCustomer({});
    mockPaginatedSearch(customer);
    const mockedParse = mockParse(mockParseValues);
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).toHaveBeenCalled();
    expect(res).toEqual(mockParseValues);
  });

  it("skips query parsing if it is disabled in the client options", async () => {
    const disableParsing = true;
    const customer = newCustomer({}, disableParsing);
    mockPaginatedSearch(customer);
    const mockedParse = mockParse(mockParseValues);
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).not.toHaveBeenCalled();
    expect(res).toEqual(mockQueryReturnValue);
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
    await customer.query(gaqlQuery);

    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: gaqlQuery,
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
    await customer.query(gaqlQuery);

    expect(spyMockMethod).toHaveBeenCalled();
  });

  it("cancels the query when cancel() is called in onQueryStart", async () => {
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel();
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    mockParse(mockQueryReturnValue);
    const spyMockSearch = jest.spyOn(mockService, "search");
    jest.spyOn(hooks, "onQueryStart");
    const res = await customer.query(gaqlQuery);

    expect(spyMockSearch).not.toHaveBeenCalled();
    expect(typeof res).toEqual("undefined");
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
    const res = await customer.query(gaqlQuery);

    expect(res).toEqual(alternativeReturnValue);
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
    await customer.query(gaqlQuery, requestOptions);

    expect(spyPaginatedSearch).toHaveBeenCalledWith(gaqlQuery, {
      validate_only: true, // changed
      page_token: "abcd",
      page_size: 4, // changed
    });
  });

  it("calls onQueryError when provided and when the query throws an error", async (done) => {
    const shouldThrow = true;
    const hooks: Hooks = {
      onQueryError() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(
      customer,
      shouldThrow
    );
    mockParse(mockQueryReturnValue);
    const mockedError = mockGetGoogleAdsError(customer);
    const spyMockSearch = jest.spyOn(mockService, "search");
    const spyHook = jest.spyOn(hooks, "onQueryError");

    try {
      await customer.query(gaqlQuery);
      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(spyMockSearch).toThrow();
      expect(mockedError).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalledWith({
        credentials: expect.any(Object),
        query: gaqlQuery,
        reportOptions: undefined,
        error: mockError,
      });
      done();
    }
  });

  it("calls onQueryError asynchronously", async (done) => {
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
    mockBuildSearchRequestAndService(customer, shouldThrow);
    mockParse(mockQueryReturnValue);
    mockGetGoogleAdsError(customer);

    try {
      await customer.query(gaqlQuery);
      failTestIfExecuted(); // should not be called
    } catch (err) {
      expect(spyMockMethod).toHaveBeenCalled();
      done();
    }
  });

  it("does not call onQueryError when provided but when the query does not throw an error", async () => {
    const hooks: Hooks = {
      onQueryError() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    const spyPaginatedSearch = mockPaginatedSearch(customer);
    mockParse(mockQueryReturnValue);
    mockGetGoogleAdsError(customer);
    const spyHook = jest.spyOn(hooks, "onQueryError");
    await customer.query(gaqlQuery);

    expect(spyPaginatedSearch).not.toThrow();
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
    await customer.query(gaqlQuery);

    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: gaqlQuery,
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
    await customer.query(gaqlQuery);

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
    const res = await customer.query<string>(gaqlQuery);

    expect(res).toEqual(hookReturnValue);
  });
});

describe("paginatedSearch", () => {
  it("returns the response of the initial query if there is no next page token", async () => {
    const customer = newCustomer({});
    mockSearchOnce(customer, {
      response: ["a", "b", "c"],
      nextPageToken: null,
    });

    // @ts-expect-error private method
    const res = await customer.paginatedSearch(gaqlQuery, {});

    expect(res).toEqual(["a", "b", "c"]);
  });

  it("gets the next response if there is a next page token", async () => {
    const customer = newCustomer({});
    mockSearchOnce(customer, {
      response: ["a", "b", "c"],
      nextPageToken: "token",
    });
    mockSearchOnce(customer, {
      response: ["d", "e", "f"],
      nextPageToken: null,
    });

    // @ts-expect-error private method
    const res = await customer.paginatedSearch(gaqlQuery, {});

    expect(res).toEqual(["a", "b", "c", "d", "e", "f"]);
  });

  it("iterates many times until there is no next page token", async () => {
    const customer = newCustomer({});
    mockSearchOnce(customer, { response: ["a"], nextPageToken: "token" });
    mockSearchOnce(customer, { response: ["b"], nextPageToken: "token" });
    mockSearchOnce(customer, { response: ["c"], nextPageToken: "token" });
    mockSearchOnce(customer, { response: ["d"], nextPageToken: "token" });
    mockSearchOnce(customer, { response: ["e"], nextPageToken: "token" });
    mockSearchOnce(customer, { response: ["f"], nextPageToken: "token" });
    mockSearchOnce(customer, { response: ["g"], nextPageToken: "token" });
    mockSearchOnce(customer, { response: ["h"], nextPageToken: null });

    // @ts-expect-error private method
    const res = await customer.paginatedSearch(gaqlQuery, {});

    expect(res).toEqual(["a", "b", "c", "d", "e", "f", "g", "h"]);
  });
});

describe("reportStream", () => {
  afterEach(() => jest.resetAllMocks());

  it("parses reportStream results by default", async () => {
    const customer = newCustomer({});
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
    }

    expect(mockedParse).toHaveBeenCalled();
  });

  it("skips reportStream parsing if it is disabled in the client options", async () => {
    const disableParsing = true;
    const customer = newCustomer({}, disableParsing);
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockQueryReturnValue[iterations]);
      iterations += 1;
    }

    expect(mockedParse).not.toHaveBeenCalled();
  });

  it("calls onQueryStart when provided", async () => {
    const hooks: Hooks = {
      onQueryStart() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    mockParse([mockParseValue]);
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const stream = customer.reportStream(reportOptions);
    await stream.next();

    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: expect.any(String),
      reportOptions,
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
    mockBuildSearchRequestAndService(customer);
    mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);
    await stream.next();

    expect(spyMockMethod).toHaveBeenCalled();
  });

  it("cancels the query when cancel() is called in onQueryStart", async () => {
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel();
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    mockParse([mockParseValue]);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(typeof row).toEqual("undefined");
      iterations += 1;
    }

    expect(iterations).toEqual(1);
    expect(spyMockSearchAsync).not.toHaveBeenCalled();
  });

  it("returns the argument of cancel() if one is provided in onQueryStart", async () => {
    const alternativeReturnValue = "return this instead";
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel(alternativeReturnValue);
      },
    };
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(alternativeReturnValue);
      iterations += 1;
    }

    expect(iterations).toEqual(1);
  });

  it("iterates over the argument of cancel() if it is an array in onQueryStart", async () => {
    const alternativeReturnValue = ["return", "these", "values", "instead"];
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel(alternativeReturnValue);
      },
    };
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(alternativeReturnValue[iterations]);
      iterations += 1;
    }

    expect(iterations).toEqual(alternativeReturnValue.length);
  });

  it("edits the requestOptions when editOptions() is called in onQueryStart", async () => {
    const hooks: Hooks = {
      onQueryStart({ editOptions }) {
        editOptions({ validate_only: true, page_size: 4 });
      },
    };
    const customer = newCustomer(hooks);
    const { spyBuild } = mockBuildSearchRequestAndService(customer);
    mockParse([mockParseValue]);
    const requestOptions: RequestOptions = {
      validate_only: false, // changed
      page_token: "abcd",
      page_size: 2, // changed
    };
    const stream = customer.reportStream({
      ...reportOptions,
      ...requestOptions,
    });
    await stream.next();

    expect(spyBuild).toHaveBeenCalledWith(gaqlQuery, {
      validate_only: true,
      page_token: "abcd",
      page_size: 4,
    });
  });

  it("calls onQueryError when provided and when the query throws an error", async (done) => {
    const shouldThrow = true;
    const hooks: Hooks = {
      onQueryError() {
        return;
      },
    };

    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(
      customer,
      shouldThrow
    );
    mockParse([mockParseValue]);
    const mockedError = mockGetGoogleAdsError(customer);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const spyHook = jest.spyOn(hooks, "onQueryError");

    try {
      const stream = customer.reportStream(reportOptions);
      await stream.next();
      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(spyMockSearchAsync).toThrow();
      expect(mockedError).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalledWith({
        credentials: expect.any(Object),
        query: expect.any(String),
        reportOptions: reportOptions,
        error: mockError,
      });
      done();
    }
  });

  it("calls onQueryError asynchronously", async (done) => {
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
    mockBuildSearchRequestAndService(customer, shouldThrow);
    mockParse([mockParseValue]);
    mockGetGoogleAdsError(customer);

    try {
      const stream = customer.reportStream(reportOptions);
      await stream.next();
      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(spyMockMethod).toHaveBeenCalled();
      done();
    }
  });

  it("does not call onQueryError when provided but when the query does not throw an error", async () => {
    const shouldThrow = false;

    const hooks: Hooks = {
      onQueryError() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(
      customer,
      shouldThrow
    );
    mockParse([mockParseValue]);
    mockGetGoogleAdsError(customer);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const spyHook = jest.spyOn(hooks, "onQueryError");
    const stream = customer.reportStream(reportOptions);
    await stream.next();

    expect(spyMockSearchAsync).not.toThrow();
    expect(spyHook).not.toHaveBeenCalled();
  });

  it("calls onQueryEnd when provided", async () => {
    const hooks: Hooks = {
      onQueryEnd() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    mockParse([mockParseValue]);
    const spyHook = jest.spyOn(hooks, "onQueryEnd");
    const stream = customer.reportStream(reportOptions);

    const response = [];
    for await (const row of stream) {
      response.push(row);
    }

    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: gaqlQuery,
      reportOptions,
      response,
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
    mockBuildSearchRequestAndService(customer);
    mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    for await (const row of stream) {
      continue;
    }

    expect(spyMockMethod).toHaveBeenCalled();
  });

  it("does NOT return the value of resolve() in onQueryEnd", async () => {
    const hookReturnValues = ["various", "hook", "return", "values"];
    const hooks: Hooks = {
      onQueryEnd({ resolve }) {
        resolve(hookReturnValues);
      },
    };
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
    }
  });
});

describe("report", () => {
  it("calls query", async () => {
    const customer = newCustomer();
    const mockedQuery = mockQuery(customer);
    await customer.report(reportOptions);

    expect(mockedQuery).toHaveBeenCalled();
    expect(mockedQuery).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Object),
      reportOptions
    );
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
    mockBuildMutateRequestAndService(customer);
    const spyHook = jest.spyOn(hooks, "onMutationStart");
    await customer.mutateResources(mutations);

    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      mutations,
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
    mockBuildMutateRequestAndService(customer);
    await customer.mutateResources(mutations);

    expect(spyMockMethod).toHaveBeenCalled();
  });

  it("cancels the query when cancel() is called in onMutationStart", async () => {
    const hooks: Hooks = {
      onMutationStart({ cancel }) {
        cancel();
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildMutateRequestAndService(customer);
    const spyMockMutate = jest.spyOn(mockService, "mutate");
    const res = await customer.mutateResources(mutations);

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
    mockBuildMutateRequestAndService(customer);
    const res = await customer.mutateResources(mutations);

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
    const { spyBuild } = mockBuildMutateRequestAndService(customer);
    const mutateOptions: MutateOptions = {
      validate_only: false,
      partial_failure: true,
      response_content_type: enums.ResponseContentType.RESOURCE_NAME_ONLY,
    };
    await customer.mutateResources(mutations, mutateOptions);

    expect(spyBuild).toHaveBeenCalledWith(mutations, {
      validate_only: true, // changed
      partial_failure: true,
      response_content_type: enums.ResponseContentType.MUTABLE_RESOURCE, // changed
    });
  });

  it("calls onMutationError when provided and when the query throws an error", async (done) => {
    const shouldThrow = true;
    const hooks: Hooks = {
      onMutationError() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildMutateRequestAndService(
      customer,
      shouldThrow
    );
    const mockedError = mockGetGoogleAdsError(customer);
    const spyMockMutate = jest.spyOn(mockService, "mutate");
    const spyHook = jest.spyOn(hooks, "onMutationError");

    try {
      await customer.mutateResources(mutations);
      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(spyMockMutate).toThrow();
      expect(mockedError).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalledWith({
        credentials: expect.any(Object),
        mutations,
        error: mockError,
      });
      done();
    }
  });

  it("calls onMutationError asynchronously", async (done) => {
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
    mockBuildMutateRequestAndService(customer, shouldThrow);
    mockGetGoogleAdsError(customer);

    try {
      await customer.mutateResources(mutations);
      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(spyMockMethod).toHaveBeenCalled();
      done();
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
    const { mockService } = mockBuildMutateRequestAndService(
      customer,
      shouldThrow
    );
    mockGetGoogleAdsError(customer);
    const spyMockMutate = jest.spyOn(mockService, "mutate");
    const spyHook = jest.spyOn(hooks, "onMutationError");
    await customer.mutateResources(mutations);

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
    mockBuildMutateRequestAndService(customer);
    const spyHook = jest.spyOn(hooks, "onMutationEnd");
    await customer.mutateResources(mutations);

    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      mutations,
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
    mockBuildMutateRequestAndService(customer);
    await customer.mutateResources(mutations);

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
    mockBuildMutateRequestAndService(customer);
    const res = await customer.mutateResources(mutations);

    expect(res).toEqual(hookReturnValue);
  });
});
