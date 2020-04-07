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
        const results = await customer.report({
            entity: 'customer',
            attributes: ['customer.id', 'customer.descriptive_name', 'customer.currency_code', 'customer.time_zone'],
        })

        for (const { customer } of results) {
            console.log(
                `Retrieved customer with ID ${customer.id}, descriptive name ${
                    customer.descriptive_name
                }, currency code ${customer.currency_code} and timezone ${customer.time_zone}`
            )
        }
    } catch (err) {
        console.log(err)
    }
}

main()
