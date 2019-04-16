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
            entity: 'campaign',
            attributes: ['campaign.id', 'campaign.name'],
            constraints: [{ 'campaign.status': enums.CampaignStatus.ENABLED }],
        })

        for (const { campaign } of results) {
            console.log(`
                Campaign with ID ${campaign.id} and name "${campaign.name}" was found.
            `)
        }
    } catch (err) {
        console.log(err)
    }
}

main()
