import // ParsingError,
// parse,
// getGAQLFields,
// getReportOptionFields,
// parseRows,
"./parserRest";
import { ReportOptions } from "./types";
import { enums, services } from "./protos";
import { decamelizeKeys } from "./parserRest";

describe("decamelizeKeys", () => {
  it("works in the happy path", () => {
    expect(decamelizeKeys({})).toEqual({});

    expect(
      decamelizeKeys({
        campaign: {
          resourceName: "customers/3176626509/campaigns/11331000428",
          name: "Vac-U-Lock- Exact",
          id: "11331000428",
        },
        adGroup: {
          resourceName: "customers/3176626509/adGroups/131396279681",
          id: "131396279681",
          name: "Vac-U-Lock",
          status: "ENABLED",
        },
        metrics: {
          clicks: "486",
          costMicros: "312690000",
          allConversionsValue: 180.70756678,
          allConversions: 4.143961,
          impressions: "1149",
        },
        searchTermView: {
          resourceName:
            "customers/3176626509/searchTermViews/11331000428~131396279681~dmFjIHUgbG9jaw",
        },
        segments: { date: "2023-01-27" },
      })
    ).toEqual({
      campaign: {
        resource_name: "customers/3176626509/campaigns/11331000428",
        name: "Vac-U-Lock- Exact",
        id: 11331000428,
      },
      ad_group: {
        resource_name: "customers/3176626509/adGroups/131396279681",
        id: 131396279681,
        name: "Vac-U-Lock",
        status: enums.AdGroupStatus.ENABLED,
      },
      metrics: {
        clicks: 486,
        cost_micros: 312690000,
        all_conversions_value: 180.70756678,
        all_conversions: 4.143961,
        impressions: 1149,
      },
      search_term_view: {
        resource_name:
          "customers/3176626509/searchTermViews/11331000428~131396279681~dmFjIHUgbG9jaw",
      },
      segments: { date: "2023-01-27" },
    });
  });

  it("works with nested objects (messages) and arrays (eg final_url and policy_topic_entries)", () => {
    expect(
      decamelizeKeys({
        adGroupAd: {
          resourceName:
            "customers/3827277046/adGroupAds/60447916982~316364195445",
          ad: {
            resourceName: "customers/3827277046/ads/316364195445",
            finalUrls: ["https://opteo.com"],
          },
          policySummary: {
            policyTopicEntries: [
              {
                type: "LIMITED",
                evidences: [{ textList: { texts: ["ads"] } }],
                constraints: [
                  {
                    countryConstraintList: {
                      countries: [
                        { countryCriterion: "geoTargetConstants/2056" },
                        { countryCriterion: "geoTargetConstants/2442" },
                        { countryCriterion: "geoTargetConstants/2528" },
                      ],
                      totalTargetedCountries: 0,
                    },
                  },
                ],
                topic: "TRADEMARKS_IN_AD_TEXT",
              },
            ],
          },
        },
      })
    ).toEqual({
      ad_group_ad: {
        resource_name:
          "customers/3827277046/adGroupAds/60447916982~316364195445",
        ad: {
          resource_name: "customers/3827277046/ads/316364195445",
          final_urls: ["https://opteo.com"],
        },
        policy_summary: {
          policy_topic_entries: [
            {
              type: enums.PolicyTopicEntryType.LIMITED,
              evidences: [{ text_list: { texts: ["ads"] } }],
              constraints: [
                {
                  country_constraint_list: {
                    countries: [
                      { country_criterion: "geoTargetConstants/2056" },
                      { country_criterion: "geoTargetConstants/2442" },
                      { country_criterion: "geoTargetConstants/2528" },
                    ],
                    total_targeted_countries: 0,
                  },
                },
              ],
              topic: "TRADEMARKS_IN_AD_TEXT",
            },
          ],
        },
      },
    });
  });

  it("parses errors", () => {
    expect(
      decamelizeKeys({
        "@type":
          "type.googleapis.com/google.ads.googleads.v14.errors.GoogleAdsFailure",
        errors: [
          {
            errorCode: { queryError: "BAD_RESOURCE_TYPE_IN_FROM_CLAUSE" },
            message:
              "Error in search_term_views:  is not a valid resource name.",
          },
        ],
        requestId: "v88qTFjnLHkKAm5HwYKbgg",
      })
    ).toEqual({
      "@type":
        "type.googleapis.com/google.ads.googleads.v14.errors.GoogleAdsFailure",
      errors: [
        {
          error_code: { query_error: 45 },
          message: "Error in search_term_views:  is not a valid resource name.",
        },
      ],
      request_id: "v88qTFjnLHkKAm5HwYKbgg",
    });
  });
});
