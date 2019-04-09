const { GoogleAdsApi, enums, types } = require('google-ads-api')

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
    const adgroup = {
        name: 'new ad group',
        campaign: `customers/{customer_id}campaigns/{campaign_id}`,
    }

    try {
        const { results } = await customer.adGroups.create(adgroup)
        /*
            The newly created ad group will have a resource name in the following format:
            "customers/{customer_id}/adGroups/{ad_group_id}"
        */
    } catch (err) {
        console.log(err)
    }
}

main()
