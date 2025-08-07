import {
  ParsingError,
  parse,
  getGAQLFields,
  getReportOptionFields,
  parseRows,
} from "./parser";
import { ReportOptions } from "./types";
import { enums, services } from "./protos";

describe("parse", () => {
  it("throws if no gaql query or report options are provided", () => {
    expect(() => parse({ results: [{ campaign: { id: 1 } }] })).toThrowError(
      ParsingError.NO_REPORT_OPTIONS_OR_GAQL_QUERY
    );
  });

  it("ensures the parser returns resource names even if not specified", () => {
    const rows: services.IGoogleAdsRow[] = [
      {
        customer: null,
        campaign: {
          resource_name: "customers/123/campaigns/321",
          name: "Planet Express",
          status: "UNSPECIFIED",
          advertising_channel_type: "UNSPECIFIED",
        },
        ad_group: null,
        ad_group_ad: null,
      },
    ];
    expect(
      parse({ results: rows, gaqlString: `SELECT campaign.name FROM campaign` })
    ).toEqual([
      {
        campaign: {
          resource_name: rows[0]?.campaign?.resource_name,
          name: rows[0]?.campaign?.name,
        },
      },
    ]);
  });
});

describe("parseRows", () => {
  it("keeps only the specified fields", () => {
    const fields = ["campaign.resource_name", "campaign.name"];
    const rows: services.IGoogleAdsRow[] = [
      {
        customer: null,
        campaign: {
          resource_name: "customers/123/campaigns/321",
          name: "Planet Express",
          status: "UNSPECIFIED",
          advertising_channel_type: "UNSPECIFIED",
        },
        ad_group: null,
        ad_group_ad: null,
      },
    ];
    expect(parseRows(rows, fields)).toEqual([
      {
        campaign: {
          resource_name: rows[0]?.campaign?.resource_name,
          name: rows[0]?.campaign?.name,
        },
      },
    ]);
  });

  it("translates enums into their number values", () => {
    const rows: services.IGoogleAdsRow[] = [
      {
        campaign: {
          advertising_channel_type: "SEARCH",
        },
      },
    ];
    expect(parseRows(rows, ["campaign.advertising_channel_type"])).toEqual([
      {
        campaign: {
          advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
        },
      },
    ]);
  });

  it("translates long (int64) proto values into number types", () => {
    const rows: services.IGoogleAdsRow[] = [
      {
        campaign: {
          // @ts-expect-error Simulating proto response
          id: "1234567890",
        },
        metrics: {
          // @ts-expect-error Simulating proto response
          clicks: "1234567890",
          // @ts-expect-error Simulating proto response
          cost_micros: "1234567890",
        },
      },
    ];
    const parsedResults = parseRows(rows, [
      "campaign.id",
      "metrics.clicks",
      "metrics.cost_micros",
    ]);
    expect(typeof parsedResults[0]?.metrics?.clicks).toEqual("number");
    expect(parsedResults).toEqual([
      {
        campaign: {
          id: 1234567890,
        },
        metrics: {
          clicks: 1234567890,
          cost_micros: 1234567890,
        },
      },
    ]);
  });

  it("recursively handles deeply nested fields", () => {
    const rows: services.IGoogleAdsRow[] = [
      {
        ad_group_ad: {
          ad: {
            expanded_text_ad: {
              headline_part1: "Sushi London",
              headline_part2: "Fresh Sashimi",
              description: null,
              path1: "",
              path2: null,
            },
            final_urls: ["https://example.com/1", "https://example.com/1"],
            name: "",
            text_ad: null,
            image_ad: null,
          },
          status: "UNSPECIFIED",
        },
      },
    ];
    expect(
      parseRows(rows, [
        "ad_group_ad.ad.expanded_text_ad.headline_part1",
        "ad_group_ad.ad.expanded_text_ad.headline_part2",
        "ad_group_ad.ad.final_urls",
      ])
    ).toEqual([
      {
        ad_group_ad: {
          ad: {
            expanded_text_ad: {
              headline_part1: "Sushi London",
              headline_part2: "Fresh Sashimi",
            },
            final_urls: ["https://example.com/1", "https://example.com/1"],
          },
        },
      },
    ]);
  });

  it("handles multiple rows", () => {
    const fields = [
      "campaign.resource_name",
      "campaign.name",
      "campaign.status",
    ];
    const rows: services.IGoogleAdsRow[] = [
      {
        customer: null,
        campaign: {
          resource_name: "customers/123/campaigns/321",
          name: "Planet Express",
          status: "PAUSED",
          advertising_channel_type: "UNSPECIFIED",
          id: 0,
        },
        ad_group: null,
        ad_group_ad: null,
      },
      {
        customer: null,
        campaign: {
          resource_name: "customers/123/campaigns/322",
          name: "Planet Express 2",
          status: "ENABLED",
          advertising_channel_type: "UNSPECIFIED",
          id: 0,
        },
        ad_group: null,
        ad_group_ad: null,
      },
    ];
    expect(parseRows(rows, fields)).toEqual([
      {
        campaign: {
          resource_name: rows[0]?.campaign?.resource_name,
          name: rows[0]?.campaign?.name,
          status: enums.CampaignStatus.PAUSED,
        },
      },
      {
        campaign: {
          resource_name: rows[1]?.campaign?.resource_name,
          name: rows[1]?.campaign?.name,
          status: enums.CampaignStatus.ENABLED,
        },
      },
    ]);
  });

  it("handles missing data", () => {
    const fields = [
      "ad_group_criterion.resource_name",
      "ad_group_criterion.listing_group.case_value.product_type.level",
    ];
    const rows: services.IGoogleAdsRow[] = [
      {
        ad_group: null,
        ad_group_criterion: {
          resource_name: "customers/123/adGroupCriteria/123~123",
          // Some fields (such as listing_group) are missing if not applicable for the resource
        },
      },
    ];
    expect(parseRows(rows, fields)).toEqual([
      {
        ad_group_criterion: {
          resource_name: rows[0]?.ad_group_criterion?.resource_name,
          listing_group: null,
        },
      },
    ]);
  });

  it("handles FieldMask fields like changed_fields", () => {
    const fields = [
      "change_event.resource_name",
      "change_event.changed_fields",
    ];
    const rows: services.IGoogleAdsRow[] = [
      {
        change_event: {
          resource_name:
            "customers/4517895542/changeEvents/1750751693628134~0~0",
          change_date_time: "2025-06-24 08:54:53.628134",
          change_resource_name: "customers/4517895542/campaigns/21930728598",
          changed_fields: {
            paths: ["campaign.target_roas.target_roas"],
          },
          old_resource: { campaign: { target_roas: { target_roas: 3 } } },
          new_resource: { campaign: { target_roas: { target_roas: 3.25 } } },
        },
      },
    ];
    const result = parseRows(rows, fields);
    expect(result).toHaveLength(1);
    expect(result[0].change_event?.resource_name).toBe(
      "customers/4517895542/changeEvents/1750751693628134~0~0"
    );
    expect(result[0].change_event?.changed_fields).toEqual({
      paths: ["campaign.target_roas.target_roas"],
    });
  });

  it("handles old_resource and new_resource fields in change events", () => {
    const fields = [
      "change_event.resource_name",
      "change_event.old_resource",
      "change_event.new_resource",
    ];
    const rows: services.IGoogleAdsRow[] = [
      {
        change_event: {
          resource_name:
            "customers/4517895542/changeEvents/1750751693628134~0~0",
          change_date_time: "2025-06-24 08:54:53.628134",
          change_resource_name: "customers/4517895542/campaigns/21930728598",
          changed_fields: {
            paths: ["campaign.target_roas.target_roas"],
          },
          old_resource: { campaign: { target_roas: { target_roas: 3 } } },
          new_resource: { campaign: { target_roas: { target_roas: 3.25 } } },
        },
      },
    ];
    const result = parseRows(rows, fields);
    expect(result).toHaveLength(1);
    expect(result[0].change_event?.resource_name).toBe(
      "customers/4517895542/changeEvents/1750751693628134~0~0"
    );
    expect(
      result[0].change_event?.old_resource?.campaign?.target_roas?.target_roas
    ).toBe(3);
    expect(
      result[0].change_event?.new_resource?.campaign?.target_roas?.target_roas
    ).toBe(3.25);
  });

  it("handles complex nested structures in old_resource and new_resource", () => {
    const fields = [
      "change_event.resource_name",
      "change_event.old_resource",
      "change_event.new_resource",
    ];
    const rows: services.IGoogleAdsRow[] = [
      {
        change_event: {
          resource_name:
            "customers/4517895542/changeEvents/1750751666945610~0~0",
          change_date_time: "2025-06-24 08:54:26.94561",
          change_resource_name: "customers/4517895542/campaigns/17049405489",
          changed_fields: {
            paths: ["maximize_conversion_value.target_roas"],
          },
          old_resource: {
            campaign: {
              maximize_conversion_value: {
                target_roas: 8,
              },
            },
          },
          new_resource: {
            campaign: {
              maximize_conversion_value: {
                target_roas: 8.5,
              },
            },
          },
        },
      },
    ];
    const result = parseRows(rows, fields);
    expect(result).toHaveLength(1);
    expect(
      result[0].change_event?.old_resource?.campaign?.maximize_conversion_value
        ?.target_roas
    ).toBe(8);
    expect(
      result[0].change_event?.new_resource?.campaign?.maximize_conversion_value
        ?.target_roas
    ).toBe(8.5);
  });

  it("handles campaign criterion deletion in old_resource and new_resource", () => {
    const fields = [
      "change_event.resource_name",
      "change_event.old_resource",
      "change_event.new_resource",
    ];
    const rows: services.IGoogleAdsRow[] = [
      {
        change_event: {
          resource_name:
            "customers/4517895542/changeEvents/1750693690782591~0~0",
          change_date_time: "2025-06-23 16:48:10.782591",
          change_resource_name:
            "customers/4517895542/campaignCriteria/21890334919~23340370",
          changed_fields: {
            paths: [
              "campaign",
              "criterion_id",
              "keyword.match_type",
              "keyword.text",
              "negative",
              "resource_name",
              "status",
            ],
          },
          old_resource: {
            campaign_criterion: {
              resource_name:
                "customers/4517895542/campaignCriteria/21890334919~23340370",
              keyword: {
                match_type: "BROAD",
                text: "crackle",
              },
              status: "ENABLED",
              campaign: "customers/4517895542/campaigns/21890334919",
              criterion_id: 23340370,
              negative: true,
            },
          },
          new_resource: {
            campaign_criterion: {},
          },
        },
      },
    ];
    const result = parseRows(rows, fields);
    expect(result).toHaveLength(1);
    expect(
      result[0].change_event?.old_resource?.campaign_criterion?.resource_name
    ).toBe("customers/4517895542/campaignCriteria/21890334919~23340370");
    expect(
      result[0].change_event?.old_resource?.campaign_criterion?.keyword
        ?.match_type
    ).toBe(4);
    expect(
      result[0].change_event?.old_resource?.campaign_criterion?.keyword?.text
    ).toBe("crackle");
    expect(
      result[0].change_event?.old_resource?.campaign_criterion?.status
    ).toBe(2);
    expect(
      result[0].change_event?.old_resource?.campaign_criterion?.campaign
    ).toBe("customers/4517895542/campaigns/21890334919");
    expect(
      (
        result[0].change_event?.old_resource?.campaign_criterion
          ?.criterion_id as any
      )?.low
    ).toBe(23340370);
    expect(
      result[0].change_event?.old_resource?.campaign_criterion?.negative
    ).toBe(true);
    expect(
      result[0].change_event?.new_resource?.campaign_criterion
    ).toBeDefined();
  });
});

describe("getGAQLFields", () => {
  it("gets every attribute, metric and segment between 'SELECT' and 'FROM'", () => {
    const gaqlQuery =
      "SELECT campaign.resource_name, campaign.name, metrics.clicks, segments.date FROM campaign";
    const fields = [
      "campaign.resource_name",
      "campaign.name",
      "metrics.clicks",
      "segments.date",
    ];

    expect(getGAQLFields(gaqlQuery).sort()).toEqual(fields.sort());
  });

  it("handles multi-line gaql queries", () => {
    const gaqlQuery = `
      SELECT
        campaign.resource_name,
        campaign.name,
        metrics.clicks,
        segments.date
      FROM
        campaign`;
    const fields = [
      "campaign.resource_name",
      "campaign.name",
      "metrics.clicks",
      "segments.date",
    ];

    expect(getGAQLFields(gaqlQuery).sort()).toEqual(fields.sort());
  });

  it("throws if the query contains no fields", () => {
    const gaqlQuery = "SELECT FROM campaign";

    expect(() => getGAQLFields(gaqlQuery)).toThrowError(
      ParsingError.NO_FIELDS_IN_GAQL_QUERY
    );
  });
});

describe("getReportOptionFields", () => {
  it("compiles attributes, metrics and segments into one array", () => {
    const reportOptions: ReportOptions = {
      entity: "ad_group",
      attributes: ["campaign.name", "ad_group.name", "ad_group.status"],
      metrics: ["metrics.clicks", "metrics.conversions"],
      segments: ["segments.date"],
    };
    const fields = [
      "campaign.name",
      "ad_group.name",
      "ad_group.status",
      "metrics.clicks",
      "metrics.conversions",
      "segments.date",
    ];

    expect(getReportOptionFields(reportOptions).sort()).toEqual(fields.sort());
  });

  it("throws if the report options contain no fields", () => {
    const reportOptions: ReportOptions = {
      entity: "ad_group",
    };

    expect(() => getReportOptionFields(reportOptions)).toThrowError(
      ParsingError.NO_FIELDS_IN_REPORT_OPTIONS
    );
  });
});
