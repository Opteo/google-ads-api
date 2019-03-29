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

    const response = await customer.query(`
        SELECT 
            campaign.id, 
            campaign.name, 
            ad_group.id, 
            ad_group.name,
            ad_group_criterion.criterion_id,
            ad_group_criterion.keyword.text,
            ad_group_criterion.keyword.match_type,
            metrics.impressions, 
            metrics.clicks, 
            metrics.cost_micros
        FROM 
            keyword_view 
        WHERE 
            segments.date DURING LAST_7_DAYS
            AND campaign.advertising_channel_type = "SEARCH"
            AND ad_group.status = "ENABLED"
            AND ad_group_criterion.status IN ("ENABLED", "PAUSED")
        ORDER BY 
            metrics.impressions DESC
        LIMIT 50
    `)

    for (const row of response) {
        const { ad_group, metrics } = row
        const { keyword } = ad_group

        /* 
            This could be done with a constraint in the GAQL query string
            But we're doing it here as an example of how to use enums
        */
        if (keyword.match_type === enums.KeywordMatchType.PHRASE) {
            console.log(
                `Keyword text "${keyword.text}" had ${metrics.impressions} impression(s) during the last 7 days.`
            )
        }
    }
}

main()
