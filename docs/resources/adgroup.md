# Ad Group Object

#### Properties 
| Property           |  Type  | Description |
| :----------------- | :------| :-----------|
| `resource_name`    | String | The resource name of the ad group | 
| `id`               | String | The ID of the ad group      |
| `name`             | String | The name of the ad group      |
| `status`           | String | The status of the ad group    |
| `campaign`         | String | The campaign to which the ad group belongs      |
| `type`             | String | The type of the ad group      |
| `cpa_bid_micros`   | String | The target cost-per-acquisition (conversion) bid|
| `cpc_bid_micros`   | String | The maximum CPC (cost-per-click) bid     |
| `cpm_bid_micros`   | String | The maximum CPM (cost-per-thousand viewable impressions) bid      |
| `cpv_bid_micros`   | String | The CPV (cost-per-view) bid      |





<br/><br/><br/>
# Create Ad Group
[..]
### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `name`  | String  | True
 `campaign_id` | String / Number  | True

#### Example Request
```javascript  
await customer.adgroups.create({
        name: 'ad group name',
        campaign_id: 123123123
})
```

### Returns
Returns a resource name if successfull.

#### Example Response
```json
{
    id: "987987987",
    resource_name: "customers/987987987/adGroups/987987987"
}
```



<br/><br/><br/>
# Retrieve Ad Group
Retrieves the details of an existing ad group. You need to supply the unique id of the ad group to be retrieved.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number  | True
 


#### Example Request
```javascript
const adgroup = await customer.adgroups.get('123123123')
```

### Returns
Returns an ad group object if a valid identifier was provided. 
#### Example Response
```json
{ 
    resource_name: 'customers/567567567/adGroups/123123123',
    id: '123123123',
    name: 'AdGroup #1',
    status: 'ENABLED',
    campaign: 'customers/567567567/campaigns/987987987',
    type: 'SEARCH_STANDARD',
    cpc_bid_micros: '10000',
    cpm_bid_micros: '10000',
    cpa_bid_micros: '10000',
    cpv_bid_micros: '10000' 
} 
```




<br/><br/><br/>
# List All Ad Groups
Retrieves a list of all campaign's ad groups. You need to provide a list of fields to be retrieved for each ad group. You can also set a limit on the number of objects to be returned.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `fields`       | Array of strings  | True
 `limit`        | Number  | False
 `constraints`  | Object  | False


#### Example Request
```javascript

// Lists up to 5 enabled campaigns with id, name and status
const adgroups = customer.campaigns.list({ 
    fields: ['id', 'name', 'type'], // REQUIRED
    limit: 5,
    constraints: {
        status: 'ENABLED',
        campaign: { // use nested constraint for any parent entity
            id: 123123123
        }
    }
})
```


### Returns
Returns an array of up to limit ad groups. 
#### Example Response
```json
{
    results: [
        { 
            resource_name: 'customers/123123123/adGroups/456456456',
            id: '456456456',
            name: 'Ad Group #1',
            type: 'HOTEL_ADS',
        },
        { 
            resource_name: 'customers/123123123/adGroups/678678678',
            id: '678678678',
            name: 'Ad Group #2',
            type: 'SEARCH_STANDARD',
        }
    ],
    total_results_count: 2,
    field_mask: "ad_group.id,ad_group.name,ad_group.type"
}
```


<br/><br/><br/>
# Update Ad Group
Updates the specified ad group by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number | True
 `update`  | Object  | True

### Example Request
```javascript
await customer.adgroups.update({ 
    id: 987987987,
    update: {   // Parameters to update
        name: 'new ad group name',
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
    resource_name: "customers/123123123/adGroups/987987987"
}
```


<br/><br/><br/>
# Delete Ad Group
Deletes an ad group. You need to supply the unique id of the ad group to be removed.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number  | True

### Example Request

```javascript
await customer.adgroups.delete(123123123)
```

### Returns
Returns a resource name if a valid identifier was provided. 

#### Example Response
```json
{
    id: 123123123,
    resource_name: "customers/987987987/adGroups/123123123"
}
```