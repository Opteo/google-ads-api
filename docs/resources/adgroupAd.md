# Ad Group Ad Object


#### Properties
| Property        |  Type  | Description |
| :------------- | :-------------| :-----|
| `resource_name`     | String |  | 
| `ad_group`     | String |  | 
| `status`     | String |  | 
|      | |  | 
| ad     |  |  | 
| `ad.id`     | String / Number |  | 
| `ad.final_urls`     | String |  | 
| `ad.final_mobile_urls`     | String |  | 
| `ad.display_url`     | String |  | 
| `ad.type`     | String |  | 
| `ad.tracking_url_template`     | String |  | 
|      |  |  | 
| ad.url_custom_parameters     |  |  | 
| `ad.url_custom_parameters.key`     | String |  | 
| `ad.url_custom_parameters.value`     | String |  | 
|      | |  | 
| ad.call_only_ad  | |  | 
| `ad.call_only_ad.business_name`  | String |  | 
| `ad.call_only_ad.call_tracked`  | Boolean |  | 
| `ad.call_only_ad.country_code`  | String |  | 
| `ad.call_only_ad.description1`  | String |  | 
| `ad.call_only_ad.description2`  | String |  | 
| `ad.call_only_ad.disable_call_conversion`  | Boolean |  | 
| `ad.call_only_ad.phone_number`  | String |  | 
| `ad.call_only_ad.phone_number_verification_url`  | String |  | 
|   |  |  | 
| ad.dynamic_search_ad  |  |  | 
| `ad.dynamic_search_ad.description1`  | String |  | 
| `ad.dynamic_search_ad.description2`  | String |  | 
|   |  |  | 
| ad.expanded_dynamic_search_ad |  |  | 
| `ad.expanded_dynamic_search_ad.description` | String |  | 
|   |  |  | 
| ad.expanded_text_ad |  |  | 
| `ad.expanded_text_ad.description` | String |  | 
| `ad.expanded_text_ad.headline_part1` | String |  | 
| `ad.expanded_text_ad.headline_part2` | String |  | 
| `ad.expanded_text_ad.path1` | String |  | 
| `ad.expanded_text_ad.path2` | String |  | 
|   |  |  | 
| ad.hotel_ad |  |  | 
|   |  |  | 
| ad.responsive_display_ad |  |  | 
| `ad.responsive_display_ad.business_name` | String |  | 
| `ad.responsive_display_ad.long_headline` | String |  | 
| `ad.responsive_display_ad.short_headline` | String |  | 
|   |  |  | 
| ad.text_ad |  |  | 
| `ad.text_ad.description1` | String |  | 
| `ad.text_ad.description2` | String |  | 
| `ad.text_ad.headline` | String |  | 



<br/><br/><br/>
# Create Ad Group Ad
To create new ad [...]
### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
`ad_group_id` | String / Number | True
`ad` | Object | True

#### Example Request
```javascript  
await customer.ads.create({
    ad_group_id: 123123123,
    ad: {
        final_urls: "http://hello.com",
        expanded_text_ad: {
            headline_part1: "headline part one",
            headline_part2: "headline part two",
            description: "my description",
            path1: "path one",
            path2: "path two",
        }
    }
})

```

### Returns
Returns a resource name if successfull.

#### Example Response
```json
{
    id: "123123123",
    resource_name: "customers/456456456/adGroupAds/789789789_123123123"
}
```


<br/><br/><br/>
# Retrieve Ad Group Ad
Retrieves the details of an existing ad. You need to supply the unique id of the ad to be retrieved. Since an ad group ad ID is not globally unique, you need to prepend its parent object (ad group) ID to it. 
<br> For example `789789789_123123123`, where the first number is the ad group ID and the second is the ad ID.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String / Number  | True
 

#### Example Request
```javascript
const ad = await customer.ads.retrieve('789789789_123123123')
```

### Returns
Returns an ad object if a valid identifier was provided. 
#### Example Response
```json
{
    resource_name: "customers/9262111890/adGroupAds/789789789_123123123",
    status: "PAUSED",
    ad_group: "customers/9262111890/adGroups/789789789",
    ad: {
        id: "123123123",
        final_urls: [
            "http://hello.com"
        ],
        display_url: "",
        type: "EXPANDED_TEXT_AD",
        expanded_text_ad: {
            headline_part1: "headline part one",
            headline_part2: "headline part two",
            description: "my description",
            path1: "path one",
            path2: "path two"
        }
    }
}
```

<br/><br/><br/>
# List All Ad Group Ads
Retrieves a list of all ad group's ads. You need to provide a list of fields to be retrieved for each ad. You can also set a limit on the number of objects to be returned.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `ad_group_id`  | String / Number  | True
 `fields`  | Array of strings  | True
 `limit`  | Number  | False
 `constraints`  | Object  | False


#### Example Request
```javascript
// Lists all ad group's ads with id and status
const ad_group_ads = await customer.ads.list({
    ad_group_id: 123123123,
    fields: ['ad.id', 'status']
})
```

### Returns
Returns an array of up to limit ads. 

#### Example Response
```json
{
    results: [
        {
            resource_name: "customers/9262111890/adGroupAds/789789789_123123123",
            ad_group: "customers/9262111890/adGroups/789789789",
            ad: {
                id: "123123123"
            },
            status: "ENABLED",
        },
        {
            resource_name: "customers/9262111890/adGroupAds/789789789_890890809",
            ad_group: "customers/9262111890/adGroups/789789789",
            ad: {
                id: "890890809"
            },
            status: "PAUSED",
        },
    ],
    total_results_count: "2",
    fieldMask: "adGroupAd.status,adGroupAd.ad.id"
}
```

<br/><br/><br/>
# Update Ad Group Ad
Updates the specified ad by setting the values of the parameters passed. Any parameters not provided will be left unchanged. **Note:** You need to pass the unique ID composed of both the ad group ID and the ad ID.

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `id`  | String | True
 `update`  | Object  | True

#### Example Request
```javascript
await customer.ads.update({
    id: '456456456_123123123',
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
    resource_name: "customers/123123123/adGroupAds/456456456_123123123"
}
```

<br/><br/><br/>
# Delete Ad Group Ad
Operation not available for this entity.