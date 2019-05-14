---
order: 4.2
type: manual
entity: mutations
title: Using global mutate
---


### Atomic mutations using `customer.mutateResources()`

Sometimes you may want to create multiple resources of different types at once, such as creating a new campaign and its required budget. The `customer.mutateResources` method is designed for this use case, and supports:

-   **Atomic Mutations**: If any of the operations fail, all other operations will be rolled back.
-   **Temporary resource ids**: Define your entity relationships using your own temporary IDs.
-   **All mutation types**: Create, update, and delete resources.

A basic example of creating a budget and a campaign (which uses this budget) is shown below:

```javascript
const { results } = await customer.mutateResources([
    {
        // For each resource, you must specify its type with the "_resource" key
        _resource: 'CampaignBudget',
        resource_name: `customers/123/campaignBudgets/-1`, // We define the new ID as -1
        name: 'My new budget',
        amount_micros: 3000000,
        explicitly_shared: true,
    },
    {
        _resource: 'Campaign',
        campaign_budget: `customers/123/campaignBudgets/-1`, // Reference to the budget above
        name: 'My new campaign',
        advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
        status: enums.CampaignStatus.PAUSED,
        manual_cpc: {
            enhanced_cpc_enabled: true,
        },
        // We don't need to set a temporary resource name here because
        // nothing else in this operations array depends on this campaign
    },
])

// The real resource ids will now be defined after performing the operation
console.log(results) // ['customers/123/campaignBudgets/123123', 'customers/123/campaigns/321321']
```

By default, `mutateResources` is atomic and will rollback if one operation fails -- no new resources will be added to the client account if one operation fails. This mode can be disabled by setting the `partial_failure` option to `true`. The `validate_only` option is also supported in this method. See the [Google Ads API documentation](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v1.services#google.ads.googleads.v1.services.MutateGoogleAdsRequest) for more details on these settings.

```javascript
await customer.mutateResources(operations, { partial_failure: true })
```

As well as creating resources, `mutateResources` also supports updating and deleting multiple resources (which also works with temporary resource ids). Use the `_operation` field in an operation to specify the mode, being either `create`, `update` or `delete`. This field isn't required and defaults to `create`. In the example below, these operations are executed:

1. A new budget with the temporary resource id `-1` is created.
2. An existing campaign (id of `456`) is updated to use the new budget (`-1`)
3. The original budget that was being used by the campaign is deleted

```javascript
const response = await customer.mutateResources([
    // Create new budget
    {
        _resource: 'CampaignBudget',
        _operation: 'create',
        resource_name: 'customers/123/campaignBudgets/-1',
        name: 'My new budget',
        amount_micros: 3000000,
        explicitly_shared: true,
    },
    // Update campaign to use new budget
    {
        _resource: 'Campaign',
        _operation: 'update',
        resource_name: 'customers/123/campaigns/456',
        campaign_budget: 'customers/123/campaignBudgets/-1', // Reference to budget above
    },
    // Delete old budget
    {
        _resource: 'CampaignBudget',
        _operation: 'delete',
        resource_name: 'customers/123/campaignBudgets/123123',
    },
])
```

_Note_: Using `customer.mutateResources()` with a single operation is equivalent to using any of the standard `customer.someResource.create|update|delete()` methods, but your ts definitions won't be as good.

