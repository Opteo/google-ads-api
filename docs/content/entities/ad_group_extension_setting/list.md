---
type: list
entity: AdGroupExtensionSetting
title: List AdGroupExtensionSetting
order: 3
---

This `customer.adGroupExtensionSettings.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the adGroupExtensionSettings in the account
let result = await customer.adGroupExtensionSettings.list()

// Listing with constraints and a limited number of results
let result = await customer.adGroupExtensionSettings.list({
    constraints: [
        {
            key: 'ad_group_extension_setting.some_field',
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
            ad_group: {
                resource_name: 'customers/3827277046/adGroups/36337683057',
                campaign: 'customers/3827277046/campaigns/729468370',
                cpc_bid_micros: 3000000,
                cpm_bid_micros: 10000,
                cpv_bid_micros: 0,
                effective_target_cpa_micros: 0,
                explorer_auto_optimizer_setting: { opt_in: false },
                id: 36337683057,
                name: 'My ad group',
                status: 2,
                target_cpa_micros: 0,
                targeting_setting: {
                    target_restrictions: [
                        { targetingDimension: 3, bidOnly: { value: false } },
                        { targetingDimension: 4, bidOnly: { value: false } },
                        { targetingDimension: 5, bidOnly: { value: false } },
                        { targetingDimension: 6, bidOnly: { value: false } },
                        { targetingDimension: 7, bidOnly: { value: false } },
                        { targetingDimension: 8, bidOnly: { value: false } },
                    ],
                },
                type: 2,
                url_custom_parameters: [],
            },
            ad_group_extension_setting: {
                resource_name: 'customers/3827277046/adGroupExtensionSettings/36337683057~SITELINK',
                ad_group: 'customers/3827277046/adGroups/36337683057',
                extension_feed_items: [
                    { value: 'customers/3827277046/extensionFeedItems/9779152283' },
                    { value: 'customers/3827277046/extensionFeedItems/9780600045' },
                    { value: 'customers/3827277046/extensionFeedItems/9784349521' },
                    { value: 'customers/3827277046/extensionFeedItems/9784362487' },
                ],
                extension_type: 10,
            },
            campaign: {
                resource_name: 'customers/3827277046/campaigns/729468370',
                ad_serving_optimization_status: 5,
                advertising_channel_type: 2,
                bidding_strategy_type: 3,
                campaign_budget: 'customers/3827277046/campaignBudgets/1005586774',
                end_date: '2037-12-30',
                frequency_caps: [],
                geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 2 },
                id: 729468370,
                manual_cpc: { enhanced_cpc_enabled: false },
                name: 'My campaign',
                network_settings: {
                    target_content_network: false,
                    target_google_search: true,
                    target_partner_search_network: false,
                    target_search_network: false,
                },
                payment_mode: 4,
                selective_optimization: { conversion_actions: [] },
                serving_status: 2,
                start_date: '2017-01-04',
                status: 4,
                url_custom_parameters: [],
            },
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
        },
    ]
```
