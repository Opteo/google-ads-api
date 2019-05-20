---
order: 3.1
type: manual
entity: reporting
title: Reporting Concepts
---

## Reporting

"Reporting" just means fetching data about an account.

All data in Google Ads is queriable via SQL-like tables. There is one table per resource (such as `campaign` or `ad_group_ad`). 
These tables and their associated fields can be found in the [core resources](/#accountbudget) section of this page, or in the ["API Fields"](https://developers.google.com/google-ads/api/docs/fields/account_budget)
 section of the official docs.

### Resources

There are four types of resources available for querying.

1. **Core Resources** directly map to entities in your account. Example: `campaign`, `ad_group_criterion`.
2. **Criteria View Resources** offer a more convenient way to query ad_group and campaign criteria (criteria are targeting options, such as keywords or placements). They may also aggregate metrics differently. Example: `keyword_view` is a subset of ad_group_criterion, while `age_range_view` is a subset of campaign_criterion.
3. **Click & Search Term Resources** are like core resources, except that they are by nature read-only. Example: `click_view`, `search_term_view`.
4. **Constant Resources** are just a convenient way to query Google Ads constants (and their IDs). They aren't specific to your account. Example: `geo_target_constant`, `mobile_device_constant`.


### Fields

Resources contain three types of fields:

1. **Metrics** hold data about the performance of your account, and change through time. Example: `metrics.clicks` or `metrics.historical_quality_score`. 

3. **Segments** allow you to segment your metrics by your chosen field, meaning your result will have more rows. Example: `segments.device` or `segments.conversion_action`. 

1. **Attributes** are static information about a resource. All fields described in the [core resources](/#accountbudget) section of this page are attributes. It is not possible to query the past value of an attribute. Example: `campaign.name` or `ad_group_criterion.keyword.text`.

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



<!-- 
carrier_constant
geo_target_constant
language_constant
mobile_app_category_constant
mobile_device_constant
operating_system_version_constant
product_bidding_category_constant
topic_constant -->



