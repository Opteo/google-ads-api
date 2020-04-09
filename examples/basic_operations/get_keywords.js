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
            entity: 'ad_group_criterion',
            attributes: ['ad_group.id', 'ad_group_criterion.criterion_id', 'ad_group_criterion.keyword.text'],
            constraints: [{ 'ad_group_criterion.type': enums.CriterionType.KEYWORD }],
        })

        for (const { ad_group, ad_group_criterion } of results) {
            console.log(`
                Keyword with text "${ad_group_criterion.keyword.text}" and ID ${
                ad_group_criterion.criterion_id
            } was found in ad group with ID ${ad_group.id}.
            `)
        }
    } catch (err) {
        console.log(err)
    }
}

main()
