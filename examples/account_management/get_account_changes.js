const { GoogleAdsApi, enums, getEnumString } = require('google-ads-api')

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
        const changes = await customer.report({
            entity: 'change_status',
            attributes: [
                'change_status.resource_status',
                'change_status.resource_type',
                'change_status.last_change_date_time',
            ],
            constraints: [
                {
                    key: 'change_status.last_change_date_time',
                    op: 'DURING',
                    val: 'LAST_7_DAYS',
                },
            ],
        })

        for (const { change_status } of changes) {
            if (change_status.resource_type === enums.ChangeStatusResourceType.CAMPAIGN) {
                const change_status_operation = getEnumString('ChangeStatusOperation', change_status.resource_status)
                console.log(`A campaign was ${change_status_operation} during the last 7 days`)
            }
        }
    } catch (err) {
        console.log(err)
    }
}

main()
