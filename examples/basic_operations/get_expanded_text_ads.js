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
        const results = await customer.report({
            entity: 'ad_group_ad',
            attributes: [
                'ad_group.id',
                'ad_group_ad.status',
                'ad_group_ad.ad.id',
                'ad_group_ad.ad.expanded_text_ad.headline_part1',
                'ad_group_ad.ad.expanded_text_ad.headline_part2',
            ],
            constraints: [{ 'ad_group_ad.ad.type': enums.AdType.EXPANDED_TEXT_AD }],
        })

        for (const { ad_group, ad_group_ad } of results) {
            console.log(
                `Expanded text ad with ID ${ad_group_ad.ad.id} with headline "${
                    ad_group_ad.ad.expanded_text_ad.headline_part_1
                } - ${ad_group_ad.ad.expanded_text_ad.headline_part_2}" was found in ad group with ID ${ad_group.id}.`
            )
        }
    } catch (err) {
        console.log(err)
    }
}

main()
