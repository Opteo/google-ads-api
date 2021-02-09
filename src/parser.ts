import long from "long";
import { ReportOptions } from "./types";
import { services } from "./protos";
import { resourceNames, Resource } from "./protos/autogen/fields";

export const ParsingError = {
  NO_REPORT_OPTIONS_OR_GAQL_QUERY:
    "Must provided reportOptions or gaqlString to parse results.",
  NO_FIELDS_IN_GAQL_QUERY:
    "GAQL Query must contain at least one attribute, metric or segment.",
  NO_FIELDS_IN_REPORT_OPTIONS:
    "Report Options must contain at least one attribute, metric or segment.",
};

/** 
  @description Parse the results of a query
  @example
  const parsedResults = parse({ results, reportOptions })
  const parsedResults = parse({ results, gaqlString })
*/
export function parse({
  results,
  reportOptions,
  gaqlString,
}: {
  results: services.IGoogleAdsRow[];
  reportOptions?: ReportOptions;
  gaqlString?: string;
}): services.IGoogleAdsRow[] {
  if (results.length === 0) {
    return results;
  }

  if (
    typeof reportOptions === "undefined" &&
    typeof gaqlString === "undefined"
  ) {
    throw new Error(ParsingError.NO_REPORT_OPTIONS_OR_GAQL_QUERY);
  }

  const queryFields = reportOptions
    ? getReportOptionFields(reportOptions)
    : getGAQLFields(gaqlString!);

  const fields = [...queryFields, ...resourceNames];

  return parseRows(results, fields);
}

// This function assumes that a gaql query is of the format "select * * * from * ...".
// Queries that are no in this format should have thrown an error when called.
export function getGAQLFields(gaqlString: string): string[] {
  const fields = gaqlString
    .toLowerCase()
    .replace(/(^select)|(from.*)|(\s+)/g, "")
    .split(",")
    .filter((field) => field.length > 0);

  if (!fields.length) {
    throw new Error(ParsingError.NO_FIELDS_IN_GAQL_QUERY);
  }

  return fields;
}

export function getReportOptionFields(reportOptions: ReportOptions): string[] {
  const fields = [
    ...(reportOptions.attributes || []),
    ...(reportOptions.metrics || []),
    ...(reportOptions.segments || []),
  ];

  if (!fields.length) {
    throw new Error(ParsingError.NO_FIELDS_IN_REPORT_OPTIONS);
  }

  return fields;
}

export function parseRows(
  rows: services.IGoogleAdsRow[],
  fields: string[]
): services.IGoogleAdsRow[] {
  const newRows = [];
  for (let r = 0; r < rows.length; r++) {
    const newRow: services.IGoogleAdsRow = {};
    const originalRow: services.IGoogleAdsRow = services.GoogleAdsRow.fromObject(
      rows[r]
    );

    for (let f = 0; f < fields.length; f++) {
      const field = fields[f];
      const split = field.split(".");

      // @ts-expect-error These are the best we can do for these types
      const [parent, ...children]: [
        Resource,
        ...(keyof services.IGoogleAdsRow)[]
      ] = split;

      // Ignore null fields (unspecified resource names)
      if (!originalRow[parent]) {
        continue;
      }

      (newRow as any)[parent] = parseNestedValues(
        (newRow as any)[parent],
        originalRow[parent],
        parent,
        children
      );
    }
    newRows.push(newRow);
  }

  return newRows;
}

function parseNestedValues(
  row: services.IGoogleAdsRow,
  data: any,
  field: string,
  paths: string[]
) {
  const [parentField, ...childFields] = paths;
  if (!row) row = {};
  if (childFields.length === 0) {
    const rawVal = data[parentField];
    const parsedVal = long.isLong(rawVal)
      ? new long(rawVal.low, rawVal.high, rawVal.unsigned).toNumber()
      : rawVal;

    row[parentField as Resource] = parsedVal;
    return row;
  }

  (row as any)[parentField] = parseNestedValues(
    (row as any)[parentField],
    data[parentField],
    parentField,
    childFields
  );
  return row;
}
