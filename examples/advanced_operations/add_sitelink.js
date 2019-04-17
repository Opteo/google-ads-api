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

    // Bonus: If you're using Typescript, set the type here to "types.ExtensionFeedItem" for autocomplete
    const sitelink = {
        sitelink_feed_item: {
            link_text: 'Text',
            line_1: 'Line 1 Value',
            line_2: 'Line 2 Value',
            final_urls: ['http://sitelink.com'],
        },
    }

    try {
        const { results } = await customer.extensionFeedItems.create(sitelink)
        console.log(`Created Sitelink ${results[0].resource_name}`)
    } catch (err) {
        console.log(err)
    }
}

main()
