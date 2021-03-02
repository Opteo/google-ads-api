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
