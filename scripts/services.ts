import fs from "fs";
import protos from "google-ads-node/build/protos/protos.json";
import pluralize from "pluralize";
import { ServiceName } from "../src/protos";
import { toCamelCase } from "../src/utils";
import { googleAdsVersion } from "../package.json";
import { FILES } from "./path";

const VERSION = googleAdsVersion;
const IGNORED_SERVICES = ["GoogleAdsService", "GoogleAdsFieldService"];
const GOOGLE_ADS_DOCS_URL =
  "https://developers.google.com/google-ads/api/reference";

const allServices =
  // @ts-expect-error The version number is the correct type
  protos.nested.google.nested.ads.nested.googleads.nested[VERSION].nested
    .services.nested;

interface ProtoDefinition {
  options?: Record<string, string>;
  methods?: {
    [methodName: string]: MethodDefinition;
  };
  fields?: {
    [fieldName: string]: {
      type: string;
      id: number;
      options?: Record<string, string>;
    };
  };
}

interface MethodDefinition {
  requestType: string;
  responseType: string;
  options: Record<string, string>;
}

type MutateMethod = "create" | "update" | "remove";

interface MutateOptions {
  hasOptions: boolean;
  type: string;
}

export async function compileServices(): Promise<void> {
  // Output file
  const stream = fs.createWriteStream(FILES.services);

  // TODO: This isn't ideal, maybe some kind of template instead?
  stream.write(`
/* Autogenerated File! Do Not Edit */

import { ClientOptions } from "../../client";
import { CustomerOptions } from "../../customer";
import { Service } from "../../service";
import { resources, services, protobuf, longrunning } from "../index";

export default class ServiceFactory extends Service {
  constructor(clientOptions: ClientOptions, customerOptions: CustomerOptions) {
    super(clientOptions, customerOptions);
  }
`);

  for (const [name, service] of Object.entries<ProtoDefinition>(allServices)) {
    // We only care about services, not request or response types
    if (!name.endsWith("Service") || IGNORED_SERVICES.includes(name)) {
      continue;
    }

    // Compiled service methods
    const compiledMethods: string[] = [];
    // Compiled inline types for a service
    const serviceTypes: string[] = [];

    // Give up if the service doesn't have any methods defined
    if (!service.methods) {
      continue;
    }

    for (const [methodName, methodDef] of Object.entries<MethodDefinition>(
      service.methods
    )) {
      if (methodName.startsWith("Get")) {
        const getMethod = compileGetMethod(methodName, methodDef);
        compiledMethods.push(getMethod);
        continue;
      }
      if (methodName.startsWith("Mutate")) {
        const { mutateMethods, mutateOptions } = compileMutateMethods(
          name,
          methodName,
          methodDef
        );
        compiledMethods.push(...mutateMethods);
        if (mutateOptions.hasOptions) {
          serviceTypes.push(mutateOptions.type);
        } else {
          serviceTypes.push("type MutateOptions = never");
        }
        continue;
      }

      const specialMethod = compileSpecialMethod(name, methodName, methodDef);
      compiledMethods.push(specialMethod);
    }

    if (compiledMethods.length === 0) {
      console.log(`No service methods compiled for "${name}"`);
      continue;
    }

    const resourceName = name.replace("Service", "");
    const pluralServiceName = pluralize(toCamelCase(resourceName));

    const serviceInit = buildServiceInit(
      `${name}Client` as ServiceName,
      `services.${name}`
    );

    stream.write(`
    /**
     * @link ${GOOGLE_ADS_DOCS_URL}/rpc/${VERSION}/${name}
     */
    public get ${pluralServiceName}() {
      ${serviceInit}
      ${serviceTypes.length > 0 ? serviceTypes.join("\n") : ""}
      return {
        ${compiledMethods.join("\n,")}
      }
    }
  `);
    console.log(`Compiled service "${name}" → customer.${pluralServiceName}`);
  }

  stream.write("\n}");
}

function compileSpecialMethod(
  serviceName: string,
  methodName: string,
  methodDef: MethodDefinition
): string {
  const serviceMethod = toCamelCase(methodName);
  const requestType = `services.${methodDef.requestType}`;

  // Some special methods use types such as google.longrunning.Operation
  const responseType = methodDef.responseType.includes("google.")
    ? methodDef.responseType.split("google.")[1]
    : `services.${methodDef.responseType}`;

  return `
    /**
     * @link ${GOOGLE_ADS_DOCS_URL}/rpc/${VERSION}/${serviceName}#${methodName.toLowerCase()}
     */
    ${serviceMethod}: async (request: ${requestType}): Promise<${responseType}> => {
      try {
        // @ts-expect-error Response is an array type
        const [response] = await service.${serviceMethod}(request, {
          // @ts-expect-error This arg doesn't exist in the type definitions
          otherArgs: {
            headers: this.callHeaders,
          },
        });
        return response;
      } catch (err) {
        throw this.getGoogleAdsError(err);
      }
    }
  `;
}

function compileGetMethod(
  methodName: string,
  methodDef: MethodDefinition
): string {
  const serviceMethod = toCamelCase(methodName);
  const requestType = `services.${methodDef.requestType}`;
  const responseType = methodDef.responseType.split(`${VERSION}.`)[1];

  return `
    /**
     * @description Retrieve a ${responseType} in full detail
     * @warning Don't use get in production!
     * @returns ${responseType}
     */
    get: async (resourceName: string): Promise<${responseType}> => {
      const request = new ${requestType}({
        resource_name: resourceName,
      });
      try {
        // @ts-expect-error Response is an array type
        const [response] = await service.${serviceMethod}(request, {
          // @ts-expect-error This arg doesn't exist in the type definitions
          otherArgs: {
            headers: this.callHeaders,
          },
        });
        return response;
      } catch (err) {
        throw this.getGoogleAdsError(err);
      }
    }
  `;
}

function compileMutateMethods(
  serviceName: string,
  methodName: string,
  methodDef: MethodDefinition
): { mutateMethods: string[]; mutateOptions: MutateOptions } {
  const mutateMethods: string[] = [];

  const { requestType } = methodDef;
  const req = allServices[requestType];

  const opType = req.fields.operation ?? req.fields.operations;
  const op = allServices[opType.type];

  const methods = Object.keys(op.fields).filter((o) =>
    ["create", "update", "remove"].includes(o)
  );

  const serviceMethod = toCamelCase(methodName);
  const resourceName = serviceName.replace("Service", "");
  const argName = pluralize(toCamelCase(resourceName));

  const types = {
    resource: `resources.I${resourceName}`,
    request: `services.I${methodDef.requestType}`,
    operation: `services.${opType.type}`,
    response: `services.${methodDef.responseType}`,
  };

  const options = Object.keys(req.fields).filter(
    (k) => !["customer_id", "operations", "operation"].includes(k)
  );

  const mutateOptions = buildMutationOptions(types.request, options);

  // create & update service methods
  for (const method of methods) {
    if (["create", "update"].includes(method)) {
      mutateMethods.push(
        buildMutateMethod(
          method as MutateMethod,
          argName,
          types.resource,
          types.request,
          types.operation,
          types.response,
          serviceMethod
        )
      );
    }
  }

  // delete service method
  if (methods.includes("remove")) {
    mutateMethods.push(
      buildMutateMethod(
        "remove",
        argName,
        "string",
        types.request,
        types.operation,
        types.response,
        serviceMethod
      )
    );
  }

  return { mutateMethods, mutateOptions };
}

function buildServiceInit(name: ServiceName, type: string): string {
  return `const service = this.loadService<${type}>("${name}")`;
}

function buildMutationOptions(
  requestType: string,
  fields: string[]
): MutateOptions {
  if (fields.length === 0) {
    return {
      hasOptions: false,
      type: "",
    };
  }
  const pickKeys = fields.map((f) => `"${f}"`).join("|");
  return {
    hasOptions: true,
    type: `type MutateOptions = Partial<Pick<${requestType}, ${pickKeys}>>`,
  };
}

function buildMutateMethod(
  mutation: MutateMethod,
  argName: string,
  resourceType: string,
  requestType: string,
  operationType: string,
  responseType: string,
  methodName: string
): string {
  const isUpdate = mutation === "update";
  const updateMaskMessageArg = isUpdate ? `, ${resourceType}` : "";
  return `
    /**
     * @description ${mutation} resources of type ${resourceType}
     * @returns ${responseType}
     */
    ${mutation}: async (
      ${argName}: ${resourceType}[],
      options?: MutateOptions
    ): Promise<${responseType} > => {
      const ops = this.buildOperations<
        ${operationType},
        ${resourceType}
      >(
        "${mutation}", 
        ${argName}
        ${isUpdate ? "// @ts-expect-error Static class type here is fine" : ""}
        ${updateMaskMessageArg}
      );
      const request = this.buildRequest<
        ${operationType},
        ${requestType},
        MutateOptions
      >(ops, options);
      try {
        // @ts-expect-error Response is an array type
        const [response] = await service.${methodName}(request, {
          // @ts-expect-error This arg doesn't exist in the type definitions
          otherArgs: {
            headers: this.callHeaders,
          },
        });
        return response;
      } catch (err) {
        throw this.getGoogleAdsError(err);
      }
    }
  `;
}
