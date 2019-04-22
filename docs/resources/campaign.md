# Campaign Object


#### Properties 
| Property        |  Type  | Description |
| :------------- | :-------------| :-----|
| `resource_name`     | String | The resource name of the campaign | 
| `id`                | String | The ID of the campaign      |
| `name`              | String | The name of the campaign      |
| `status`            | String | The status of the campaign      |
| `campaign_budget`   | String | The budget of the campaign      |
| `ad_serving_optimization_status` | String | The ad serving optimization status of the campaign |
| `advertising_channel_type` | String | The primary serving target for ads within the campaign      |
| `network_settings`  | Object | The network settings for the campaign      |
| `start_date`        | String | The date when campaign started      |
| `end_date`          | String | The date when campaign ended      |
| `serving_status`    | String | The ad serving status of the campaign      |
| `bidding_strategy_type` | String | The type of bidding strategy. |
|`target_spend`      | Object | Standard Target Spend bidding strategy that automatically sets your bids to help get as many clicks as possible within your budget.      |

<!-- 
```
Campaign {
    resourceName: string
    id: number
    name: string
    status: CampaignStatus
    campaignBudget: string
    adServingOptimizationStatus: AdServingOptimizationStatus
    advertisingChannelType: AdvertisingChannelType
    networkSettings: NetworkSettings
    startDate: string
    endDate: string
    servingStatus: ServingStatus
    biddingStrategyType: string
    targetSpend: TargetSpend
    segments: CampaignSegments
} -->
<!-- ``` -->

<br/><br/><br/>
# Create Campaign
When you create a new campaign, you need to pass an identifier of a shared campaign budget to assign it to the new campaign. If you don't have shared campaign budget, you can create a new campaign budget using [Campaign Budget service](/resources/campaignBudget.md#create-campaign-budget).


### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `name`  | String  | True
 `budget_id`  | String / Number  | True
 `advertising_channel_type`  | String  | True

#### Example Request
```javascript  
await customer.campaigns.create({
    name: 'my new campaign name',
    advertising_channel_type: 'SEARCH'
    budget_id: '678678678',
})
```

### Returns
Returns a resource name if successfull.

#### Example Response
```json
{
    id: "123123123",
    resource_name: "customers/987987987/campaigns/123123123"
}
```


<br/><br/><br/>
# Retrieve Campaign
Retrieves the details of an existing campaign. You need to supply the unique id of the campaign to be retrieved.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number | True
 

#### Example Request
```javascript
const campaign = await customer.campaigns.get('123123123')
```

### Returns
Returns a campaign object if a valid identifier was provided. 
#### Example Response
```json
{ 
    resource_name: 'customers/123123123/campaigns/456456456',
    id: '456456456',
    name: 'campaign name',
    status: 'ENABLED',
    campaign_budget: 'customers/123123123/campaignBudgets/789789789',
    ad_serving_optimization_status: 'OPTIMIZE',
    advertising_channel_type: 'SEARCH',
    network_settings:
    { target_google_search: true,
        target_search_network: true,
        target_content_network: false,
        target_partner_search_network: false },
    start_date: '2018-07-12',
    end_date: '2037-12-30',
    serving_status: 'SERVING',
    bidding_strategy_type: 'TARGET_SPEND',
    target_spend: { cpc_bid_ceiling_micros: '0' 
} 
```

<br/><br/><br/>
# List All Campaigns
Retrieves a list of all client's campaigns. You need to provide a list of fields to be retrieved for each campaign. You can also set a limit on the number of objects to be returned.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `fields`  | Array of strings  | True
 `limit`  | Number  | False
 `constraints`  | Object  | False


#### Example Request
```javascript
// Lists all campaigns with ids
const campaigns = await customer.campaigns.list({ 
    fields: ['id'], // REQUIRED
})

// Lists up to 25 enabled campaigns with id and name
const enabled_campaigns =customer.campaigns.list({ 
    fields: ['id', 'name'], // REQUIRED
    limit: 25,
    constraints: {
        status: 'ENABLED'
    }
})
```

### Returns
Returns an array of up to limit campaigns. 

#### Example Response
```json
{
    results: [
        { 
            resource_name: 'customers/123123123/campaigns/456456456',
            id: '456456456',
            name: 'campaign #1',
            status: 'ENABLED',
        },
        { 
            resource_name: 'customers/123123123/campaigns/678678678',
            id: '678678678',
            name: 'campaign #2',
            status: 'ENABLED',
        }
    ],
    total_results_count: 2,
	field_mask: "campaign.id,campaign.name,campaign.status"
}
```
<br/><br/><br/>
# Update Campaign
Updates the specified campaign by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number | True
 `update`  | Object  | True

#### Example Request
```javascript
await customer.campaigns.update({ 
    id: '987987987',    // Entity ID -- REQUIRED
    update: {   // Parameters to update
        status: 'PAUSED'
    }
})
```

### Returns
Returns the resource name if the update succeeded. 

#### Example Response
```json
{
    id: "987987987",
    resource_name: "customers/123123123/campaigns/987987987"
}
```
<br/><br/><br/>
# Delete Campaign
Deletes a campaign. You need to supply the unique id of the campaign to be removed.


### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number  | True

#### Example Request
```javascript
await customer.campaigns.delete(123123123)
```

### Returns
Returns a resource name if a valid identifier was provided. Note:
deleted campaigns can still be retrieved, however, their status is set to 'REMOVED'.

#### Example Response
```json
{
    id: 123123123,
    resource_name: "customers/987987987/campaigns/123123123"
}
```
