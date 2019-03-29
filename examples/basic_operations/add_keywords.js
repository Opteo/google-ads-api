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

    // Bonus: If you're using Typescript, set the type here to "types.Keyword" for autocomplete!
    const keyword = {
        ad_group: 'customers/123/adGroups/321',
        status: enums.AdGroupCriterionStatus.ENABLED,
        text: 'hotels london',
        match_type: enums.KeywordMatchType.EXACT,
    }

    try {
        const { results } = await customer.adGroupCriterion.create(keyword)
        /*
            The newly created ad group criterion will have a resource name in the following format:
            "customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}"
        */
    } catch (err) {
        if (err.code.adGroupCriterionError === enums.AdGroupCriterionError.INVALID_KEYWORD_TEXT) {
            console.log(`Keyword with text "${keyword.text}" is invalid!`)
        }
    }
}

main()
