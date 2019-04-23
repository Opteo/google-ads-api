---
type: list
entity: KeywordPlanCampaign
title: List KeywordPlanCampaign
order: 3
---

This `customer.keywordPlanCampaigns.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the keywordPlanCampaigns in the account
let result = await customer.keywordPlanCampaigns.list()

// Listing with constraints and a limited number of results
let result = await customer.keywordPlanCampaigns.list({
    constraints: [
        {
            key: 'keyword_plan_campaign.some_field',
            op: '=',
            val: 'yellow submarine',
        },
    ],
    limit: 15,
})

// Here's what the result might look like
result ===
    [
        {
            customer: {
                resource_name: 'customers/3827277046',
                auto_tagging_enabled: true,
                call_reporting_setting: {
                    call_conversion_action: 'customers/3827277046/conversionActions/179',
                    call_conversion_reporting_enabled: true,
                },
                conversion_tracking_setting: { conversion_tracking_id: 875176189 },
                currency_code: 'GBP',
                descriptive_name: 'My customer',
                has_partners_badge: false,
                id: 3827277046,
                manager: false,
                remarketing_setting: {
                    google_global_site_tag:
                        "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
                },
                test_account: false,
                time_zone: 'Europe/London',
                tracking_url_template:
                    '{lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
            },
            keyword_plan: {
                resource_name: 'customers/3827277046/keywordPlans/4739396',
                id: 4739396,
                name: 'My keyword plan',
            },
            keyword_plan_campaign: {
                resource_name: 'customers/3827277046/keywordPlanCampaigns/4773388',
                cpc_bid_micros: 5370000,
                geo_targets: [],
                id: 4773388,
                keyword_plan: 'customers/3827277046/keywordPlans/4739396',
                keyword_plan_network: 2,
                language_constants: [{ value: 'languageConstants/1000' }],
                name: 'My keyword plan campaign',
            },
        },
    ]
```
