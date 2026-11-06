import protos from "google-ads-node/build/protos/protos.json";
import pluralize from "pluralize";
import { resources, services } from "./protos/index.js";
import { Hooks } from "./hooks.js";
import { newCustomer } from "./testUtils.js";
import { toCamelCase } from "./utils.js";
import { googleAdsVersion } from "./version.js";

type ProtoDefinition = {
  fields?: Record<string, { type: string; rule?: string }>;
  methods?: Record<string, { requestType: string; responseType: string }>;
  nested: Record<string, ProtoDefinition>;
};

const definitions = (protos as unknown as ProtoDefinition).nested.google.nested
  .ads.nested.googleads.nested[googleAdsVersion].nested.services.nested;

type RequestClass = {
  fromObject: (object: unknown) => unknown;
  encode: (message: unknown) => { finish: () => Uint8Array };
  decode: (bytes: Uint8Array) => unknown;
  toObject: (message: unknown) => Record<string, unknown>;
};

const mutateMethods = Object.entries(definitions).flatMap(
  ([serviceName, service]) => {
    const resource = serviceName.replace(/Service$/, "");
    return Object.entries(service.methods ?? {}).flatMap(
      ([methodName, { requestType }]) => {
        const fields = definitions[requestType].fields;
        const operationField = fields?.operation ?? fields?.operations;
        if (
          !operationField ||
          (methodName !== `Mutate${resource}` &&
            methodName !== `Mutate${pluralize(resource)}`)
        ) {
          return [];
        }
        return {
          requestType,
          singular: Boolean(fields?.operation),
          rpc: toCamelCase(methodName),
          getter: pluralize(toCamelCase(resource)),
          mutations: Object.keys(
            definitions[operationField.type].fields ?? {}
          ).filter((field) =>
            ["create", "update", "remove"].includes(field)
          ) as ("create" | "update" | "remove")[],
        };
      }
    );
  }
);

async function sentRequest(
  getter: string,
  rpc: string,
  mutation: "create" | "update" | "remove",
  argument: unknown
): Promise<Record<string, unknown>> {
  const customer = newCustomer();
  const send = jest.fn().mockResolvedValue([{}]);
  jest
    // @ts-expect-error Accessing protected method for test purposes
    .spyOn(customer, "loadService")
    // @ts-expect-error Stubbed service exposes only the mutate method
    .mockReturnValue({ [rpc]: send });

  const helpers = (customer as unknown as Record<string, unknown>)[
    getter
  ] as Record<string, (argument: unknown) => Promise<unknown>>;
  await helpers[mutation](argument);

  expect(send).toHaveBeenCalledTimes(1);
  return send.mock.calls[0][0];
}

function roundTrip(
  requestType: string,
  request: Record<string, unknown>
): Record<string, unknown> {
  const Request = (services as unknown as Record<string, RequestClass>)[
    requestType
  ];
  return Request.toObject(
    Request.decode(Request.encode(Request.fromObject(request)).finish())
  );
}

const singularCases = mutateMethods
  .filter(({ singular }) => singular)
  .flatMap((method) =>
    method.mutations.map((mutation) => ({ ...method, mutation }))
  );

describe("mutate helpers for single-operation requests", () => {
  it("covers every request with a singular operation field", () => {
    expect(singularCases.length).toBeGreaterThan(0);
  });

  it.each(singularCases)(
    "$getter $mutation sends one operation that survives serialisation",
    async ({ getter, rpc, mutation, requestType }) => {
      const resourceName = "customers/1/resource/2";
      const argument =
        mutation === "remove" ? resourceName : { resource_name: resourceName };

      const decoded = roundTrip(
        requestType,
        await sentRequest(getter, rpc, mutation, argument)
      );

      expect(decoded.operation).toMatchObject(
        mutation === "remove"
          ? { remove: resourceName }
          : { [mutation]: { resource_name: resourceName } }
      );
    }
  );
});

describe("mutate helpers for repeated-operation requests", () => {
  it("sends every operation", async () => {
    const decoded = roundTrip(
      "MutateCampaignsRequest",
      await sentRequest("campaigns", "mutateCampaigns", "remove", [
        "customers/1/campaigns/2",
        "customers/1/campaigns/3",
      ])
    );

    expect(decoded.operations).toEqual([
      { remove: "customers/1/campaigns/2" },
      { remove: "customers/1/campaigns/3" },
    ]);
  });
});

describe("mutate helper hooks", () => {
  it("gives every mutation hook the effective mutate options", async () => {
    const seen: Record<string, unknown> = {};
    const hooks: Hooks = {
      onMutationStart({ mutateOptions, editOptions }) {
        seen.start = { ...mutateOptions };
        editOptions({ partial_failure: true });
      },
      onMutationEnd({ mutateOptions }) {
        seen.end = { ...mutateOptions };
      },
    };
    const customer = newCustomer(hooks);
    const send = jest.fn().mockResolvedValue([{}]);
    jest
      // @ts-expect-error Accessing protected method for test purposes
      .spyOn(customer, "loadService")
      // @ts-expect-error Stubbed service exposes only the mutate method
      .mockReturnValue({ mutateCampaignBudgets: send });
    const callerOptions = { validate_only: true };

    await customer.campaignBudgets.create(
      [{ name: "probe", amount_micros: 1 }],
      callerOptions
    );

    expect(seen.start).toEqual({ validate_only: true });
    expect(seen.end).toEqual({ validate_only: true, partial_failure: true });
    expect(send.mock.calls[0][0]).toMatchObject({
      validate_only: true,
      partial_failure: true,
    });
    expect(callerOptions).toEqual({ validate_only: true });
  });
});

const specialMethods = Object.entries(definitions).flatMap(
  ([serviceName, service]) => {
    if (["GoogleAdsService", "GoogleAdsFieldService"].includes(serviceName)) {
      return [];
    }
    const resource = serviceName.replace(/Service$/, "");
    return Object.entries(service.methods ?? {}).flatMap(
      ([methodName, { requestType, responseType }]) => {
        if (methodName.startsWith("Mutate")) {
          return [];
        }
        const request = definitions[requestType.split(".").pop() as string];
        const response = definitions[responseType.split(".").pop() as string];
        return {
          getter: pluralize(toCamelCase(resource)),
          rpc: toCamelCase(methodName),
          paged: Boolean(
            request?.fields?.page_token && response?.fields?.next_page_token
          ),
        };
      }
    );
  }
);

describe("paginated service methods", () => {
  const pagedMethods = specialMethods.filter(({ paged }) => paged);

  it("finds the paginated methods", () => {
    expect(pagedMethods.map(({ rpc }) => rpc).sort()).toEqual([
      "generateKeywordIdeas",
      "listBatchJobResults",
      "listCampaignDraftAsyncErrors",
      "listExperimentAsyncErrors",
    ]);
  });

  it.each(pagedMethods)(
    "$getter $rpc returns one page as the RPC response",
    async ({ getter, rpc }) => {
      const customer = newCustomer();
      const rawResponse = { next_page_token: "next-page" };
      const send = jest
        .fn()
        .mockResolvedValue([[], { page_token: "next-page" }, rawResponse]);
      jest
        // @ts-expect-error Accessing protected method for test purposes
        .spyOn(customer, "loadService")
        // @ts-expect-error Stubbed service exposes only the paged method
        .mockReturnValue({ [rpc]: send });

      const helpers = (customer as unknown as Record<string, unknown>)[
        getter
      ] as Record<string, (request: unknown) => Promise<unknown>>;

      await expect(helpers[rpc]({})).resolves.toBe(rawResponse);
      expect(send).toHaveBeenCalledWith(
        {},
        expect.objectContaining({ autoPaginate: false })
      );
    }
  );

  it("keeps total_size and next_page_token from generateKeywordIdeas", async () => {
    const customer = newCustomer();
    // @ts-expect-error Accessing protected method for test purposes
    const client = customer.loadService("KeywordPlanIdeaServiceClient", {
      skipCache: true,
    }) as { _gaxGrpc: { createStub: () => Promise<unknown> } };
    const generateKeywordIdeas = jest.fn(
      (
        _request: unknown,
        _metadata: unknown,
        _options: unknown,
        callback: (error: null, response: Record<string, unknown>) => void
      ) => {
        callback(null, {
          results: [{ text: "shoes" }],
          next_page_token: "next-page",
          total_size: 2,
        });
        return { cancel: () => undefined };
      }
    );
    jest
      .spyOn(client._gaxGrpc, "createStub")
      .mockResolvedValue({ generateKeywordIdeas });
    jest
      // @ts-expect-error Accessing protected method for test purposes
      .spyOn(customer, "loadService")
      // @ts-expect-error The real client with a stubbed transport
      .mockReturnValue(client);

    const response = await customer.keywordPlanIdeas.generateKeywordIdeas(
      new services.GenerateKeywordIdeasRequest({ customer_id: "1" })
    );

    expect(generateKeywordIdeas).toHaveBeenCalledTimes(1);
    expect(response.total_size).toBe(2);
    expect(response.next_page_token).toBe("next-page");
    expect(response.results).toEqual([{ text: "shoes" }]);
  });
});

describe("long-running service methods", () => {
  it("returns a gax operation that can be awaited", async () => {
    const customer = newCustomer();
    // @ts-expect-error Accessing protected method for test purposes
    const client = customer.loadService("BatchJobServiceClient", {
      skipCache: true,
    }) as { _gaxGrpc: { createStub: () => Promise<unknown> } };
    jest.spyOn(client._gaxGrpc, "createStub").mockResolvedValue({
      runBatchJob: (
        _request: unknown,
        _metadata: unknown,
        _options: unknown,
        callback: (error: null, response: Record<string, unknown>) => void
      ) => {
        callback(null, { name: "operations/1", done: false });
        return { cancel: () => undefined };
      },
    });
    jest
      // @ts-expect-error Accessing protected method for test purposes
      .spyOn(customer, "loadService")
      // @ts-expect-error The real client with a stubbed transport
      .mockReturnValue(client);

    const operation = await customer.batchJobs.runBatchJob(
      new services.RunBatchJobRequest({
        resource_name: "customers/1/batchJobs/2",
      })
    );
    const waitForCompletion: () => Promise<unknown> =
      operation.promise.bind(operation);

    expect(operation.name).toBe("operations/1");
    expect(waitForCompletion).toBeInstanceOf(Function);
  });
});

describe("service getter names", () => {
  it("strips only the trailing Service from the service name", () => {
    const customer = newCustomer();
    expect("localServicesLeads" in customer).toBe(true);
    expect("localServicesEligibilities" in customer).toBe(true);
    expect("localsLeadServices" in customer).toBe(false);
  });
});

describe("update masks", () => {
  async function sentMask(campaign: unknown): Promise<string[]> {
    const customer = newCustomer();
    const send = jest.fn().mockResolvedValue([{}]);
    jest
      // @ts-expect-error Accessing protected method for test purposes
      .spyOn(customer, "loadService")
      // @ts-expect-error Stubbed service exposes only the mutate method
      .mockReturnValue({ mutateCampaigns: send });
    await customer.campaigns.update([campaign as resources.ICampaign]);
    return send.mock.calls[0][0].operations[0].update_mask.paths;
  }

  it("includes repeated fields set to an empty array, so they are cleared", async () => {
    await expect(
      sentMask({
        resource_name: "customers/1/campaigns/2",
        url_custom_parameters: [],
      })
    ).resolves.toEqual(["resource_name", "url_custom_parameters"]);
  });

  it("leaves fields passed as undefined out of the mask", async () => {
    await expect(
      sentMask({
        resource_name: "customers/1/campaigns/2",
        name: "Renamed",
        status: undefined,
        tracking_url_template: undefined,
        network_settings: { target_search_network: undefined },
      })
    ).resolves.toEqual(["resource_name", "name"]);
  });

  it("leaves unset repeated fields of message instances out of the mask", async () => {
    await expect(
      sentMask(
        new resources.Campaign({
          resource_name: "customers/1/campaigns/2",
          name: "Renamed",
        })
      )
    ).resolves.toEqual(["resource_name", "name"]);
  });
});
