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

    // Bonus: If you're using Typescript, set the type here to "types.AdGroupAd" for autocomplete
    const ad = {
        ad_group: 'customers/{customer_id}/adGroups/{ad_group_id}',
        status: enums.AdGroupAdStatus.PAUSED,
        ad: {
            final_urls: ['http://www.mywebsite.com'],
            expanded_text_ad: {
                headline_part_1: 'headline part one',
                headline_part_2: 'headline part two',
                description: 'ad description',
            },
        },
    }

    try {
        const { results } = await customer.adGroupAds.create(ad)
        /*
            The newly created ad will have a resource name in the following format:
            "customers/{customer_id}/adGroups/{ad_group_id}~{ad_id}"
        */
    } catch (err) {
        console.log(err)
    }
}

main()
