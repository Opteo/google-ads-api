const { GoogleAdsApi } = require('google-ads-api')

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
        await customer.adGroupCriterion.delete('customers/{customer_id}/adGroupCriteria/{ad_group_id}~{keyword_id}')
    } catch (err) {
        console.log(err)
    }
}

main()
