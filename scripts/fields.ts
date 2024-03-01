import fs from "fs";
import { FILES } from "./path";
import { GoogleAdsApi, services, resources, enums } from "../src";
import { capitaliseFirstLetter, toCamelCase } from "../src/utils";
import axios from "axios";

// Types
interface Resource {
  attributes: string[];
  metrics: string[];
  segments: string[];
}

// Credentials
const CLIENT_ID = process.env.GADS_API_CLIENT_ID as string;
const CLIENT_SECRET = process.env.GADS_API_CLIENT_SECRET as string;
const DEVELOPER_TOKEN = process.env.GADS_API_DEVELOPER_TOKEN as string;

// Account
const REFRESH_TOKEN = process.env.GADS_API_REFRESH_TOKEN as string;
const CUSTOMER_ID = process.env.GADS_API_CUSTOMER_ID as string;
const LOGIN_CUSTOMER_ID = process.env.GADS_API_LOGIN_CUSTOMER_ID as string;

// Client
const client = new GoogleAdsApi({
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  developer_token: DEVELOPER_TOKEN,
});

export async function compileFields(): Promise<void> {
  const _discovery = await axios.get(
    `https://googleads.googleapis.com/$discovery/rest?version=v14`
  );

  const discovery = _discovery.data as unknown as any;
  // console.log({ discovery });
  // const file = fs.readFileSync(__dirname + "/discovery.json");
  // const discovery = JSON.parse(file.toString());
  // console.log(discovery);
  // console.dir(discovery.schemas.GoogleAdsGoogleadsV15Common__PolicyTopicEntry, {
  //   depth: null,
  // });
  // console.log("-----------------------------------");
  // console.log("-----------------------------------");

  function extractPaths(schemaKey: string) {
    const paths: Record<string, string> = {};

    function extract(obj: any, parentPath?: string) {
      if ((parentPath ?? "").split(".").length > 10) {
        return;
      }
      for (const key in obj) {
        const property = obj[key];

        const fullPath = parentPath ? `${parentPath}.${key}` : key;
        if (property.enum || property.items?.type === "enum") {
          paths[fullPath] = "ENUM";
        } else if (
          property.type === "string" ||
          property.items?.type === "string"
        ) {
          paths[fullPath] = "STRING";
        } else if (
          property.type === "integer" ||
          property.type === "number" ||
          property.items?.type === "integer" ||
          property.items?.type === "number"
        ) {
          paths[fullPath] = "NUMBER";
        } else if (
          property.type === "boolean" ||
          property.items?.type === "boolean"
        ) {
          paths[fullPath] = "BOOLEAN";
        } else {
          // console.log({ property });
          // console.log("extracting...", property.items?.$ref ?? property.$ref);
          // console.log(
          // "which is ",
          // discovery.schemas[property.items?.$ref ?? property.$ref]
          // );
          const nextToExtract =
            discovery.schemas[property.items?.$ref ?? property.$ref];
          if (!nextToExtract?.properties) {
            // console.log({ property });
            throw new Error(
              "No properties found for " + property.items?.$ref ?? property.$ref
            );
          }

          paths[fullPath] = "MESSAGE";
          // console.log(nextToExtract.properties);
          extract(nextToExtract.properties, fullPath);
        }
      }
    }

    const base = schemaKey.split("__")[1];
    // if (!discovery.schemas[schemaKey]) {
    //   console.log({ schemaKey });
    // }
    extract(discovery.schemas[schemaKey].properties);
    return paths;
  }

  const newPaths = extractPaths(
    "GoogleAdsGoogleadsV14Common__PolicyTopicEntry"
  );

  // console.log({ newPaths });

  // return;

  const cus = client.Customer({
    refresh_token: REFRESH_TOKEN,
    customer_id: CUSTOMER_ID,
    login_customer_id: LOGIN_CUSTOMER_ID,
  });

  // @ts-ignore
  const [fields]: resources.GoogleAdsField[][] =
    // @ts-expect-error Protected usage is fine here
    await cus.googleAdsFields.searchGoogleAdsFields(
      new services.SearchGoogleAdsFieldsRequest({
        query: `
          SELECT
            name,
            category,
            selectable,
            selectable_with,
            attribute_resources,
            filterable,
            data_type,
            metrics,
            segments,
            type_url
        `,
      })
    );

  const resourceConstructs: { [resourceName: string]: Resource } = {};
  const enumFields: { [fieldName: string]: string } = {};
  const resourceNames: string[] = [];
  const attributes: string[] = [];
  const segments: string[] = [];
  const metrics: string[] = [];

  fields.forEach((field: resources.GoogleAdsField) => {
    if (!isDefinedAndNotNull(field.name)) {
      return;
    }

    const field_name = field.name as string;

    if (isResource(field)) {
      const resource: Resource = {
        attributes: [],
        metrics: field.metrics,
        segments: field.segments,
      };

      const selectableResources: string[] = [
        field_name,
        ...field.selectable_with.filter(
          (selectable: string) =>
            !selectable.includes("segments.") &&
            !selectable.includes("metrics.")
        ),
      ];

      resource.attributes = fields
        .filter((field: resources.GoogleAdsField) => {
          const correctResource = selectableResources.find((resource: string) =>
            field.resource_name.includes(`/${resource}.`)
          );
          return (
            isAttribute(field) &&
            isDefinedAndNotNull(field.name) &&
            correctResource &&
            field.selectable
          );
        })
        .map((field: resources.GoogleAdsField): string => field.name as string);

      resourceConstructs[field_name] = resource;
    } else if (isAttribute(field) && field.selectable) {
      attributes.push(field_name);
      if (isResourceName(field)) {
        resourceNames.push(field_name);
      }
    } else if (isMetric(field) && field.selectable) {
      metrics.push(field_name);
    } else if (isSegment(field) && field.selectable) {
      segments.push(field_name);
    }

    if (hasEnumDataType(field)) {
      enumFields[field_name] = getEnumName(field);
    }
  });

  const stream = fs.createWriteStream(FILES.fields);
  stream.write(`/* Autogenerated File! Do Not Edit */\n`);
  stream.write(`\n// eslint-disable-next-line\n`);
  stream.write(`export namespace fields {\n`);

  stream.write(`\n/*  -- RESOURCES --  */`);
  buildUnionType(stream, Object.keys(resourceConstructs), "Resource");

  stream.write(`\n/*  -- ATTRBIUTES --  */`);
  buildUnionType(stream, attributes, "Attribute");

  stream.write(`\n/*  -- METRICS --  */`);
  buildUnionType(stream, metrics, "Metric");

  stream.write(`\n/*  -- SEGMENTS --  */`);
  buildUnionType(stream, segments, "Segment");

  stream.write(`\n\n/*  -- RESOURCE NAMES --  */`);
  buildUnionArray(stream, resourceNames, "resourceNames");

  stream.write(`\n\n/*  -- ENUM FIELDS --  */`);
  stream.write(`\nexport const enumFields = ${JSON.stringify(enumFields)}`);

  Object.entries(resourceConstructs).forEach((entry: [string, Resource]) => {
    const resourceName: string = capitaliseFirstLetter(toCamelCase(entry[0]));
    const resource: Resource = entry[1];

    stream.write(`\n\n/* --- Start of ${resourceName} --- */`);
    buildUnionType(stream, resource.attributes, `${resourceName}Field`);

    if (resource.metrics.length) {
      buildUnionType(stream, resource.metrics, `${resourceName}Metric`);
    }

    if (resource.segments.length) {
      buildUnionType(stream, resource.segments, `${resourceName}Segment`);
    }

    stream.write(`/* --- End of ${resourceName} --- */`);
  });

  stream.write(`}`);

  stream.write(`\n\n/*  -- Field types (used in REST parsing) --  */`);
  stream.write(`\nexport const fieldDataTypes = new Map([ `);

  for (const field of fields) {
    if (field.data_type === "MESSAGE") {
      stream.write(`\n['${field.name}','${field.type_url}'], `);
    } else {
      stream.write(`\n['${field.name}','${field.data_type}'], `);
    }
  }

  const messageFieldsWritten = new Set<string>();

  /*
    For every field that is a message
    - Find it in $discovery
    - for each field in the message:
      - if it's a message, add to the map as a ref and recurse
      - if it's a primitive, add it to the map

      ideal:

      export const fieldDataTypes = new Map([
        ['ad_grpup_ad.ad.policy_info','google.ads.googleads.v14.resources.PolicyInfo'],
        ['google.ads.googleads.v14.resources.PolicyInfo.blah','NUMBER'],
        ['google.ads.googleads.v14.resources.PolicyInfo.entryMessages','google.ads.googleads.v14.resources.entryMessages'],
        ['google.ads.googleads.v14.resources.entryMessages.msg','STRING'],
      ])

  */

  for (const field of fields.filter((field) => field.data_type === "MESSAGE")) {
    // stream.write(`\n\n/*  -- MESSAGE TYPE (used in REST parsing) --  */`);
    // stream.write(`\nexport const fieldDataTypes = new Map([ `);

    // console.log(field);

    // 'google.ads.googleads.v14.resources.Campaign.CategoryBid',

    const splitTypeUrl =
      field.type_url?.split(".").filter((i) => i !== "com") ?? [];
    // console.log(splitTypeUrl.length);
    let type = "";
    if (splitTypeUrl.length === 6) {
      const endField = splitTypeUrl.pop() ?? "";
      const precategory = "";
      const category = splitTypeUrl.pop() ?? "";

      type =
        "GoogleAdsGoogleadsV14" +
        capitaliseFirstLetter(category) +
        "_" +
        precategory +
        "_" +
        endField;
    } else if (splitTypeUrl.length === 7) {
      //      'google.ads.googleads.v14.resources.Campaign.CategoryBid',
      //  'com.google.ads.googleads.v14.resources.AccessibleBiddingStrategy',
      const endField = splitTypeUrl.pop() ?? "";
      const precategory = splitTypeUrl.pop() ?? "";
      const category = splitTypeUrl.pop() ?? "";

      type =
        "GoogleAdsGoogleadsV14" +
        capitaliseFirstLetter(category) +
        "_" +
        precategory +
        "_" +
        endField;
    } else if (splitTypeUrl.length === 8) {
      const endField = splitTypeUrl.pop() ?? "";
      const precategory = splitTypeUrl.pop() ?? "";
      const category = splitTypeUrl.pop() ?? "";
      type =
        "GoogleAdsGoogleadsV14" +
        capitaliseFirstLetter(category) +
        "_" +
        precategory +
        "_" +
        endField;
    }

    // const category =
    //   field.type_url?.split(".")[field.type_url?.split(".").length - 2] ??
    //   "UNKNOWN";

    // const type =
    //   "GoogleAdsGoogleadsV15" +
    //   capitaliseFirstLetter(category) +
    //   "__" +
    //   field.type_url?.split(".").pop();

    // console.log({ type });
    if (!type) {
      console.warn("No type found for ", field);
    } else {
      const paths = extractPaths(type as string);
      // console.log({ paths });
      for (const pathKey in paths) {
        if (messageFieldsWritten.has(pathKey)) {
          continue;
        }
        stream.write(
          `\n['${field.type_url}.${pathKey}','${paths[pathKey]}'], `
        );
        messageFieldsWritten.add(pathKey);
      }
    }
  }

  stream.write(`\n])`);
  stream.end();
}

function buildUnionType(
  stream: fs.WriteStream,
  fields: string[],
  name: string
) {
  stream.write(`\nexport type ${name} = \n`);

  fields.forEach((field: string) => {
    stream.write(`| "${field}"\n`);
  });

  stream.write(`\nexport type ${name}s = Array<${name}>\n`);
}

function buildUnionArray(
  stream: fs.WriteStream,
  fields: string[],
  name: string
) {
  stream.write(`\nexport const ${name} = [\n`);

  fields.forEach((field: string) => {
    stream.write(`"${field}",\n`);
  });

  stream.write(`]\n`);
}

export function isResource(field: resources.GoogleAdsField): boolean {
  return (
    enums.GoogleAdsFieldCategory[field.category] ===
    enums.GoogleAdsFieldCategory.RESOURCE
  );
}

export function isAttribute(field: resources.GoogleAdsField): boolean {
  return (
    enums.GoogleAdsFieldCategory[field.category] ===
    enums.GoogleAdsFieldCategory.ATTRIBUTE
  );
}

export function isMetric(field: resources.GoogleAdsField): boolean {
  return (
    enums.GoogleAdsFieldCategory[field.category] ===
    enums.GoogleAdsFieldCategory.METRIC
  );
}

export function isSegment(field: resources.GoogleAdsField): boolean {
  return (
    enums.GoogleAdsFieldCategory[field.category] ===
    enums.GoogleAdsFieldCategory.SEGMENT
  );
}

const resourceNameRegex = new RegExp(/^.*\.resource_name$/g);

export function isResourceName(field: resources.GoogleAdsField): boolean {
  if (isDefinedAndNotNull(field.name)) {
    return resourceNameRegex.test(field.name as string);
  } else {
    return false;
  }
}

export function hasEnumDataType(field: resources.GoogleAdsField): boolean {
  return field.data_type === "ENUM";
}

export function getEnumName(field: resources.GoogleAdsField): string {
  if (isDefinedAndNotNull(field.type_url)) {
    return (field.type_url as string).replace(/.*(?=\.)\./g, "");
  } else {
    return "FIELD_HAS_NO_ENUM_NAME";
  }
}

function isDefinedAndNotNull(input: string | null | undefined): boolean {
  return typeof input !== "undefined" && input !== null;
}
