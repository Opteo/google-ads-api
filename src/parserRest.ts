/**
 * JSON Rest parsing
 */

import mapObject from "map-obj";
import decamelize from "decamelize";

import { enums, fields, fieldDataTypes } from "./protos";

const cache = new Map<string, string>();

const isObject = (value: unknown) =>
  typeof value === "object" && value !== null;

const decamelcaseConvert = (input: any) => {
  if (!isObject(input)) {
    return input;
  }

  //   const stopPathsSet = new Set(stopPaths);

  const makeMapper = (parentPath?: string) => (key: string, value: any) => {
    if (isObject(value)) {
      const path = parentPath === undefined ? key : `${parentPath}.${key}`;

      // @ts-ignore
      value = mapObject(value, makeMapper(path));
    }

    key = cachedDecamelize(key);
    value = cachedValueParser(key, parentPath, value);

    return [key, value];
  };

  // @ts-ignore
  return mapObject(input, makeMapper(undefined));
};

const cachedDecamelize = (key: string) => {
  if (cache.has(key)) {
    return cache.get(key) as string;
  }

  const newKey = decamelize(key);

  cache.set(key, newKey);

  return newKey;
};

const cachedValueParser = (
  key: string,
  parentPath: string | undefined,
  value: any
) => {
  let newValue = value;

  const fullPath = cachedDecamelize(
    parentPath ? `${parentPath}.${key}` : key
  ) as keyof typeof fields.enumFields;

  const dataType = fieldDataTypes.get(fullPath);

  if (dataType === "INT64") {
    newValue = Number(value);
  }

  if (dataType === "ENUM") {
    // @ts-expect-error typescript doesn't like accessing items in a namespace with a string
    newValue = enums[fields.enumFields[fullPath]][value]; // e.g. enums['CampaignStatus'][ENABLED] = "2"
  }

  return newValue;
};

export const decamelizeKeys = (input: Record<string, any>) => {
  return decamelcaseConvert(input);
};
