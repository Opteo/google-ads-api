# Campaign Budget Object


#### Properties 
| Property        |  Type  | Description |
| :------------- | :-------------| :-----|
| `resource_name`     | String | The resource name of the campaign budget | 
| `id`                | String | The ID of the campaign budget    |
| `name`              | String | The name of the campaign budget  |
| `amount_micros`     | String | The amount of the budget, in the local currency for the account      |
| `status`            | String | The status of this campaign budget    |
| `delivery_method`   | String | The delivery method that determines the rate at which the campaign budget is spent. |
| `explicitly_shared` | Boolean | Whether the budget is explicitly shared.    |
| `reference_count`   | String | The number of campaigns actively using the budget     |

<!-- 
{   
    resource_name: 'customers/9262111890/campaignBudgets/1548892296',
    id: '1548892296',
    name: '',
    amount_micros: '15000000',
    status: 'REMOVED',
    delivery_method: 'STANDARD',
    explicitly_shared: false,
    reference_count: '0' 
}
 -->

<br/><br/><br/>
# Create Campaign Budget
[...]

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `amount_micros`  | Integer  | True
 `explicitly_shared`  | Boolean  | True

#### Example Request
```javascript  
await customer.campaignBudgets.create({
    amount_micros: 12000000,
    explicitly_shared: false
})
```

### Returns
[...]

#### Example Response
```json
{
    id: "123123123",
    resource_name: "customers/987987987/campaignBudgets/123123123"
}
```


<br/><br/><br/>
# Retrieve Campaign Budget
Retrieves the details of an existing campaign budget. You need to supply the unique id of the campaign budget to be retrieved.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number  | True
 

#### Example Request
```javascript
const campaign_budget = await customer.campaignBudgets.get(123123123)
```

### Returns
Returns a campaign budget object if a valid identifier was provided.

#### Example Response
```json
{   
    resource_name: 'customers/123123123/campaignBudgets/456456456',
    id: '456456456',
    name: 'campaign budget name',
    amount_micros: '15000000',
    status: 'ENABLED',
    delivery_method: 'STANDARD',
    explicitly_shared: false,
    reference_count: '1' 
}
```

<br/><br/><br/>
# List All Campaign Budgets
Retrieves a list of all campaign budgets. You need to provide a list of fields to be retrieved for each campaign budget. You can set a limit on the number of objects to be returned.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `fields`  | Array of strings  | True
 `limit`  | Number  | False
 `constraints`  | Object  | False


#### Example Request
```javascript
// Lists all campaign budgets with ids and amount_micros
const campaign_budget_list = await customer.campaignBudgets.list({ 
    fields: ['id', 'amount_micros'], // REQUIRED
})

```

### Returns
Returns an array of up to limit campaign budgets. 

#### Example Response
```json
{
    results: [
        { 
            resource_name: 'customers/123123123/campaignBudgets/456456456',
            id: '456456456',
            amount_micros: '15000000',
        },
        { 
            resource_name: 'customers/123123123/campaignBudgets/678678678',
            id: '678678678',
            amount_micros: '12000000',
        },
        { 
            resource_name: 'customers/123123123/campaignBudgets/789789789',
            id: '789789789',
            amount_micros: '14000000',
        },
    ],
    total_results_count: 3,
	field_mask: "campaign_budget.id,campaign_budget.amount_micros"
}
```


<br/><br/><br/>
# Update Campaign Budget
Updates the specified campaign budget by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number  | True
 `update`  | Object  | True

#### Example Request
```javascript
await customer.campaigns.update({ 
    id: '567567576',    // Entity ID -- REQUIRED
    update: {   // Parameters to update
        amount_micros: 15000000,
    }
})
```

### Returns
Returns the resource name if the update succeeded. 

#### Example Response
```json
{
    results: [{
        id: "567567576"
        resource_name: "customers/123123123/campaignBudgets/567567576"
    }]
}
```
<br/><br/><br/>
# Delete Campaign Budget
Deletes a campaign budget. You need to supply the unique id of the campaign to be removed.


### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number  | True

#### Example Request
```javascript
await customer.campaignBudgets.delete('567567576')
```

### Returns
Returns a resource name if a valid identifier was provided.

#### Example Response
```json
{
    id: "567567576"
    resource_name: "customers/123123123/campaignBudgets/567567576"
}
```