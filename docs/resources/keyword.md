# Keyword Object

#### Criterion Object
| Property        |  Type  | Description |
| :------------- | :-------------| :-----|
| `criterion_id`     | String / Number |  | 
| `ad_group`     | String |  | 
| `effective_cpc_bid_micros`     | String / Number |  | 
| `effective_cpm_bid_micros`     | String / Number |  | 
| `effective_cpc_bid_source`     | String / Number |  | 
| `effective_cpm_bid_source`     | String / Number |  | 
| `type`     | String |  | 
| `keyword`     | Keyword Object |  | 
| `negative`     | Boolean |  | 
| quality_info     | |  | 
| `quality_info.quality_score`     | Number |  | 
| `quality_info.creative_quality_score`     | String |  | 
| `quality_info.post_click_quality_score`     | String |  | 
| `quality_info.search_predicted_ctr`     | String |  | 


#### Keyword Object
| Property        |  Type  | Description |
| :------------- | :-------------| :-----|
| `text`     | String |  | 
| `match_type`     | String |  | 

<!-- {
  quality_info:
    { quality_score: 6,
        creative_quality_score: 'AVERAGE',
        post_click_quality_score: 'AVERAGE',
        search_predicted_ctr: 'AVERAGE' },
    ad_group: 'customers/9262111890/adGroups/60170225920',
    effective_cpc_bid_micros: '1000000',
    effective_cpm_bid_micros: '10000',
    effective_cpc_bid_source: 'ADGROUP',
    effective_cpm_bid_source: 'ADGROUP',
    type: 'KEYWORD',
    criterion_id: '483304146381',
    keyword: { text: 'test-keyword-3', match_type: 'BROAD' },
    negative: false 
} -->

<br/><br/><br/>
# Create Keyword
To create new keyword [...]

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
`ad_group_id` | String / Number | True
`keyword` | [Keyword Object](#Keyword-Object) | True

#### Example Request
```javascript  
await customer.keywords.create({
    ad_group_id: 123123123,
    keyword: {
        text: 'Test keyword',
        match_type: 'BROAD'
    }
})
```


### Returns
Returns a resource name if successfull.

#### Example Response
```json
{
    id: "123123123",
    resource_name: "customers/456456456/adGroupCriteria/987987987_123123123"
}
```



<br/><br/><br/>
# Retrieve Keyword
To retrieve the details of an existing keyword you need to supply the unique id of the keyword. Since an keyword ID is not globally unique, you need to prepend its parent object (ad group) ID to it. 
<br> For example `789789789_123123123`, where the first number is the ad group ID and the second is the ID of keyword to be retrieved.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number  | True
 

#### Example Request
```javascript
const ad = await customer.keywords.retrieve('987987987_123123123')
```

### Returns
Returns a keyword object if a valid identifier was provided. 
#### Example Response
```json
{
    quality_info: {
        quality_score: 6,
        creative_quality_score: 'AVERAGE',
        post_click_quality_score: 'AVERAGE',
        search_predicted_ctr: 'AVERAGE' 
    },
    ad_group: 'customers/456456456/adGroups/987987987',
    effective_cpc_bid_micros: '1000000',
    effective_cpm_bid_micros: '10000',
    effective_cpc_bid_source: 'ADGROUP',
    effective_cpm_bid_source: 'ADGROUP',
    type: 'KEYWORD',
    criterion_id: '123123123',
    keyword: { 
        text: 'Test keyword', 
        match_type: 'BROAD' 
    },
    negative: false 
}
```




<br/><br/><br/>
# List All Keywords
Retrieves a list of all ad group's keywords. You need to provide a list of fields to be retrieved for each keyword. You can also set a limit on the number of objects to be returned.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `ad_group_id`  | String / Number  | True
 `fields`  | Array of strings  | True
 `limit`  | Number  | False
 `constraints`  | Object  | False


#### Example Request
```javascript
const keywords = await customer.keywords.list({
    ad_group_id: 123123123,
    fields: ['keyword.text', 'keyword.match_type']
})

```

### Returns
Returns an array of up to limit keywords. 

#### Example Response
```json
{
    results: [
        '0': { 
            ad_group_criterion: {
                keyword: {
                    text: 'Test keyword',
                    match_type: 'BROAD'
                }
            } 
        },
        '1': { 
            ad_group_criterion: {
                keyword: {
                    text: 'Test keyword 2',
                    match_type: 'EXACT'
                }
            } 
        },
        '2': { 
            ad_group_criterion: {
                keyword: {
                    text: 'Test keyword 3',
                    match_type: 'EXACT'
                }
            } 
        },    ],
    total_results_count: 3,
    fieldMask: 'adGroupCriterion.keyword.text,adGroupCriterion.keyword.matchType'
}
```


<br/><br/><br/>
# Update Keyword
Updates the specified keyword by setting the values of the parameters passed. Any parameters not provided will be left unchanged. **Note:** You need to pass the unique ID composed of both the ad group ID and the keyword ID.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String | True
 `update`  | Object  | True

#### Example Request
```javascript
await customer.keywords.update({
    id: '987987987_123123123',
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
    id: "123123123",
    resource_name: "customers/456456456/adGroupCriteria/987987987_123123123"
}
```


<br/><br/><br/>
# Delete Keyword
Operation not available for this entity.