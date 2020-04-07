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
        const results = customer.reportStream({
            entity: 'search_term_view',
            metrics: ['metrics.clicks'],
            attributes: ['search_term_view.search_term'],
            order_by: 'metrics.clicks',
            sort_order: 'desc',
            limit: 50,
        })
    } catch (err) {
        console.log(err)
    }
}

main()
