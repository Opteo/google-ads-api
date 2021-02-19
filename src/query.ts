import {
  ReportOptions,
  RequestOptions,
  ConstraintType1,
  Constraint,
  ConstraintKey,
  ConstraintValue,
  ConstraintOperation,
  SortOrder,
} from "./types";
import { enums, fields } from "./protos";

enum QueryKeywords {
  SELECT = "SELECT",
  FROM = "FROM",
  WHERE = "WHERE",
  ORDER_BY = "ORDER BY",
  LIMIT = "LIMIT",
  AND = "AND",
  OR = "OR",
}

type ParsedConstraintValue = string | number | boolean;
type ConstraintString = `${string} ${ConstraintOperation} ${ParsedConstraintValue}`;

type SelectClause = `${QueryKeywords.SELECT} ${string}`;
type FromClause = ` ${QueryKeywords.FROM} ${fields.Resource}`;
type WhereClause = ` ${QueryKeywords.WHERE} ${string}` | ``;
type OrderClause = ` ${QueryKeywords.ORDER_BY} ${string} ${SortOrder}` | ``;
type LimitClause = ` ${QueryKeywords.LIMIT} ${number}` | ``;

type Query = `${SelectClause}${FromClause}${WhereClause}${OrderClause}${LimitClause}`;

export const QueryError = {
  INVALID_CONSTRAINTS_FORMAT:
    "Constraints must be an array of objects or a singular object.",
  INVALID_CONSTRAINT_KEY: "A constraint key must have a string value.",
  INVALID_CONSTRAINT_VALUE: (
    key: ConstraintKey,
    val: ConstraintValue
  ): string =>
    // @ts-ignore
    `The value of the constraint ${key} must be a string, number, boolean, or an array of these types. Here, typeof ${key} is ${typeof val}.`,
  INVALID_CONSTRAINT_OBJECT_FORMAT:
    "Must specify { key, op, val } or { key: value } when using object-style constraints.",
  INVALID_DATE_CONSTANT_TYPE: (
    dateConstant: ReportOptions["date_constant"]
  ): string =>
    `Date constant must be a string. Here, typeof date constant is ${typeof dateConstant}`,
  INVALID_FROM_DATE_TYPE: (fromDate: ReportOptions["from_date"]): string =>
    `From date must be a string. Here, typeof from date is ${typeof fromDate}`,
  INVALID_TO_DATE_TYPE: (toDate: ReportOptions["to_date"]): string =>
    `To date must be a string. Here, typeof to date is ${typeof toDate}`,
  INVALID_LIMIT: "Limit must be a positive integer.",
  INVALID_ORDERLY: "OrderBy arrays must only contain strings.",
  INVALID_ORDERBY: "OrderBy must be a string or an array of strings.",
  INVALID_SORT_ORDER: `Sort order must be "ASC" or "DESC".`,
  MISSING_FIELDS:
    'Must specify at least one field in ("attributes","metrics","segments").',
  MISSING_FROM_DATE: 'Expected start date range is missing - "from_date".',
  UNDEFINED_ENTITY: "The entity of the query must be defined.",
};

export function buildSelectClause(
  attributes: ReportOptions["attributes"],
  metrics: ReportOptions["metrics"],
  segments: ReportOptions["segments"]
): SelectClause {
  if (!attributes?.length && !metrics?.length && !segments?.length) {
    throw new Error(QueryError.MISSING_FIELDS);
  }

  const selections: string = [
    ...(attributes || []),
    ...(metrics || []),
    ...(segments || []),
  ].join(", ");

  return `${QueryKeywords.SELECT} ${selections}` as const;
}

export function buildFromClause(entity: ReportOptions["entity"]): FromClause {
  if (typeof entity === "undefined") {
    throw new Error(QueryError.UNDEFINED_ENTITY);
  }

  return ` ${QueryKeywords.FROM} ${entity}` as const;
}

export function validateConstraintKeyAndValue(
  key: ConstraintKey,
  val: ConstraintValue
): {
  op: ConstraintOperation;
  val: ParsedConstraintValue;
} {
  if (typeof val === "number" || typeof val === "boolean") {
    return { op: "=", val: convertNumericEnumToString(key, val) };
  }

  if (typeof val === "string") {
    return {
      op: "=",
      val: new RegExp(/^'.*'$|^".*"$/g).test(val) ? val : `"${val}"`,
    }; // must start and end in either single or double quotation marks
  }

  if (Array.isArray(val)) {
    const stringifiedValue = val
      .map((v: number | string) => {
        if (typeof v === "string") {
          return `"${v}"`;
        } else {
          return convertNumericEnumToString(key, v);
        }
      })
      .join(`, `);

    return { op: "IN", val: `(${stringifiedValue})` };
  }

  throw new Error(QueryError.INVALID_CONSTRAINT_VALUE(key, val));
}

export function convertNumericEnumToString(
  key: ConstraintKey,
  val: ParsedConstraintValue
): ParsedConstraintValue {
  // @ts-expect-error key does not always match an enum field
  if (enumFields[key] && typeof val === "number") {
    // @ts-expect-error typescript doesn't like accessing items in a namespace with a string
    const enumStringValue = enums[enumFields[key]][val]; // e.g. enums['CampaignStatus'][2] = "ENABLED"

    if (enumStringValue) {
      return `"${enumStringValue}"`;
    }
  }

  return val;
}

export function extractConstraintConditions(
  constraints: ReportOptions["constraints"]
): ConstraintString[] {
  if (typeof constraints === "undefined") {
    return [];
  } else if (Array.isArray(constraints)) {
    return constraints.map((con: Constraint) => {
      if (typeof con === "object" && !Array.isArray(con) && con !== null) {
        // @ts-ignore
        if (con.key && con.op && typeof con.val !== "undefined") {
          const { key, op, val }: ConstraintType1 = con as ConstraintType1;

          if (typeof key !== "string") {
            throw new Error(QueryError.INVALID_CONSTRAINT_KEY);
          }
          const validatedValue = validateConstraintKeyAndValue(key, val);
          // @ts-ignore
          return `${key} ${op} ${validatedValue.val}` as const;
        } else if (Object.keys(con).length === 1) {
          const [[key, val]] = Object.entries(con);

          const validatedValue = validateConstraintKeyAndValue(
            key as ConstraintKey,
            val as ConstraintValue
          );

          return `${key} ${validatedValue.op} ${validatedValue.val}` as const;
        } else {
          throw new Error(QueryError.INVALID_CONSTRAINT_OBJECT_FORMAT);
        }
      } else if (typeof con === "string") {
        return con;
      } else {
        throw new Error(QueryError.INVALID_CONSTRAINT_OBJECT_FORMAT);
      }
    });
  } else if (typeof constraints === "object" && constraints !== null) {
    return Object.entries(constraints).map(([key, val]) => {
      const validatedValue = validateConstraintKeyAndValue(
        key as ConstraintKey,
        val as ConstraintValue
      );

      return `${key} ${validatedValue.op} ${validatedValue.val}` as const;
    });
  } else {
    throw new Error(QueryError.INVALID_CONSTRAINTS_FORMAT);
  }
}

export function extractDateConstantConditions(
  dateConstant: ReportOptions["date_constant"]
): ConstraintString[] {
  if (typeof dateConstant === "undefined") {
    return [];
  } else if (typeof dateConstant !== "string") {
    throw new Error(QueryError.INVALID_DATE_CONSTANT_TYPE(dateConstant));
  }

  return [`segments.date DURING ${dateConstant}` as const];
}

export function extractDateConditions(
  fromDate: ReportOptions["from_date"],
  toDate: ReportOptions["to_date"]
): ConstraintString[] {
  if (typeof fromDate === "undefined" && typeof toDate === "undefined") {
    return [];
  }

  if (typeof fromDate === "undefined" && typeof toDate !== "undefined") {
    throw new Error(QueryError.MISSING_FROM_DATE);
  }

  if (typeof fromDate !== "undefined" && typeof toDate === "undefined") {
    const d = new Date();
    toDate = `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${(
      "0" + d.getDate()
    ).slice(-2)}`;
  }

  if (typeof fromDate !== "string") {
    throw new Error(QueryError.INVALID_FROM_DATE_TYPE(fromDate));
  }

  if (typeof toDate !== "string") {
    throw new Error(QueryError.INVALID_TO_DATE_TYPE(toDate));
  }

  return [
    `segments.date >= "${fromDate}"`,
    `segments.date <= "${toDate}"`,
  ] as ConstraintString[];
}

export function buildWhereClause(
  constraints: ReportOptions["constraints"],
  dateConstant: ReportOptions["date_constant"],
  fromDate: ReportOptions["from_date"],
  toDate: ReportOptions["to_date"]
): WhereClause {
  const constraintClauses = extractConstraintConditions(constraints);
  const dateConstantClauses = extractDateConstantConditions(dateConstant);
  const dateClauses = extractDateConditions(fromDate, toDate);

  const whereClauses: string = [
    ...constraintClauses,
    ...dateConstantClauses,
    ...dateClauses,
  ].join(` ${QueryKeywords.AND} `);

  return whereClauses.length
    ? (` ${QueryKeywords.WHERE} ${whereClauses}` as const)
    : ``;
}

export function buildLimitClause(limit: ReportOptions["limit"]): LimitClause {
  if (typeof limit === "undefined") {
    return ``;
  }

  if (typeof limit !== "number" || limit < 1 || !Number.isInteger(limit)) {
    throw new Error(QueryError.INVALID_LIMIT);
  }

  return ` ${QueryKeywords.LIMIT} ${limit}` as const;
}

export function completeOrderly(
  orderly: string,
  entity: ReportOptions["entity"]
): string {
  if (!orderly.length) {
    throw new Error(QueryError.INVALID_ORDERLY);
  } else if (new RegExp(/^.[^.]+\..[^.]+$/g).test(orderly)) {
    // text before and after a full stop (e.g. campaign.resource_name)
    return orderly;
  } else if (new RegExp(/^.[^.]+$/g).test(orderly)) {
    // text without a full stop (e.g. resource_name)
    return `${entity}.${orderly}`;
  } else {
    throw new Error(QueryError.INVALID_ORDERLY);
  }
}

export function buildOrderClause(
  orderBy: ReportOptions["order_by"],
  sortOrder: ReportOptions["sort_order"],
  entity: ReportOptions["entity"]
): OrderClause {
  if (typeof orderBy === "undefined") {
    return ``;
  } else if (typeof sortOrder === "undefined") {
    sortOrder = "DESC";
  } else if (sortOrder !== "ASC" && sortOrder !== "DESC") {
    throw new Error(QueryError.INVALID_SORT_ORDER);
  }

  if (Array.isArray(orderBy)) {
    const orders: string = orderBy
      .map((orderly) => {
        if (typeof orderly !== "string") {
          throw new Error(QueryError.INVALID_ORDERLY);
        } else {
          return completeOrderly(orderly, entity);
        }
      })
      .join(", ");

    return ` ${QueryKeywords.ORDER_BY} ${orders} ${sortOrder}` as const;
  } else if (typeof orderBy === "string") {
    return ` ${QueryKeywords.ORDER_BY} ${completeOrderly(
      orderBy,
      entity
    )} ${sortOrder}` as const;
  } else {
    throw new Error(QueryError.INVALID_ORDERBY);
  }
}

export function buildRequestOptions(
  reportOptions: ReportOptions
): RequestOptions {
  const {
    page_size,
    page_token,
    validate_only,
    return_total_results_count,
    summary_row_setting,
  } = reportOptions;

  return {
    page_size,
    page_token,
    validate_only,
    return_total_results_count,
    summary_row_setting,
  };
}

export function buildQuery(
  reportOptions: ReportOptions
): {
  gaqlQuery: Query;
  requestOptions: RequestOptions;
} {
  const SELECT: SelectClause = buildSelectClause(
    reportOptions.attributes,
    reportOptions.metrics,
    reportOptions.segments
  );
  const FROM: FromClause = buildFromClause(reportOptions.entity);
  const WHERE: WhereClause = buildWhereClause(
    reportOptions.constraints,
    reportOptions.date_constant,
    reportOptions.from_date,
    reportOptions.to_date
  );
  const LIMIT: LimitClause = buildLimitClause(reportOptions.limit);
  const ORDER: OrderClause = buildOrderClause(
    reportOptions.order_by,
    reportOptions.sort_order,
    reportOptions.entity
  );
  const requestOptions: RequestOptions = buildRequestOptions(reportOptions);

  return {
    gaqlQuery: `${SELECT}${FROM}${WHERE}${ORDER}${LIMIT}`,
    requestOptions,
  } as const;
}
