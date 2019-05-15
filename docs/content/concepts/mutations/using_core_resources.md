---
order: 4.1
type: manual
entity: mutations
title: Using core resources
---

## Mutations

A "mutation" is a change to a google ads account, such as a new campaign or an adjusted bid.


### Making changes using core resources

Most entities in the Google Ads API will have mutation methods for creating, updating, and deleting. We also support a top-level customer `mutateResources` method, that allows for performing mutations with different types atomically, as well as supporting the new concept of temporary resource ids.

#### Create

The `create` method can take a single entity or array of entities. Optionally, you can supply a second argument with the following options: `validate_only` and `partial_failure`. For more details on these, refer to the [Google Ads API documentation](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v1.services#google.ads.googleads.v1.services.MutateCampaignsRequest).

The `results` property of the response object will contain the newly created entity resource names.

```javascript
const campaign = {
    name: 'new-campaign',
    campaign_budget: 'customers/123/campaignBudgets/123',
    advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
    status: enums.CampaignStatus.PAUSED,
}

const { results } = await customer.campaigns.create(campaign)
console.log(results) // ['customers/123/campaigns/456']
```

#### Update

The `update` method works the same way as `create` and takes a single entity or array of entities to update. All properties passed (that can be updated) will be updated, so if you **don't want to update an attribute, don't include it**. This method also supports the additional `validate_only` and `partial_failure` options.

The `results` property of the response object will contain the updated entity resource names.

```javascript
const campaign = {
    resource_name: `customers/123/campaigns/123`,
    name: 'updated-campaign-name',
}
const { results } = await customer.campaigns.update(campaign, { validate_only: true })
```

#### Delete

The `delete` method should be provided with the resource name of the entity to remove. Note: When deleting an entity in the Google Ads API, it will continue to exist, but it will be immutable and its status will be changed to `REMOVED`.

```javascript
await customer.campaigns.delete('customers/123/campaigns/123')
```
