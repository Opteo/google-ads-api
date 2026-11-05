import protos from "google-ads-node/build/protos/protos.json";
import pluralize from "pluralize";
import { services } from "./protos/index.js";
import { newCustomer } from "./testUtils.js";
import { toCamelCase } from "./utils.js";
import { googleAdsVersion } from "./version.js";

type ProtoDefinition = {
  fields?: Record<string, { type: string; rule?: string }>;
  methods?: Record<string, { requestType: string }>;
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
    const resource = serviceName.replace("Service", "");
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
