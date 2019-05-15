---
order: 4.1
type: manual
entity: mutations
title: Using core resources
---

## Mutations

A "mutation" is a change to a google ads account, such as a new campaign or an adjusted bid.


### Making changes using core resources

Most resources in the Google Ads API will have mutation methods for creating, updating, and deleting.

#### Create

The `create` method can take a single entity or array of entities. The `results` property of the response object will contain the newly created entity resource names.

```javascript
const campaign = {
    name: 'new-campaign',
    campaign_budget: 'customers/123/campaignBudgets/123',
    advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
    status: enums.CampaignStatus.PAUSED,
}

const { results } = await customer.campaigns.create(campaign)
console.log(results) // ['customers/123/campaigns/456'] <-- new resource_name
```

For more details on this method, check the `create()` section for the core resource you want to create, such as [creating a campaign](/#create-campaign).

#### Update

The `update` method works the same way as `create` and takes a single entity or array of entities to update. All properties passed (that can be updated) will be updated, so if you **don't want to update an attribute, don't include it**.

The `results` property of the response object will contain the updated entity resource names.

```javascript
const campaign = {
    resource_name: `customers/123/campaigns/456`,
    name: 'updated-campaign-name',
}
const { results } = await customer.campaigns.update(campaign)
```

For more details on this method, check the `update()` section for the core resource you want to modify, such as [updating a campaign](/#update-campaign).


#### Delete

The `delete` method should be provided with the resource name of the entity to remove. Note: When deleting an entity in the Google Ads API, it will continue to exist, but it will be immutable and its status will be changed to `REMOVED`.

```javascript
await customer.campaigns.delete('customers/123/campaigns/456')
```

For more details on this method, check the `delete()` section for the core resource you want to delete, such as [deleting a campaign](/#delete-campaign).
