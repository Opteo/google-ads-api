import { parse } from "circ-json";

import { toSnakeCase } from "./utils";
import {
  fieldDataTypes as fieldDataTypesString,
  fields,
} from "./protos/autogen/fields";
import { enums } from "./protos/autogen/enums";

const fieldDataTypes = parse(fieldDataTypesString);

const decamelizeCache = new Map<string, string>();
const fieldTypeCache = new Map<string, string>();

const isObject = (value: unknown) =>
  typeof value === "object" && value !== null;

export const decamelizeKeys = (input: any) => {
  if (!isObject(input)) {
    return input;
  }

  return transform(input);

  function transform(value: any, parentPath?: string): any {
    if (!isObject(value)) {
      return value;
    }

    if (Array.isArray(value)) {
      const length = value.length;
      const result = new Array(length);

      for (let i = 0; i < length; i += 1) {
        const item = value[i];
        result[i] = isObject(item) ? transformObject(item, parentPath) : item;
      }

      return result;
    }

    return transformObject(value, parentPath);
  }

  function transformObject(obj: Record<string, any>, parentPath?: string) {
    const output: Record<string, any> = {};

    for (const key of Object.keys(obj)) {
      const rawValue = obj[key];
      const newKey = cachedDecamelize(key);

      if (isObject(rawValue)) {
        const nextParentPath =
          parentPath === undefined ? newKey : `${parentPath}.${newKey}`;
        output[newKey] = transform(rawValue, nextParentPath);
      } else {
        output[newKey] = cachedValueParser(newKey, parentPath, rawValue);
      }
    }

    return output;
  }
};

const cachedDecamelize = (key: string) => {
  const cachedResult = decamelizeCache.get(key) as string | undefined;
  if (cachedResult) {
    return cachedResult;
  }

  const newKey = toSnakeCase(key);

  decamelizeCache.set(key, newKey);

  return newKey;
};

const cachedValueParser = (
  key: string,
  parentPath: string | undefined,
  value: any
) => {
  let newValue = value;

  const fullPath = parentPath ? `${parentPath}.${key}` : key;

  const megaDataType = getTypeFromPath(fullPath);

  if (megaDataType === undefined && !fullPath.startsWith("@")) {
    console.warn(`No data type found for ${fullPath}`);
  } else if (typeof megaDataType === "object") {
    // Special handling for FieldMask types - REST API returns them as comma-separated strings
    if (megaDataType.paths === "STRING" && typeof value === "string") {
      // This is a FieldMask field, convert the comma-separated string to the expected format
      // Also convert each path from camelCase to snake_case
      newValue = {
        paths: value.split(",").map((p) => {
          // Handle nested paths like "ipBlock.ipAddress"
          return p
            .trim()
            .split(".")
            .map((segment) => toSnakeCase(segment))
            .join(".");
        }),
      };
    } else {
      // Normal enum handling
      newValue = megaDataType[value];
    }
  } else if (megaDataType === "INT64") {
    newValue = Number(value);
  } else if (megaDataType === "ENUM") {
    // Some enums aren't embedded in megaDataType, so we need this fallback.
    // @ts-expect-error typescript doesn't like accessing items in a namespace with a string
    newValue = enums[fields.enumFields[fullPath]][value]; // e.g. enums['CampaignStatus'][ENABLED] = "2"
  }

  return newValue;
};

const getTypeFromPath = (path: string) => {
  const cachedResult = fieldTypeCache.get(path) as string | undefined;
  if (cachedResult) {
    return cachedResult;
  }

  const t = get(fieldDataTypes, path);

  fieldTypeCache.set(path, t);

  return t;
};

// Copied from youmightnotneed.com
const get = (obj: any, path: string) => {
  if (!path) return undefined;

  // Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
  // Regex explained: https://regexr.com/58j0k
  const pathArray = path.match(/([^[.\]])+/g);

  if (!pathArray) return undefined;

  // Find value
  return pathArray.reduce((prevObj, key) => prevObj && prevObj[key], obj);
};
