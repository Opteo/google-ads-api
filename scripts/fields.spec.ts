import { resources } from "../src";
import { isResource, isAttribute, isMetric, isSegment } from "./fields";

describe("categoryCheckers", () => {
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
