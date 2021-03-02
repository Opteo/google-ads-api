import { protobuf } from "./protos";

/**
 * @param micros Money value in micros format
 * @description Converts a micro amount to a normalised value
 * @example
 * const cost = fromMicros(campaign.metrics.costMicros)
 */
export function fromMicros(micros: number): number {
  return micros / 1000000;
}

/**
 * @param value Money value in decimal format
 * @description Converts a number to micro format
 * @example
 * const costMicros = toMicros(12.5) // 12,500,000
 */
export function toMicros(value: number): number {
  return value * 1000000;
}

/**
 * @param query String gaql query
 * @description Normalises a query by replacing multiple whitespace with single whitespace
 * @example
 * const gaqlQuery =
 *  `SELECT campaign.name
 *  FROM campaign
 *  LIMIT 10`
 * const normalisedQuery = normaliseQuery(gaqlQuery) // "SELECT campaign.name FROM campaign LIMIT 10"
 */
export function normaliseQuery(query: string): string {
  return `${query.replace(/\s{2,}/g, " ")}`;
}

/**
 * @param str
 * @description Capitalises the first letter of a string
 * @example
 * const capitalisedString = capitaliseFirstLetter("adGroupCriterionSimulation") // "AdGroupCriterionSimulation"
 */
export function capitaliseFirstLetter<T extends string>(
  str: string
): Capitalize<T> {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
}

/**
 * @param str
 * @description Converts a string to a camel case string. Works on space case, snake case and title case strings.
 * @example
 * const camelCaseString = toCamelCase("ad_group_criterion_simulation") // "adGroupCriterionSimulation"
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/\s+/g, "_") // convert spaces to underscores
    .replace(/(_)([A-Za-z])/g, (pattern) => pattern[1].toUpperCase()) // replace "_x" patterns with "X"
    .replace(/^([A-Z])/g, (pattern) => pattern.toLowerCase()); // capitalises the first letter of the string
}

/**
 * @param str
 * @description Converts a string to a snake case string. Works on space case, camel case and title case strings.
 * @example
 * const snakeCaseString = toSnakeCase("adGroupCriterionSimulation") // "ad_group_criterion_simulation"
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/\s+/g, "_") // convert spaces to underscores
    .replace(/(?<!(^|_))([A-Z])/g, (pattern) => "_" + pattern) // places an underscore before any capital chars, unless there is already an underscore or it is the first char of the string
    .toLowerCase();
}

export function recursiveFieldMaskSearch(data: Record<string, any>): string[] {
  const paths: string[] = [];
  for (const key of Object.keys(data)) {
    if (key === "resourceName") {
      continue;
    }
    const fieldKey = toSnakeCase(key);
    const value = data[key];
    if (typeof value === "object" && !Array.isArray(value)) {
      const children = recursiveFieldMaskSearch(value);
      for (const child of children) {
        paths.push(`${fieldKey}.${child}`);
      }
      continue;
    }
    paths.push(fieldKey);
  }
  return paths;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getFieldMask(data: Record<string, any>): protobuf.FieldMask {
  const paths = recursiveFieldMaskSearch(data);
  return new protobuf.FieldMask({
    paths,
  });
}

export function createNextChunkArrivedPromise(): {
  newPromise: Promise<unknown>;
  resolve: () => void;
  reject: (error: Error) => void;
} {
  let resolvePromise = (): void => {
    return;
  };

  let rejectPromise = (error: Error): void => {
    throw error;
  };

  const newPromise = new Promise((resolve, reject) => {
    // @ts-ignore
    resolvePromise = resolve;
    rejectPromise = reject;
  });

  return { newPromise, resolve: resolvePromise, reject: rejectPromise };
}
