/**
 * JSON Rest parsing
 */

import mapObject from "map-obj";
// import decamelize from "decamelize";

import { enums, fields, fieldDataTypes } from "./protos";
import { capitaliseFirstLetter, toCamelCase, toSnakeCase } from "./utils";

const decamelizeCache = new Map<string, string>();

const isObject = (value: unknown) =>
  typeof value === "object" && value !== null;

export const decamelizeKeys = (input: any) => {
  if (!isObject(input)) {
    return input;
  }

  const makeMapper = (parentPath?: string) => (key: string, value: any) => {
    key = cachedDecamelize(key);

    if (isObject(value)) {
      const path = parentPath === undefined ? key : `${parentPath}.${key}`;

      // @ts-ignore
      value = mapObject(value, makeMapper(path));
    } else {
      value = cachedValueParser(key, parentPath, value);
    }

    return [key, value];
  };

  // @ts-ignore
  return mapObject(input, makeMapper());
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

  const fullPath = (
    parentPath ? `${parentPath}.${key}` : key
  ) as keyof typeof fields.enumFields;

  if (parentPath === "errors.error_code") {
    // @ts-expect-error typescript doesn't like accessing items in a namespace with a string
    return enums[capitaliseFirstLetter(toCamelCase(key))][value];
  }

  const dataType = fieldDataTypes.get(fullPath);

  if (dataType === "INT64") {
    newValue = Number(value);
  } else if (dataType === "ENUM") {
    // @ts-expect-error typescript doesn't like accessing items in a namespace with a string
    newValue = enums[fields.enumFields[fullPath]][value]; // e.g. enums['CampaignStatus'][ENABLED] = "2"
  }

  return newValue;
};
