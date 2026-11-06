import { resources } from "../src";
import {
  isResource,
  isAttribute,
  isMetric,
  isSegment,
  isResourceName,
  hasEnumDataType,
  getEnumName,
  buildFieldDataTypes,
} from "./fields";
import { enums } from "../src";
import { get } from "lodash";

import { googleAdsVersion } from "../src/version";

describe("category checkers", () => {
  const resourceField = new resources.GoogleAdsField({
    category: "RESOURCE",
  });
  const attributreField = new resources.GoogleAdsField({
    category: "ATTRIBUTE",
  });
  const metricField = new resources.GoogleAdsField({
    category: "METRIC",
  });
  const segmentField = new resources.GoogleAdsField({
    category: "SEGMENT",
  });

  it("isResource", () => {
    expect(isResource(resourceField)).toBeTruthy();
    expect(isResource(attributreField)).toBeFalsy();
    expect(isResource(metricField)).toBeFalsy();
    expect(isResource(segmentField)).toBeFalsy();
  });

  it("isAttribute", () => {
    expect(isAttribute(resourceField)).toBeFalsy();
    expect(isAttribute(attributreField)).toBeTruthy();
    expect(isAttribute(metricField)).toBeFalsy();
    expect(isAttribute(segmentField)).toBeFalsy();
  });

  it("isMetric", () => {
    expect(isMetric(resourceField)).toBeFalsy();
    expect(isMetric(attributreField)).toBeFalsy();
    expect(isMetric(metricField)).toBeTruthy();
    expect(isMetric(segmentField)).toBeFalsy();
  });

  it("isSegment", () => {
    expect(isSegment(resourceField)).toBeFalsy();
    expect(isSegment(attributreField)).toBeFalsy();
    expect(isSegment(metricField)).toBeFalsy();
    expect(isSegment(segmentField)).toBeTruthy();
  });
});

describe("other checkers", () => {
  it("isResourceName", () => {
    const resourceNameField = new resources.GoogleAdsField({
      name: "campaign.resource_name",
    });
    const nonResourceNameField = new resources.GoogleAdsField({
      name: "campaign.status",
    });

    expect(isResourceName(resourceNameField)).toBeTruthy();
    expect(isResourceName(nonResourceNameField)).toBeFalsy();
  });

  it("isResourceName matches consecutive resource_name fields", () => {
    // Regression: a stateful /g regex carried lastIndex between calls,
    // silently dropping resource_name fields tested back-to-back
    const fields = [
      "keyword_theme_constant.resource_name",
      "keyword_view.resource_name",
      "label.resource_name",
    ].map((name) => new resources.GoogleAdsField({ name }));

    expect(fields.map((field) => isResourceName(field))).toEqual([
      true,
      true,
      true,
    ]);
  });

  it("hasEnumDataType", () => {
    const doesHaveEnumDataType = new resources.GoogleAdsField({
      data_type: "ENUM",
    });

    const doesNotHaveEnumDataType = new resources.GoogleAdsField({
      data_type: "MESSAGE",
    });

    expect(hasEnumDataType(doesHaveEnumDataType)).toBeTruthy();
    expect(hasEnumDataType(doesNotHaveEnumDataType)).toBeFalsy();
  });

  it("getEnumName", () => {
    const attributeEnumField = new resources.GoogleAdsField({
      type_url: `google.ads.googleads.${googleAdsVersion}.enums.CampaignStatusEnum.CampaignStatus`,
    });
    const metricEnumField = new resources.GoogleAdsField({
      type_url: `google.ads.googleads.${googleAdsVersion}.enums.QualityScoreBucketEnum.QualityScoreBucket`,
    });
    const segmentEnumField = new resources.GoogleAdsField({
      type_url: `google.ads.googleads.${googleAdsVersion}.enums.DayOfWeekEnum.DayOfWeek`,
    });

    expect(getEnumName(attributeEnumField)).toEqual("CampaignStatus");
    expect(getEnumName(metricEnumField)).toEqual("QualityScoreBucket");
    expect(getEnumName(segmentEnumField)).toEqual("DayOfWeek");
  });
});

describe("buildFieldDataTypes", () => {
  const valuesByName = (enumObject: Record<string, string | number>) =>
    Object.fromEntries(
      Object.entries(enumObject).filter(([name]) => Number.isNaN(Number(name)))
    );

  const types = buildFieldDataTypes([
    {
      name: "asset_group_listing_group_filter.path",
      data_type: "MESSAGE",
      type_url: `com.google.ads.googleads.${googleAdsVersion}.resources.ListingGroupFilterDimensionPath`,
    },
    {
      name: "ad_group_criterion.listing_group",
      data_type: "MESSAGE",
      type_url: `com.google.ads.googleads.${googleAdsVersion}.common.ListingGroupInfo`,
    },
  ] as unknown as resources.IGoogleAdsField[]);

  it("resolves enums inside messages that share an enum's short name", () => {
    const dimensions = "asset_group_listing_group_filter.path.dimensions";

    expect(get(types, `${dimensions}.product_channel.channel`)).toEqual(
      valuesByName(enums.ListingGroupFilterProductChannel)
    );
    expect(get(types, `${dimensions}.product_condition.condition`)).toEqual(
      valuesByName(enums.ListingGroupFilterProductCondition)
    );
  });

  it("keeps shared enum maps free of message fields", () => {
    expect(
      get(
        types,
        "ad_group_criterion.listing_group.case_value.product_channel.channel"
      )
    ).toEqual(valuesByName(enums.ProductChannel));
  });
});
