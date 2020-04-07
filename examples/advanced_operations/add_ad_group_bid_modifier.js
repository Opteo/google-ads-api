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

    // Bonus: If you're using Typescript, set the type here to "types.AdGroupBidModifier" for autocomplete
    const ad_group_bid_modifier = {
        ad_group: 'customers/{customer_id}/adGroups/{ad_group_id}',
        bid_modifier: 1.5,
        device: {
            type: enums.Device.MOBILE,
        },
    }

    try {
        const { results } = await customer.adGroupBidModifiers.create(ad_group_bid_modifier)
        /*
            The newly created ad group bid modifier will have a resource name in the following format:
            "customers/{customer_id}/adGroupBidModifiers/{ad_group_id}~{criterion_id}"
        */
    } catch (err) {
        console.log(err)
    }
}

main()
