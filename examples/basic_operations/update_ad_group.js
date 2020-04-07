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

    // Bonus: If you're using Typescript, set the type here to "types.AdGroup" for autocomplete
    const ad_group = {
        resource_name: 'customers/{customer_id}/adGroups/{ad_group_id}',
        cpc_bid_micros: 1000000,
        status: enums.AdGroupStatus.PAUSED,
    }

    try {
        const { results } = await customer.adGroups.update(ad_group)
        console.log(`Updated CPC bid and status of the ad group ${results[0].resource_name}`)
    } catch (err) {
        console.log(err)
    }
}

main()
