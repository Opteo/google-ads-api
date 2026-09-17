import * as api from "./index.js";
import { googleAdsVersion } from "./version.js";

describe("package root", () => {
  it("exports the Google Ads API version", () => {
    expect(api.googleAdsVersion).toBe(googleAdsVersion);
    expect(api.googleAdsVersion).toBe("v25");
  });

  it("exports the client, enums and errors", () => {
    expect(typeof api.GoogleAdsApi).toBe("function");
    expect(typeof api.enums.AdvertisingChannelType).toBe("object");
    expect(typeof api.errors.GoogleAdsFailure).toBe("function");
  });
});
