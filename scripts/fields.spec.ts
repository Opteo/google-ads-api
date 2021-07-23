import { resources } from "../src";
import {
  isResource,
  isAttribute,
  isMetric,
  isSegment,
  isResourceName,
  hasEnumDataType,
  getEnumName,
} from "./fields";

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
      type_url:
        `google.ads.googleads.${googleAdsVersion}.enums.CampaignStatusEnum.CampaignStatus`,
    });
    const metricEnumField = new resources.GoogleAdsField({
      type_url:
        `google.ads.googleads.${googleAdsVersion}.enums.QualityScoreBucketEnum.QualityScoreBucket`,
    });
    const segmentEnumField = new resources.GoogleAdsField({
      type_url: `google.ads.googleads.${googleAdsVersion}.enums.DayOfWeekEnum.DayOfWeek`,
    });

    expect(getEnumName(attributeEnumField)).toEqual("CampaignStatus");
    expect(getEnumName(metricEnumField)).toEqual("QualityScoreBucket");
    expect(getEnumName(segmentEnumField)).toEqual("DayOfWeek");
  });
});
