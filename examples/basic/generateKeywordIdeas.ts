// Replace the import path with "google-ads-api"
import { GoogleAdsApi, services } from "../../src/index";

// Make sure to pass in valid authentication!
const client = new GoogleAdsApi({
  client_id: "<CLIENT_ID>",
  client_secret: "<CLIENT_SECRET>",
  developer_token: "<DEVELOPER_TOKEN>",
});

async function main() {
  const customer = client.Customer({
    customer_id: "<CUSTOMER_ACCOUNT_ID>",
    refresh_token: "<REFRESH_TOKEN>",
  });

  const keywordSeed = new services.KeywordSeed({ keywords: ["Some Keyword"] });

  const generateKeywordIdeaResponse =
    await customer.keywordPlanIdeas.generateKeywordIdeas({
      customer_id: customer.credentials.customer_id,
      page_size: 10,
      keyword_seed: keywordSeed,
    });

  return generateKeywordIdeaResponse;
}

main();
