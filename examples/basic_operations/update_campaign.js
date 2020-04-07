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
        resource_name: 'customers/{customer_id}/campaigns/{campaign_id}',
        status: enums.CampaignStatus.PAUSED,
        network_settings: { target_search_network: false },
    }

    try {
        const { results } = await customer.campaigns.update(campaign)
        console.log(`Updated campaign ${results[0].resource_name}`)
    } catch (err) {
        console.log(err)
    }
}

main()
