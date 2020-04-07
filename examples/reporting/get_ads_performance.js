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
            attributes: ['ad_group.id', 'ad_group_ad.ad.id'],
            metrics: ['metrics.clicks', 'metrics.impressions'],
            segments: ['segments.date'],
            constraints: [
                { 'ad_group.status': enums.AdGroupStatus.ENABLED },
                { 'ad_group_ad.status': enums.AdGroupAdStatus.ENABLED },
            ],
            date_constant: 'LAST_7_DAYS',
            order_by: 'metrics.clicks',
        })

        for (const { ad_group, ad_group_ad, metrics, segments } of results) {
            const { ad } = ad_group_ad
            console.log(
                `Ad ID ${ad.id} in ad group ID ${ad_group.id} with ${metrics.impressions} impressions on day ${
                    segments.date
                } had ${metrics.clicks} clicks during the last 7 days.`
            )
        }
    } catch (err) {
        console.log(err)
    }
}

main()
