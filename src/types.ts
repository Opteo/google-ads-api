import { services, fields } from "./protos";

export interface CustomerOptions {
  customer_id: string;
  refresh_token: string;
  login_customer_id?: string;
  linked_customer_id?: string;
}

export type CustomerCredentials = Pick<
  CustomerOptions,
  "customer_id" | "login_customer_id" | "linked_customer_id"
>;

export interface ReportOptions extends RequestOptions {
  entity: fields.Resource;
  attributes?: fields.Attributes;
  metrics?: fields.Metrics;
  segments?: fields.Segments;
  constraints?: Constraints;
  parameters?: string;
  limit?: number;
  order?: Order[];
  /**
   * @deprecated `order_by` will be removed in a future version. Migration to the `order` report option key is advised.
   */
  order_by?: ConstraintKey | ConstraintKey[];
  /**
   * @deprecated `sort_order` will be removed in a future version. Migration to the `order` report option key is advised.
   */
  sort_order?: SortOrder;
  date_constant?: DateConstant;
  from_date?: string;
  to_date?: string;
}

export type DateConstant =
  | "TODAY"
  | "YESTERDAY"
  | "LAST_7_DAYS"
  | "LAST_BUSINESS_WEEK"
  | "THIS_MONTH"
  | "LAST_MONTH"
  | "LAST_14_DAYS"
  | "LAST_30_DAYS"
  | "THIS_WEEK_SUN_TODAY"
  | "THIS_WEEK_MON_TODAY"
  | "LAST_WEEK_SUN_SAT"
  | "LAST_WEEK_MON_SUN";

export const dateConstants: DateConstant[] = [
  "TODAY",
  "YESTERDAY",
  "LAST_7_DAYS",
  "LAST_BUSINESS_WEEK",
  "THIS_MONTH",
  "LAST_MONTH",
  "LAST_14_DAYS",
  "LAST_30_DAYS",
  "THIS_WEEK_SUN_TODAY",
  "THIS_WEEK_MON_TODAY",
  "LAST_WEEK_SUN_SAT",
  "LAST_WEEK_MON_SUN",
];

export type SortOrder = "ASC" | "DESC";

export interface Order {
  field: ConstraintKey;
  sort_order?: SortOrder;
}

export type ConstraintKey = fields.Attribute | fields.Metric | fields.Segment;
export type ConstraintValue = number | string | boolean | (number | string)[];
export type ConstraintOperation =
  | "="
  | "!="
  | ">"
  | ">="
  | "<"
  | "<="
  | "IN"
  | "NOT IN"
  | "LIKE"
  | "NOT LIKE"
  | "CONTAINS ANY"
  | "CONTAINS ALL"
  | "CONTAINS NONE"
  | "IS NULL"
  | "IS NOT NULL"
  | "DURING"
  | "BETWEEN"
  | "REGEXP_MATCH"
  | "NOT REGEXP_MATCH";

export type ConstraintType1 = {
  key: ConstraintKey;
  op: ConstraintOperation;
  val: ConstraintValue;
};
export type ConstraintType2 = { [C in ConstraintKey]?: ConstraintValue };

export type Constraint = string | ConstraintType1 | ConstraintType2;
export type Constraints = Constraint[] | ConstraintType2;

// Common request options used for the report/query methods
export type RequestOptions = Omit<
  services.ISearchGoogleAdsRequest,
  "customer_id" | "query" | "search_settings"
> & {
  search_settings?: Omit<
    services.SearchGoogleAdsRequest["search_settings"],
    "return_total_results_count"
  >;
};

export type MutateOptions = Omit<
  services.IMutateGoogleAdsRequest,
  "customer_id" | "mutate_operations"
>;

export type MutateOperation<T> = {
  resource: T;
  entity: fields.Resource;
  operation?: "create" | "update" | "remove";
  exempt_policy_violation_keys?: services.AdGroupCriterionOperation["exempt_policy_violation_keys"];
} & Partial<Omit<T, "toJSON">>;

export type PageToken = services.ISearchGoogleAdsResponse["next_page_token"];
