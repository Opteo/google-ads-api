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
            entity: 'ad_group',
            attributes: ['campaign.id', 'ad_group.id', 'ad_group.name'],
            constraints: [{ 'ad_group.status': enums.AdGroupAdStatus.ENABLED }],
        })

        for (const { campaign, ad_group } of results) {
            console.log(`
                Ad group with ID ${ad_group.id} and name "${ad_group.name}" 
                was found in campaign with ID ${campaign.id}
            `)
        }
    } catch (err) {
        console.log(err)
    }
}

main()
