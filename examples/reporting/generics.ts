const { GoogleAdsApi, enums } = require('google-ads-api')

// Make sure you pass in valid authentication details!
const client = new GoogleAdsApi({
    client_id: '<CLIENT_ID>',
    client_secret: '<CLIENT_SECRET>',
    developer_token: '<DEVELOPER_TOKEN>',
})

interface Campaign {
    campaign: {
        resource_name: string
        name: string
    }
}

async function main() {
    const customer = client.Customer({
        customer_account_id: '<CUSTOMER_ACCOUNT_ID>',
        refresh_token: '<REFRESH_TOKEN>',
    })

    try {
        const result = await customer.report<Campaign[]>({
            entity: 'campaign',
            attributes: ['campaign.name'],
            limit: 5,
        })
    } catch (err) {
        console.log(err)
    }
}

main()
