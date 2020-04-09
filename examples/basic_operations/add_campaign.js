const { GoogleAdsApi, enums } = require('google-ads-api')

// Make sure you pass in valid authentication details!
const client = new GoogleAdsApi({
    client_id: '<CLIENT_ID>',
    client_secret: '<CLIENT_SECRET>',
    developer_token: '<DEVELOPER_TOKEN>',
})

async function main() {
    const customer = client.Customer({
        customer_account_id: '<CUSTOMER_ACCOUNT_ID>',
        refresh_token: '<REFRESH_TOKEN>',
    })

    // Bonus: If you're using Typescript, set the type here to "types.Campaign" for autocomplete
    const campaign = {
        name: 'new-campaign',
        campaign_budget: 'customers/{customer_id}/campaignBudgets/{campaign_budget_id}',
        advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
        status: enums.CampaignStatus.PAUSED,
    }

    try {
        const { results } = await customer.campaigns.create(campaign)
        /*
            The newly created campaign will have a resource name in the following format:
            "customers/{customer_id}/campaigns/{campaign_id}"
        */
    } catch (err) {
        console.log(err)
    }
}

main()
