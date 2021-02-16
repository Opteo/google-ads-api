import { Hooks } from "./hooks";
import { enums } from "./protos";
import {
  failTestIfExecuted,
  mockBuildMutateRequestAndService,
  mockBuildSearchRequestAndService,
  mockError,
  mockGetGoogleAdsError,
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
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockParseValues);
    const spyMockSearch = jest.spyOn(mockService, "search");
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).toHaveBeenCalled();
    expect(spyMockSearch).toHaveBeenCalled();
    expect(res).toEqual(mockParseValues);
  });

  it("skips query parsing if it is disabled in the client options", async () => {
    const disableParsing = true;
    const customer = newCustomer({}, disableParsing);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockParseValues);
    const spyMockSearch = jest.spyOn(mockService, "search");
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).not.toHaveBeenCalled();
    expect(spyMockSearch).toHaveBeenCalled();
    expect(res).toEqual(mockQueryReturnValue);
  });

  it("calls onQueryStart when provided", async () => {
    const hooks: Hooks = {
      onQueryStart() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockQueryReturnValue);
    const spyMockSearch = jest.spyOn(mockService, "search");
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).toHaveBeenCalled();
    expect(spyMockSearch).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: gaqlQuery,
      reportOptions: undefined,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
    expect(res).toEqual(mockQueryReturnValue);
  });

  it("cancels the query when cancel() is called in onQueryStart", async () => {
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel();
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockQueryReturnValue);
    const spyMockSearch = jest.spyOn(mockService, "search");
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).not.toHaveBeenCalled();
    expect(spyMockSearch).not.toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: gaqlQuery,
      reportOptions: undefined,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
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
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockQueryReturnValue);
    const spyMockSearch = jest.spyOn(mockService, "search");
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).not.toHaveBeenCalled();
    expect(spyMockSearch).not.toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: gaqlQuery,
      reportOptions: undefined,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
    expect(res).toEqual(alternativeReturnValue);
  });

  it("edits the requestOptions when editOptions() is called in onQueryStart", async () => {
    const hooks: Hooks = {
      onQueryStart({ editOptions }) {
        editOptions({ validate_only: true, page_size: 4 });
      },
    };
    const customer = newCustomer(hooks);
    const { mockService, spyBuild } = mockBuildSearchRequestAndService(
      customer
    );
    const mockedParse = mockParse(mockQueryReturnValue);
    const spyMockSearch = jest.spyOn(mockService, "search");
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const requestOptions: RequestOptions = {
      validate_only: false,
      page_token: "abcd",
      page_size: 2,
    };
    const res = await customer.query(gaqlQuery, requestOptions);

    expect(mockedParse).toHaveBeenCalled();
    expect(spyBuild).toHaveBeenCalled();
    expect(spyBuild).toHaveBeenCalledWith(gaqlQuery, {
      validate_only: true, // changed
      page_token: "abcd",
      page_size: 4, // changed
    });
    expect(spyMockSearch).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: gaqlQuery,
      reportOptions: undefined,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
    expect(res).toEqual(mockQueryReturnValue);
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
    const mockedParse = mockParse(mockQueryReturnValue);
    const mockedError = mockGetGoogleAdsError(customer);
    const spyMockSearch = jest.spyOn(mockService, "search");
    const spyHook = jest.spyOn(hooks, "onQueryError");

    try {
      await customer.query(gaqlQuery);
      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(mockedParse).not.toHaveBeenCalled();
      expect(mockedError).toHaveBeenCalled();
      expect(spyMockSearch).toHaveBeenCalled();
      expect(spyMockSearch).toThrow();
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
    const mockedParse = mockParse(mockQueryReturnValue);
    const mockedError = mockGetGoogleAdsError(customer);
    const spyMockSearch = jest.spyOn(mockService, "search");
    const spyHook = jest.spyOn(hooks, "onQueryError");
    await customer.query(gaqlQuery);

    expect(mockedParse).toHaveBeenCalled();
    expect(mockedError).not.toHaveBeenCalled();
    expect(spyMockSearch).toHaveBeenCalled();
    expect(spyMockSearch).not.toThrow();
    expect(spyHook).not.toHaveBeenCalled();
  });

  it("calls onQueryEnd when provided", async () => {
    const hooks: Hooks = {
      onQueryEnd() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockQueryReturnValue);
    const spyMockSearch = jest.spyOn(mockService, "search");
    const spyHook = jest.spyOn(hooks, "onQueryEnd");
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).toHaveBeenCalled();
    expect(spyMockSearch).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: gaqlQuery,
      reportOptions: undefined,
      response: mockQueryReturnValue,
      resolve: expect.any(Function),
    });
    expect(res).toEqual(mockQueryReturnValue);
  });

  it("resolves the query with the argument of resolve() in onQueryEnd", async () => {
    const hookReturnValue = "hook return value";
    const hooks: Hooks = {
      onQueryEnd({ resolve }) {
        resolve(hookReturnValue);
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockQueryReturnValue);
    const spyMockSearch = jest.spyOn(mockService, "search");
    const spyHook = jest.spyOn(hooks, "onQueryEnd");
    const res = await customer.query<string>(gaqlQuery);

    expect(mockedParse).toHaveBeenCalled();
    expect(spyMockSearch).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: gaqlQuery,
      reportOptions: undefined,
      response: mockQueryReturnValue,
      resolve: expect.any(Function),
    });
    expect(res).toEqual(hookReturnValue);
  });
});

describe("reportStream", () => {
  afterEach(() => jest.resetAllMocks());

  it("parses reportStream results by default", async () => {
    const customer = newCustomer({});
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
      iterations += 1;
    }

    expect(iterations).toEqual(3);
    expect(mockedParse).toHaveBeenCalled();
    expect(spyMockSearchAsync).toHaveBeenCalled();
  });

  it("skips reportStream parsing if it is disabled in the client options", async () => {
    const disableParsing = true;
    const customer = newCustomer({}, disableParsing);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockQueryReturnValue[iterations]);
      iterations += 1;
    }

    expect(iterations).toEqual(3);
    expect(mockedParse).not.toHaveBeenCalled();
    expect(spyMockSearchAsync).toHaveBeenCalled();
  });

  it("calls onQueryStart when provided", async () => {
    const hooks: Hooks = {
      onQueryStart() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
      iterations += 1;
    }

    expect(iterations).toEqual(3);
    expect(mockedParse).toHaveBeenCalled();
    expect(spyMockSearchAsync).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: expect.any(String),
      reportOptions,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
  });

  it("cancels the query when cancel() is called in onQueryStart", async () => {
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel();
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(typeof row).toEqual("undefined");
      iterations += 1;
    }

    expect(iterations).toEqual(1);
    expect(mockedParse).not.toHaveBeenCalled();
    expect(spyMockSearchAsync).not.toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: expect.any(String),
      reportOptions,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
  });

  it("returns the argument of cancel() if one is provided in onQueryStart", async () => {
    const alternativeReturnValue = "return this instead";
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel(alternativeReturnValue);
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(alternativeReturnValue);
      iterations += 1;
    }

    expect(iterations).toEqual(1);
    expect(mockedParse).not.toHaveBeenCalled();
    expect(spyMockSearchAsync).not.toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: expect.any(String),
      reportOptions,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
  });

  it("iterates over the argument of cancel() if it is an array in onQueryStart", async () => {
    const alternativeReturnValue = ["return", "these", "values", "instead"];
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel(alternativeReturnValue);
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(alternativeReturnValue[iterations]);
      iterations += 1;
    }

    expect(iterations).toEqual(alternativeReturnValue.length);
    expect(mockedParse).not.toHaveBeenCalled();
    expect(spyMockSearchAsync).not.toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: expect.any(String),
      reportOptions,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
  });

  it("edits the requestOptions when editOptions() is called in onQueryStart", async () => {
    const hooks: Hooks = {
      onQueryStart({ editOptions }) {
        editOptions({ validate_only: true, page_size: 4 });
      },
    };
    const customer = newCustomer(hooks);
    const { mockService, spyBuild } = mockBuildSearchRequestAndService(
      customer
    );
    const mockedParse = mockParse([mockParseValue]);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const requestOptions: RequestOptions = {
      validate_only: false, // changed
      page_token: "abcd",
      page_size: 2, // changed
    };
    const stream = customer.reportStream({
      ...reportOptions,
      ...requestOptions,
    });

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
      iterations += 1;
    }

    expect(iterations).toEqual(3);
    expect(mockedParse).toHaveBeenCalled();
    expect(spyBuild).toHaveBeenCalled();
    expect(spyBuild).toHaveBeenCalledWith(gaqlQuery, {
      validate_only: true,
      page_token: "abcd",
      page_size: 4,
    });
    expect(spyMockSearchAsync).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: expect.any(String),
      reportOptions: { ...reportOptions, ...requestOptions },
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
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
    const mockedParse = mockParse([mockParseValue]);
    const mockedError = mockGetGoogleAdsError(customer);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const spyHook = jest.spyOn(hooks, "onQueryError");

    try {
      const stream = customer.reportStream(reportOptions);
      await stream.next();
      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(mockedParse).not.toHaveBeenCalled();
      expect(mockedError).toHaveBeenCalled();
      expect(spyMockSearchAsync).toHaveBeenCalled();
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
    const mockedParse = mockParse([mockParseValue]);
    const mockedError = mockGetGoogleAdsError(customer);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const spyHook = jest.spyOn(hooks, "onQueryError");
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
      iterations += 1;
    }

    expect(iterations).toEqual(3);
    expect(mockedParse).toHaveBeenCalled();
    expect(mockedError).not.toHaveBeenCalled();
    expect(spyMockSearchAsync).toHaveBeenCalled();
    expect(spyHook).not.toHaveBeenCalled();
  });

  it("calls onQueryEnd when provided", async () => {
    const hooks: Hooks = {
      onQueryEnd() {
        return;
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const spyHook = jest.spyOn(hooks, "onQueryEnd");
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
      iterations += 1;
    }

    expect(iterations).toEqual(3);
    expect(mockedParse).toHaveBeenCalled();
    expect(spyMockSearchAsync).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
  });

  it("does NOT return the value of resolve() in onQueryEnd", async () => {
    const hookReturnValues = ["various", "hook", "return", "values"];
    const hooks: Hooks = {
      onQueryEnd({ resolve }) {
        resolve(hookReturnValues);
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const spyMockSearchAsync = jest.spyOn(mockService, "searchAsync");
    const spyHook = jest.spyOn(hooks, "onQueryEnd");
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
      iterations += 1;
    }

    expect(iterations).toEqual(3);
    expect(mockedParse).toHaveBeenCalled();
    expect(spyMockSearchAsync).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
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
    const { mockService } = mockBuildMutateRequestAndService(customer);
    const spyMockMutate = jest.spyOn(mockService, "mutate");
    const spyHook = jest.spyOn(hooks, "onMutationStart");
    const res = await customer.mutateResources(mutations);

    expect(spyMockMutate).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      mutations,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
    expect(res).toEqual(mockMutationReturnValue);
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
    const spyHook = jest.spyOn(hooks, "onMutationStart");
    const res = await customer.mutateResources(mutations);

    expect(spyMockMutate).not.toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      mutations,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
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
    const { mockService } = mockBuildMutateRequestAndService(customer);
    const spyMockMutate = jest.spyOn(mockService, "mutate");
    const spyHook = jest.spyOn(hooks, "onMutationStart");
    const res = await customer.mutateResources(mutations);

    expect(spyMockMutate).not.toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      mutations,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
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
    const { mockService, spyBuild } = mockBuildMutateRequestAndService(
      customer
    );
    const spyMockMutate = jest.spyOn(mockService, "mutate");
    const spyHook = jest.spyOn(hooks, "onMutationStart");
    const mutateOptions: MutateOptions = {
      validate_only: false,
      partial_failure: true,
      response_content_type: enums.ResponseContentType.RESOURCE_NAME_ONLY,
    };
    const res = await customer.mutateResources(mutations, mutateOptions);

    expect(spyMockMutate).toHaveBeenCalled();
    expect(spyBuild).toHaveBeenCalled();
    expect(spyBuild).toHaveBeenCalledWith(mutations, {
      validate_only: true, // changed
      partial_failure: true,
      response_content_type: enums.ResponseContentType.MUTABLE_RESOURCE, // changed
    });
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      mutations,
      cancel: expect.any(Function),
      editOptions: expect.any(Function),
    });
    expect(res).toEqual(mockMutationReturnValue);
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
      expect(mockedError).toHaveBeenCalled();
      expect(spyMockMutate).toHaveBeenCalled();
      expect(spyMockMutate).toThrow();
      expect(spyHook).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalledWith({
        credentials: expect.any(Object),
        mutations,
        error: mockError,
      });
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
    const mockedError = mockGetGoogleAdsError(customer);
    const spyMockMutate = jest.spyOn(mockService, "mutate");
    const spyHook = jest.spyOn(hooks, "onMutationError");
    await customer.mutateResources(mutations);

    expect(mockedError).not.toHaveBeenCalled();
    expect(spyMockMutate).toHaveBeenCalled();
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
    const { mockService } = mockBuildMutateRequestAndService(customer);
    const spyMockMutate = jest.spyOn(mockService, "mutate");
    const spyHook = jest.spyOn(hooks, "onMutationEnd");
    const res = await customer.mutateResources(mutations);

    expect(spyMockMutate).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      mutations,
      response: mockMutationReturnValue,
      resolve: expect.any(Function),
    });
    expect(res).toEqual(mockMutationReturnValue);
  });

  it("resolves the query with the argument of resolve() in onMutationEnd", async () => {
    const hookReturnValue = "hook return value";
    const hooks: Hooks = {
      onMutationEnd({ resolve }) {
        resolve(hookReturnValue);
      },
    };
    const customer = newCustomer(hooks);
    const { mockService } = mockBuildMutateRequestAndService(customer);
    const spyMockMutate = jest.spyOn(mockService, "mutate");
    const spyHook = jest.spyOn(hooks, "onMutationEnd");
    const res = await customer.mutateResources(mutations);

    expect(spyMockMutate).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      mutations,
      response: mockMutationReturnValue,
      resolve: expect.any(Function),
    });
    expect(res).toEqual(hookReturnValue);
  });
});
