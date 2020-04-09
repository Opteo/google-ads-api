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

    try {
        // Bonus: If you're using Typescript, set the type here to "types.AdGroupAd" for autocomplete!
        const ad_group_ad = {
            resource_name: 'customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_group_ad_id}',
            status: enums.AdGroupAdStatus.PAUSED,
        }
        await customer.adGroupAds.update(ad_group_ad)
    } catch (err) {
        console.log(err)
    }
}

main()
