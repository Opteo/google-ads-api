# Search Query
[...]

[Google Ads Query Language Grammar](/?id=google-ads-query-language)

For more information on the Google Ads Query Language, visit [Google Ads Api Docs](https://developers.google.com/google-ads/api/docs/query/overview).

### Arguments
 Argument       | Type    | Required
 :------------- | :------ | :-------- |
 `query`  | String  | True

#### Example Request
```javascript
const data = await customer.search(`
    SELECT 
        campaign.id, 
        campaign.name, 
        ad_group.id, 
        ad_group.name 
    FROM ad_group
`)
```

### Returns
[...]

#### Example Response
```json
{ 
    results: { 
        '0': { campaign: [Object], ad_group: [Object] },
        '1': { campaign: [Object], ad_group: [Object] },
        '2': { campaign: [Object], ad_group: [Object] },
        '3': { campaign: [Object], ad_group: [Object] },
        '4': { campaign: [Object], ad_group: [Object] },
        '5': { campaign: [Object], ad_group: [Object] },
        '6': { campaign: [Object], ad_group: [Object] },
        '7': { campaign: [Object], ad_group: [Object] },
        '8': { campaign: [Object], ad_group: [Object] },
        '9': { campaign: [Object], ad_group: [Object] },
        '10': { campaign: [Object], ad_group: [Object] },
        '11': { campaign: [Object], ad_group: [Object] },
        '12': { campaign: [Object], ad_group: [Object] },
        '13': { campaign: [Object], ad_group: [Object] },
        '14': { campaign: [Object], ad_group: [Object] },
        '15': { campaign: [Object], ad_group: [Object] },
        '16': { campaign: [Object], ad_group: [Object] },
        '17': { campaign: [Object], ad_group: [Object] },
        '18': { campaign: [Object], ad_group: [Object] },
        '19': { campaign: [Object], ad_group: [Object] },
        '20': { campaign: [Object], ad_group: [Object] } 
    },
    total_results_count: '21',
    field_mask: 'campaign.id,campaign.name,adGroup.id,adGroup.name' 
}
```