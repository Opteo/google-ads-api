import { ReportOptions, SortOrder, ConstraintKey, Constraint } from "./types";
import { normaliseQuery } from "./utils";
import { enums } from "./protos";

import {
  QueryError,
  buildSelectClause,
  buildFromClause,
  validateConstraintOpAndValue,
  extractConstraintConditions,
  extractDateConstantConditions,
  extractDateConditions,
  buildWhereClause,
  buildLimitClause,
  completeOrderly,
  buildOrderClause,
  buildRequestOptions,
  buildQuery,
} from "./query";

const options: ReportOptions = {
  entity: "ad_group",
  attributes: ["ad_group.name", "ad_group.id"],
  metrics: ["metrics.impressions", "metrics.cost_micros"],
  segments: ["segments.date"],
  constraints: [
    {
      key: "ad_group.status",
      op: "=",
      val: enums.AdGroupStatus.PAUSED,
    },
    {
      "campaign.advertising_channel_type": enums.AdvertisingChannelType.SEARCH,
    },
    { key: "metrics.clicks", op: ">", val: 10 },
  ],
  date_constant: "LAST_BUSINESS_WEEK",
  from_date: "2020-01-01",
  to_date: "2020-03-01",
  order_by: "metrics.impressions",
  sort_order: "ASC",
  limit: 10,
  page_size: 5,
  page_token: "A1B2C3D4",
  validate_only: false,
  return_total_results_count: false,
  summary_row_setting: "NO_SUMMARY_ROW",
};

describe("buildSelectClause", () => {
  it("throws if attributes, metrics and segments are undefined", () => {
    expect(() =>
      buildSelectClause(undefined, undefined, undefined)
    ).toThrowError(QueryError.MISSING_FIELDS);
  });

  it("throws if attributes, metrics and segments are empty", () => {
    expect(() => buildSelectClause([], [], [])).toThrowError(
      QueryError.MISSING_FIELDS
    );
  });

  it("correctly parses attributes, metrics and segments", () => {
    const selectClause = buildSelectClause(
      options.attributes,
      options.metrics,
      options.segments
    );
    expect(selectClause).toEqual(
      `SELECT ad_group.name, ad_group.id, metrics.impressions, metrics.cost_micros, segments.date`
    );
  });

  it("parses any combination of attributes, metrics and segments", () => {
    expect(() => {
      buildSelectClause(options.attributes, undefined, undefined);
      buildSelectClause(undefined, options.metrics, undefined);
      buildSelectClause(undefined, undefined, options.segments);
      buildSelectClause(options.attributes, options.metrics, undefined);
      buildSelectClause(options.attributes, undefined, options.segments);
      buildSelectClause(undefined, options.metrics, options.segments);
    }).not.toThrowError();
  });
});

describe("buildFromClause", () => {
  it("throws if the entity undefined", () => {
    // @ts-ignore
    expect(() => buildFromClause(undefined)).toThrowError(
      QueryError.UNDEFINED_ENTITY
    );
  });

  it("correctly parses entity", () => {
    const fromClause = buildFromClause(options.entity);
    expect(fromClause).toEqual(` FROM ad_group`);
  });
});

describe("validateConstraintOpAndValue", () => {
  const key = "test_key" as ConstraintKey;
  it("throws for bad constraint value types", () => {
    const constraintValues = [
      {},
      undefined,
      null,
      () => {
        return;
      },
    ];

    constraintValues.forEach((val) => {
      // @ts-ignore
      expect(() => validateConstraintOpAndValue(key, val)).toThrowError(
        // @ts-ignore
        QueryError.INVALID_CONSTRAINT_VALUE(key, val)
      );
    });
  });

  it("does not throw for an empty string val", () => {
    expect(() => validateConstraintOpAndValue(key, "")).not.toThrowError();

    const validatedValue = validateConstraintOpAndValue(key, "");
    expect(validatedValue.op).toEqual("=");
    expect(validatedValue.val).toEqual('""');
  });

  it("returns numbers and booleans as original", () => {
    const constraintValues = [15, true, -20, false];

    constraintValues.forEach((val) => {
      const validatedValue = validateConstraintOpAndValue(key, val);
      expect(validatedValue.op).toEqual("=");
      expect(validatedValue.val).toEqual(val);
    });
  });

  it("returns arrays as strings", () => {
    const val1 = [1, 2, 3, 4];
    const validatedValue1 = validateConstraintOpAndValue(key, val1);
    expect(validatedValue1.op).toEqual("IN");
    expect(validatedValue1.val).toEqual(`(1, 2, 3, 4)`);

    const val2 = ["a", "b", "c", "d"];
    const validatedValue2 = validateConstraintOpAndValue(key, val2);
    expect(validatedValue2.op).toEqual("IN");
    expect(validatedValue2.val).toEqual(`("a", "b", "c", "d")`);
  });

  it("adds quotation marks to string constraints that do not already have them", () => {
    const val = enums.AdvertisingChannelType.SEARCH;
    const validatedValue = validateConstraintOpAndValue(key, val);
    expect(validatedValue.op).toEqual("=");
    expect(validatedValue.val).toEqual(enums.AdvertisingChannelType.SEARCH);
  });

  it("returns string constraints that already have quotation marks", () => {
    const val1 = `'SEARCH'`;
    const validatedValue1 = validateConstraintOpAndValue(key, val1);
    expect(validatedValue1.op).toEqual("=");
    expect(validatedValue1.val).toEqual(`'SEARCH'`);

    const val2 = `"SEARCH"`;
    const validatedValue2 = validateConstraintOpAndValue(key, val2);
    expect(validatedValue2.op).toEqual("=");
    expect(validatedValue2.val).toEqual(`"SEARCH"`);
  });
});

describe("extractConstraintConditions", () => {
  it("returns an empty array if no constraints are provided", () => {
    const constraintConditions = extractConstraintConditions(undefined);
    expect(constraintConditions).toEqual([]);
  });

  it("throws if constraints are not an array or an object", () => {
    const constraints = [
      "constraint",
      2,
      null,
      () => {
        return;
      },
    ];

    constraints.forEach((constraint) => {
      // @ts-ignore
      expect(() => extractConstraintConditions(constraint)).toThrowError(
        QueryError.INVALID_CONSTRAINTS_FORMAT
      );
    });
  });

  it("throws if a constraint array item is not an object or string", () => {
    const constraints = [
      2,
      [],
      null,
      () => {
        return;
      },
    ];

    constraints.forEach((constraint) => {
      expect(() =>
        // @ts-ignore
        extractConstraintConditions([constraint])
      ).toThrowError(QueryError.INVALID_CONSTRAINT_OBJECT_FORMAT);
    });
  });

  it("throws if a constraint array item is an object with an invalid format", () => {
    const constraints = [
      { a: "a", b: "b" }, // too many keys
      {}, // to few keys
      { key_: "a", oper: "b", value: "c" }, // wrong { key, op val } syntax
    ];

    constraints.forEach((constraint) => {
      expect(() =>
        extractConstraintConditions([constraint as Constraint])
      ).toThrowError(QueryError.INVALID_CONSTRAINT_OBJECT_FORMAT);
    });
  });

  it('throws if the "key" in the { key, op val } constraint syntax is not a string', () => {
    const keyValues = [
      2,
      [],
      () => {
        return;
      },
    ];

    keyValues.forEach((value) => {
      const constraints = [{ key: value, op: ">", val: 10 }];
      // @ts-ignore
      expect(() => extractConstraintConditions(constraints)).toThrowError(
        QueryError.INVALID_CONSTRAINT_KEY
      );
    });
  });

  it("parses constraints with a { key, op val } syntax", () => {
    const constraintConditions = extractConstraintConditions([
      { key: "campaign.id", op: ">", val: 10 },
    ]);

    expect(constraintConditions).toEqual(["campaign.id > 10"]);
  });

  it("parses constraints with an object syntax", () => {
    const constraintConditions = extractConstraintConditions({
      "campaign.id": 10,
      "campaign.advertising_channel_type": enums.AdvertisingChannelType.SEARCH,
    });

    expect(constraintConditions).toEqual([
      "campaign.id = 10",
      "campaign.advertising_channel_type = 2",
    ]);
  });

  it("parses constraints that are strings", () => {
    const constraintConditions = extractConstraintConditions([
      "metrics.historical_quality_score IS NOT NULL",
    ]);

    expect(constraintConditions).toEqual([
      "metrics.historical_quality_score IS NOT NULL",
    ]);
  });
});

describe("extractDateConstantConditions", () => {
  it("returns an empty array if no constraints are provided", () => {
    const dateConstantConditions = extractDateConstantConditions(undefined);
    expect(dateConstantConditions).toEqual([]);
  });

  it("throws if dateConstant is not a string", () => {
    const dateConstants = [
      2,
      [],
      {},
      () => {
        return;
      },
      null,
    ];

    dateConstants.forEach((dateConstant) => {
      // @ts-ignore
      expect(() => extractDateConstantConditions(dateConstant)).toThrowError(
        // @ts-ignore
        QueryError.INVALID_DATE_CONSTANT_TYPE(dateConstant)
      );
    });
  });

  it("parses date constant correctly", () => {
    const dateConstantConditions = extractDateConstantConditions(
      options.date_constant
    );

    expect(dateConstantConditions[0]).toEqual(
      "segments.date DURING LAST_BUSINESS_WEEK"
    );
  });
});

describe("extractDateConditions", () => {
  it("returns an empty array when no dates are provided", () => {
    const dateConditions = extractDateConditions(undefined, undefined);
    expect(dateConditions).toEqual([]);
  });

  it("throws if fromDate is not provided", () => {
    expect(() =>
      extractDateConditions(undefined, options.to_date)
    ).toThrowError(QueryError.MISSING_FROM_DATE);
  });

  it("uses the current data if toDate is not provided", () => {
    const dateConditions = extractDateConditions(options.from_date, undefined);

    const todayDate = new Date();
    const conditionDate = new Date(dateConditions[1].split(`"`)[1]);
    expect(todayDate.getDate()).toEqual(conditionDate.getDate());
    expect(todayDate.getMonth()).toEqual(conditionDate.getMonth());
    expect(todayDate.getFullYear()).toEqual(conditionDate.getFullYear());
  });

  it("throws if fromDate is not a string", () => {
    const fromDates = [
      2,
      [],
      {},
      () => {
        return;
      },
      null,
    ];

    fromDates.forEach((fromDate) => {
      // @ts-ignore
      expect(() => extractDateConditions(fromDate, "2020-12-25")).toThrowError(
        // @ts-ignore
        QueryError.INVALID_FROM_DATE_TYPE(fromDate)
      );
    });
  });

  it("throws if toDate is not a string", () => {
    const toDates = [
      2,
      [],
      {},
      () => {
        return;
      },
      null,
    ];

    toDates.forEach((toDate) => {
      // @ts-ignore
      expect(() => extractDateConditions("2020-12-25", toDate)).toThrowError(
        // @ts-ignore
        QueryError.INVALID_TO_DATE_TYPE(toDate)
      );
    });
  });

  it("parses dates correctly", () => {
    const dateConditions = extractDateConditions(
      options.from_date,
      options.to_date
    );

    expect(dateConditions[0]).toEqual('segments.date >= "2020-01-01"');
    expect(dateConditions[1]).toEqual('segments.date <= "2020-03-01"');
  });
});

describe("buildWhereClause", () => {
  it("returns an empty string when no constraints or dates are provided", () => {
    const whereClause = buildWhereClause(
      undefined,
      undefined,
      undefined,
      undefined
    );
    expect(whereClause).toEqual("");
  });
});

describe("buildLimitClause", () => {
  it("throws if the limit is not a number", () => {
    const limits = [
      "a",
      {},
      [],
      null,
      () => {
        return;
      },
    ];

    limits.forEach((limit) => {
      // @ts-ignore
      expect(() => buildLimitClause(limit)).toThrowError(
        QueryError.INVALID_LIMIT
      );
    });
  });

  it("correctly parses limit", () => {
    const limitClause = buildLimitClause(10);
    expect(limitClause).toEqual(` LIMIT 10`);
  });

  it("returns an empty string if no limit is provided", () => {
    const limitClause = buildLimitClause(undefined);
    expect(limitClause).toEqual(``);
  });
});

describe("completeOrderly", () => {
  it("throws if an orderly is an empty string", () => {
    expect(() => completeOrderly("", options.entity)).toThrowError(
      QueryError.INVALID_ORDERLY
    );
  });

  it("completes orderlies without entities", () => {
    const orderly = completeOrderly("resource_name", options.entity);
    expect(orderly).toEqual("ad_group.resource_name");
  });

  it("returns orderlies that already have their entity", () => {
    const orderly = completeOrderly("campaign.resource_name", options.entity);

    expect(orderly).toEqual("campaign.resource_name");
  });

  it("throws invalid orderlies", () => {
    expect(() =>
      completeOrderly("campaign.id.resource_name", options.entity)
    ).toThrowError(QueryError.INVALID_ORDERLY);
  });
});

describe("buildOrderClause", () => {
  it("throws if the sortOrder is invalid", () => {
    const sortOrders = [
      "asc",
      "desc",
      "ascending",
      "descending",
      2,
      {},
      [],
      null,
      () => {
        return;
      },
    ];

    sortOrders.forEach((sortOrder) => {
      expect(() =>
        // @ts-ignore
        buildOrderClause(options.order_by, sortOrder, options.entity)
      ).toThrowError(QueryError.INVALID_SORT_ORDER);
    });
  });

  it("sets the sortOrder to descending if none is provided", () => {
    const orderClause = buildOrderClause(
      options.order_by,
      undefined,
      options.entity
    );

    expect(orderClause.endsWith("DESC")).toBeTruthy();
  });

  it("returns an empty string if no orderBy is provided", () => {
    const orderClause = buildOrderClause(
      undefined,
      options.sort_order,
      options.entity
    );

    expect(orderClause).toEqual("");
  });

  it("correctly parses orderBy from a string", () => {
    const orderClause = buildOrderClause(
      options.order_by,
      options.sort_order,
      options.entity
    );

    expect(orderClause).toEqual(` ORDER BY metrics.impressions ASC`);
  });

  it("correctly parses orderBy from an array", () => {
    const orderClause = buildOrderClause(
      ["metrics.impressions", "campaign.id"],
      options.sort_order,
      options.entity
    );

    expect(orderClause).toEqual(
      ` ORDER BY metrics.impressions, campaign.id ASC`
    );
  });

  it("throws if an element in an orderBy array is not a string", () => {
    const orders = [
      2,
      {},
      [],
      null,
      () => {
        return;
      },
    ];

    orders.forEach((order) => {
      expect(() =>
        // @ts-ignore
        buildOrderClause([order], options.sort_order, options.entity)
      ).toThrowError(QueryError.INVALID_ORDERLY);
    });
  });

  it("throws if orderBy is not an array or a string", () => {
    const orderBys = [
      2,
      {},
      null,
      () => {
        return;
      },
    ];

    orderBys.forEach((orderBy) => {
      expect(() =>
        // @ts-ignore
        buildOrderClause(orderBy, options.sort_order, options.entity)
      ).toThrowError(QueryError.INVALID_ORDERBY);
    });
  });
});

const expectedRequestOptions = {
  page_size: 5,
  page_token: "A1B2C3D4",
  validate_only: false,
  return_total_results_count: false,
  summary_row_setting: "NO_SUMMARY_ROW",
};

describe("buildRequestOptions", () => {
  it("takes the correct fields from the report options", () => {
    const requestOptions = buildRequestOptions(options);

    expect(requestOptions).toEqual(expectedRequestOptions);
  });
});

describe("buildQuery", () => {
  it("correctly builds test report options [!IMPORTANT!]", () => {
    const builtQuery = buildQuery(options);

    const expectedQuery = normaliseQuery(
      `SELECT
        ad_group.name, ad_group.id, metrics.impressions, metrics.cost_micros, segments.date
      FROM
        ad_group
      WHERE 
        ad_group.status = 3
        AND campaign.advertising_channel_type = 2
        AND metrics.clicks > 10
        AND segments.date DURING LAST_BUSINESS_WEEK
        AND segments.date >= "2020-01-01"
        AND segments.date <= "2020-03-01"
      ORDER BY metrics.impressions ASC
      LIMIT 10`
    );

    expect(builtQuery).toEqual({
      gaqlQuery: expectedQuery,
      requestOptions: expectedRequestOptions,
    });
  });

  const sampleQueries: { options: ReportOptions; expected: string }[] = [
    {
      options: {
        entity: "campaign",
        attributes: ["campaign.id"],
        constraints: [
          {
            key: "campaign.id",
            op: "IN",
            val: [1, 2, 3],
          },
        ],
      },
      expected: normaliseQuery(
        `SELECT
          campaign.id
        FROM
          campaign
        WHERE
          campaign.id IN (1, 2, 3)`
      ),
    },
    {
      options: {
        entity: "campaign_criterion",
        attributes: [
          "campaign.id",
          "campaign_criterion.location.geo_target_constant",
          "campaign_criterion.location_group",
          "campaign_criterion.proximity.radius",
        ],
        constraints: {
          "campaign.id": [11, 15, 21, 4],
          "campaign_criterion.type": [
            enums.CriterionType.LOCATION,
            enums.CriterionType.LOCATION_GROUP,
            enums.CriterionType.PROXIMITY,
          ],
        },
      },
      expected: normaliseQuery(
        `SELECT
          campaign.id, campaign_criterion.location.geo_target_constant, campaign_criterion.location_group, campaign_criterion.proximity.radius
        FROM
          campaign_criterion
        WHERE
          campaign.id IN (11, 15, 21, 4)
          AND campaign_criterion.type IN (7, 31, 17)`
      ),
    },
    {
      options: {
        entity: "campaign",
        attributes: [
          "campaign.id",
          "campaign.name",
          "campaign_budget.id",
          "campaign_budget.amount_micros",
          "campaign_budget.explicitly_shared",
        ],
        metrics: ["metrics.cost_micros"],
        constraints: [{ "campaign.id": [11, 15, 21, 4] }],
        segments: ["segments.date"],
      },
      expected: normaliseQuery(
        `SELECT
          campaign.id, campaign.name, campaign_budget.id, campaign_budget.amount_micros, campaign_budget.explicitly_shared, metrics.cost_micros, segments.date
        FROM
          campaign
        WHERE
          campaign.id IN (11, 15, 21, 4)`
      ),
    },
    {
      options: {
        entity: "keyword_view",
        attributes: ["ad_group_criterion.criterion_id", "campaign.id"],
        segments: ["segments.date"],
        metrics: [
          "metrics.historical_quality_score",
          "metrics.historical_creative_quality_score",
          "metrics.historical_landing_page_quality_score",
          "metrics.historical_search_predicted_ctr",
          "metrics.impressions",
        ],
        constraints: [
          {
            "campaign.status": enums.CampaignStatus.ENABLED,
          },
          {
            key: "metrics.impressions",
            op: ">",
            val: 0,
          },
          "metrics.historical_quality_score IS NOT NULL",
        ],
        date_constant: "LAST_30_DAYS",
        order_by: "segments.date",
        sort_order: "DESC",
        limit: 50000,
      },
      expected: normaliseQuery(
        `SELECT
          ad_group_criterion.criterion_id, campaign.id, metrics.historical_quality_score, metrics.historical_creative_quality_score, metrics.historical_landing_page_quality_score, metrics.historical_search_predicted_ctr, metrics.impressions, segments.date
        FROM
          keyword_view
        WHERE
          campaign.status = 2
          AND metrics.impressions > 0
          AND metrics.historical_quality_score IS NOT NULL
          AND segments.date DURING LAST_30_DAYS
        ORDER BY
          segments.date DESC
        LIMIT 50000`
      ),
    },
    {
      options: {
        entity: "ad_group",
        attributes: [
          "ad_group.id",
          "campaign.advertising_channel_sub_type",
          "campaign.id",
        ],
        metrics: ["metrics.cost_micros"],
        constraints: [
          {
            key: "metrics.cost_micros",
            op: ">",
            val: 0,
          },
          {
            key: "metrics.clicks",
            op: ">",
            val: 10,
          },
          { "campaign.status": enums.CampaignStatus.ENABLED },
          { "campaign.serving_status": enums.CampaignServingStatus.SERVING },
          { "ad_group.status": enums.AdGroupStatus.ENABLED },
        ],
      },
      expected: normaliseQuery(
        `SELECT
          ad_group.id, campaign.advertising_channel_sub_type, campaign.id, metrics.cost_micros
        FROM
          ad_group
        WHERE
          metrics.cost_micros > 0
          AND metrics.clicks > 10
          AND campaign.status = 2
          AND campaign.serving_status = 2
          AND ad_group.status = 2`
      ),
    },
  ];

  it("buildQuery", () => {
    sampleQueries.forEach((sample) => {
      const builtQuery = buildQuery(sample.options);

      expect(builtQuery.gaqlQuery).toEqual(sample.expected);
    });
  });
});
