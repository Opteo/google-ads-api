import {
  mockBuildSearchRequestAndService,
  mockQueryError,
  mockGetGoogleAdsError,
  mockParseValues,
  mockParseValue,
  mockQuery,
  mockParse,
  mockQueryReturnValue,
  failTestIfExecuted,
  newCustomer,
} from "./testUtils";
import { Hooks } from "./customer";
import { ReportOptions } from "./types";

const gaqlQuery = `SELECT campaign.resource_name FROM campaign LIMIT 1`;
const reportOptions: ReportOptions = {
  entity: "campaign",
  attributes: ["campaign.resource_name"],
  limit: 1,
};

describe("query", () => {
  afterEach(() => jest.resetAllMocks());

  it("parses query results by default", async () => {
    const customer = newCustomer({});
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockParseValues);
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).toHaveBeenCalled();
    expect(res).toEqual(mockParseValues);
  });

  it("skips query parsing if it is disabled in the client options", async () => {
    const disableParsing = true;
    const customer = newCustomer({}, disableParsing);
    mockBuildSearchRequestAndService(customer);
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
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockQueryReturnValue);
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: gaqlQuery,
      reportOptions: undefined,
      cancel: expect.any(Function),
    });
    expect(res).toEqual(mockQueryReturnValue);
  });

  it("cancels the query when cancel() is called in onQueryStart", async () => {
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel();
      },
    };
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockQueryReturnValue);
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).not.toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(typeof res).toEqual("undefined");
  });

  it("returns the argument of cancel() if one is provided", async () => {
    const alternateReturnValue = "return this instead";
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel(alternateReturnValue);
      },
    };
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockQueryReturnValue);
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).not.toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: gaqlQuery,
      reportOptions: undefined,
      cancel: expect.any(Function),
    });
    expect(res).toEqual(alternateReturnValue);
  });

  it("calls onQueryError when provided and when the query throws an error", async (done) => {
    const faultyGaqlQuery = "SELECT campaign.name FROM campaigns LIMIT 2";
    const shouldThrow = true;

    const hooks: Hooks = {
      onQueryError() {
        return;
      },
    };
    const spyHook = jest.spyOn(hooks, "onQueryError");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer, shouldThrow);
    const mockedParse = mockParse(mockQueryReturnValue);
    const mockedError = mockGetGoogleAdsError(customer);

    try {
      await customer.query(faultyGaqlQuery);
      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(mockedParse).not.toHaveBeenCalled();
      expect(mockedError).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalledWith({
        credentials: expect.any(Object),
        query: faultyGaqlQuery,
        reportOptions: undefined,
        error: mockQueryError,
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
    const spyHook = jest.spyOn(hooks, "onQueryError");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer, shouldThrow);
    const mockedParse = mockParse(mockQueryReturnValue);

    await customer.query(gaqlQuery);
    expect(spyHook).not.toHaveBeenCalled();
  });

  it("calls onQueryEnd when provided", async () => {
    const hooks: Hooks = {
      onQueryEnd() {
        return;
      },
    };
    const spyHook = jest.spyOn(hooks, "onQueryEnd");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockQueryReturnValue);
    const res = await customer.query(gaqlQuery);

    expect(mockedParse).toHaveBeenCalled();
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
    const spyHook = jest.spyOn(hooks, "onQueryEnd");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse(mockQueryReturnValue);
    const res = await customer.query<string>(gaqlQuery);

    expect(mockedParse).toHaveBeenCalled();
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
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
      iterations += 1;
    }

    expect(iterations).toEqual(3);
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

    expect(iterations).toEqual(3);
    expect(mockedParse).not.toHaveBeenCalled();
  });

  it("calls onQueryStart when provided", async () => {
    const hooks: Hooks = {
      onQueryStart() {
        return;
      },
    };
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
      iterations += 1;
    }

    expect(mockedParse).toHaveBeenCalled();
    expect(iterations).toEqual(3);
    expect(spyHook).toHaveBeenCalled();
    expect(spyHook).toHaveBeenCalledWith({
      credentials: expect.any(Object),
      query: expect.any(String),
      reportOptions,
      cancel: expect.any(Function),
    });
  });

  it("cancels the query when cancel() is called in onQueryStart", async () => {
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel();
      },
    };
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(typeof row).toEqual("undefined");
      iterations += 1;
    }

    expect(mockedParse).not.toHaveBeenCalled();
    expect(iterations).toEqual(1);
    expect(spyHook).toHaveBeenCalled();
  });

  it("returns the argument of cancel() if one is provided", async () => {
    const alternateReturnValue = "return this instead";
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel(alternateReturnValue);
      },
    };
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(alternateReturnValue);
      iterations += 1;
    }

    expect(mockedParse).not.toHaveBeenCalled();
    expect(iterations).toEqual(1);
    expect(spyHook).toHaveBeenCalled();
  });

  it("iterates over the argument of cancel() if it is an array", async () => {
    const alternateReturnValue = ["return", "these", "values", "instead"];
    const hooks: Hooks = {
      onQueryStart({ cancel }) {
        cancel(alternateReturnValue);
      },
    };
    const spyHook = jest.spyOn(hooks, "onQueryStart");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(alternateReturnValue[iterations]);
      iterations += 1;
    }

    expect(mockedParse).not.toHaveBeenCalled();
    expect(iterations).toEqual(alternateReturnValue.length);
    expect(spyHook).toHaveBeenCalled();
  });

  it("calls onQueryError when provided and when the query throws an error", async (done) => {
    const faultyReportOptions: ReportOptions = {
      // @ts-expect-error bad resource name
      entity: "campaignnnnn",
      attributes: ["campaign.resource_name"],
      limit: 1,
    };
    const shouldThrow = true;

    const hooks: Hooks = {
      onQueryError() {
        return;
      },
    };
    const spyHook = jest.spyOn(hooks, "onQueryError");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer, shouldThrow);
    const mockedParse = mockParse([mockParseValue]);
    const mockedError = mockGetGoogleAdsError(customer);

    try {
      const stream = customer.reportStream(faultyReportOptions);
      await stream.next();
      failTestIfExecuted(); // should not be called
    } catch (error) {
      expect(mockedParse).not.toHaveBeenCalled();
      expect(mockedError).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalled();
      expect(spyHook).toHaveBeenCalledWith({
        credentials: expect.any(Object),
        query: expect.any(String),
        reportOptions: faultyReportOptions,
        error: mockQueryError,
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
    const spyHook = jest.spyOn(hooks, "onQueryError");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer, shouldThrow);
    const mockedParse = mockParse([mockParseValue]);
    const mockedError = mockGetGoogleAdsError(customer);
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
      iterations += 1;
    }

    expect(mockedParse).toHaveBeenCalled();
    expect(mockedError).not.toHaveBeenCalled();
    expect(iterations).toEqual(3);
    expect(spyHook).not.toHaveBeenCalled();
  });

  it("calls onQueryEnd when provided", async () => {
    const hooks: Hooks = {
      onQueryEnd() {
        return;
      },
    };
    const spyHook = jest.spyOn(hooks, "onQueryEnd");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
      iterations += 1;
    }

    expect(mockedParse).toHaveBeenCalled();
    expect(iterations).toEqual(3);
    expect(spyHook).toHaveBeenCalled();
  });

  it("does NOT return the value of onQueryEnd when there is one", async () => {
    const hookReturnValues = ["various", "hook", "return", "values"];
    const hooks: Hooks = {
      onQueryEnd({ resolve }) {
        resolve(hookReturnValues);
      },
    };

    const spyHook = jest.spyOn(hooks, "onQueryEnd");
    const customer = newCustomer(hooks);
    mockBuildSearchRequestAndService(customer);
    const mockedParse = mockParse([mockParseValue]);
    const stream = customer.reportStream(reportOptions);

    let iterations = 0;
    for await (const row of stream) {
      expect(row).toEqual(mockParseValue);
      iterations += 1;
    }

    expect(mockedParse).toHaveBeenCalled();
    expect(iterations).toEqual(3);
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
