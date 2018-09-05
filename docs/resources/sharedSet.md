# Shared Set Object


#### Properties 
| Property        |  Type  | Description |
| :------------- | :-------------| :-----|
| `resource_name`     | String | The resource name of the shared set | 
| `id`                | Number | The ID of the shared set    |
| `name`              | String | The name of the shared set  |
| `member_count`     | Number | The number of shared criteria within the shared set  |
| `reference_count`     | Number  | The number of campaigns associated with the shared set  |
| `status`     | String  | The status of the shared set   |
| `type`     | String  | The type of this shared set: each shared set holds only a single kind of entity  |


<br/><br/><br/>
# Create Shared Set
[...]

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `name`  | String  | True
 `type`  | String  | True

#### Example Request
```javascript 
await customer.sharedSets.create({
    name: 'Negative Keywords List',
    type: 'NEGATIVE_KEYWORDS'
}) 
```

### Returns
[...]

#### Example Response
```json
{ 
    id: 123123123,
    resource_name: "customers/987987987/sharedSets/123123123"
}
```


<br/><br/><br/>
# Retrieve Shared Set
Retrieves the details of an existing shared set. You need to supply the unique id of the shared set to be retrieved.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number  | True
 

#### Example Request
```javascript
const shared_set = await customer.sharedSets.get(123123123)
```

### Returns
Returns a shared set object if a valid identifier was provided.

#### Example Response
```json
{ 
    resource_name: 'customers/987987987/sharedSets/123123123',
    id: '123123123',
    type: 'NEGATIVE_KEYWORDS',
    name: 'Negative Keywords List',
    status: 'ENABLED',
    member_count: '1',
    reference_count: '1' 
}
```

<br/><br/><br/>
# List All Shared Sets
Retrieves a list of all shared sets. You need to provide a list of fields to be retrieved for each shared set. You can set a limit on the number of objects to be returned.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `fields`  | Array of strings  | True
 `limit`  | Number  | False
 `constraints`  | Object  | False


#### Example Request
```javascript
const shared_sets = await customer.sharedSets.list({ 
    fields: ['id', 'name'],
})
```

### Returns
Returns an array of up to limit shared sets. 

#### Example Response
```json
{
    results: [
        { 
            resource_name: 'customers/123123123/sharedSets/456456456',
            id: '456456456',
            name: 'Shared set #1',
        },
        { 
            resource_name: 'customers/123123123/sharedSets/678678678',
            id: '678678678',
            name: 'Shared set #2',
        },
    ],
    total_results_count: 2,
	field_mask: "sharedSet.id,sharedSet.name"
}
```


<br/><br/><br/>
# Update Shared Set
Updates the specified shared set by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number  | True
 `update`  | Object  | True

#### Example Request
```javascript
await customer.sharedSets.update({ 
    id: 678678678,
    update: {
        status: 'PAUSED',
    }
})
```

### Returns
Returns the resource name if the update succeeded. 

#### Example Response
```json
{
    results: [{
        id: "678678678"
        resource_name: "customers/123123123/sharedSets/678678678"
    }]
}
```
<br/><br/><br/>
# Delete Shared Set
Deletes a shared set. You need to supply the unique id of the shared set to be removed.


### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number  | True

#### Example Request
```javascript
await customer.sharedSets.delete(678678678)
```

### Returns
Returns a resource name if a valid identifier was provided.

#### Example Response
```json
{
    id: "678678678"
    resource_name: "customers/123123123/sharedSets/678678678"
}
```