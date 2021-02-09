// Replace the import path with "google-ads-api"
import { GoogleAdsApi, ResourceNames, enums, resources } from "../../src/index";

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

  const campaign = new resources.Campaign({
    name: "Planet Express",
    campaign_budget: ResourceNames.campaignBudget(
      customer.credentials.customer_id,
      "123"
    ),
    advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
    status: enums.CampaignStatus.PAUSED,
  });

  // Create the campaign
  const { results } = await customer.campaigns.create([campaign]);
  const [{ resource_name }] = results;

  // Update the campaign
  await customer.campaigns.update([
    { ...campaign, resource_name, name: "Zapp Brannigan" },
  ]);

  // Delete the campaign
  await customer.campaigns.remove([resource_name]);
}

main();
