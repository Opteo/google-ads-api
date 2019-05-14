---
order: 3.1
type: manual
entity: reporting
title: Reporting Concepts
---

## Reporting

"Reporting" just means fetching data about an account.

**All data Google Ads is queriable via SQL-like tables that we call "Resources"**.

```javascript
const campaigns = await customer.query(`
    SELECT 
      something
    FROM 
      <RESOURCE_HERE> 
`)

```

### Resources



There are four types of resources available for querying.

1. **Core resources**

    These resources directly map to entities in your account. For example:
    -   The `campaigns` resource will contain all fields about campaigns in one account, one campaign per row.
    -   The `ad_group_ads` resource will contain all fields about ads in one account, across all campaigns and adgroups.
    -   The `customer` resource will only ever have one row -- the customer you're authorised as.

> Note: Most of these core resources can be mutated.

<!-- For reference, this is the complete list of core resources: 
account_budget, 
account_budget_proposal
ad_group
ad_group_ad
ad_group_ad_label
ad_group_bid_modifier
ad_group_criterion
ad_group_criterion_label
ad_group_criterion_simulation
ad_group_extension_setting
ad_group_feed
ad_group_label
ad_group_simulation
ad_parameter
asset
bidding_strategy
billing_setup
campaign
campaign_bid_modifier
campaign_budget
campaign_criterion
campaign_criterion_simulation
campaign_extension_setting
campaign_feed
campaign_label
campaign_shared_set
change_status
conversion_action
custom_interest
customer
customer_client
customer_client_link
customer_extension_setting
customer_feed
customer_label
customer_manager_link
customer_negative_criterion
domain_category
extension_feed_item
feed
feed_item
feed_item_target
feed_mapping
keyword_plan
keyword_plan_ad_group
keyword_plan_campaign
keyword_plan_keyword
keyword_plan_negative_keyword
label
media_file
mutate_job
recommendation
remarketing_action
shared_criterion
shared_set
user_interest
user_list
video -->

2. **Criteria View Resources**

    These resources offer a more convenient way to query adgroup and campaign criteria. They may also aggregate metrics differently. For example:
    - The `keyword_view` resource will return the 'ad_group_criterion' resource fields pre-filtered by type=keyword.
    - The `age_range_view` resource will return the 'campaign_criterion' resource fields pre-filtered by type=age_range. 


<!-- ad_group_audience_view
ad_schedule_view
campaign_audience_view
detail_placement_view
display_keyword_view
expanded_landing_page_view
feed_placeholder_view
gender_view
geographic_view
group_placement_view
hotel_group_view
hotel_performance_view
keyword_view
landing_page_view
location_view
managed_placement_view
parental_status_view
product_group_view
shopping_performance_view
topic_view -->



3. **Click & Search Term Resources**

    These resources are just like core resources, except that they are by nature read-only. For example:
    - The `click_view` resource is a read-only table of the clicks your ads have received.
    - The `search_term_view` resource includes metrics aggregated by search term at the ad group level.

<!-- `click_view`, `search_term_view`, `paid_organic_search_term_view`, `dynamic_search_ads_search_term_view` -->

4. **Constant Resources**

    These resources are just a convenient way to query Google Ads constants (and their IDs). They aren't specific to your account. For example:
    - The `geo_target_constant` resource includes every single geographic location that google considers for targeting and reporting
    - The `mobile_device_constant` resource is a list of every single mobile device (phone, tablet, etc) that might exist if you segment by `segments.device` in another core resource query.



<!-- 
carrier_constant
geo_target_constant
language_constant
mobile_app_category_constant
mobile_device_constant
operating_system_version_constant
product_bidding_category_constant
topic_constant -->


### Fields


```javascript
const campaigns = await customer.query(`
    SELECT 
      <FIELDS HERE>
    FROM 
      something 
`)

```

Resources contain three types of fields:

1. **Attributes**

    Example: `campaign.name` (string) or `ad_group.bidding_strategy_type` (enum). It is not possible to query a past attribute -- querying `SELECT campaign.name FROM campaign WHERE segments.date = YESTERDAY` will give you today's campaign name.

2. **Metrics**

    Example: `metrics.clicks` (number) or `metrics.historical_quality_score` (enum). These can be segmented by date to query the past.

3. **Segments**

    Example: `segments.device` (enum) or `segments.conversion_action` (resource_name). These will segment the result rows by your chosen field, meaning that your result will have more rows.


