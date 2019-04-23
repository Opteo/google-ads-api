---
title: Get CampaignLabel
order: 2
type: get
entity: CampaignLabel
---

The `customer.campaignLabels.get()` method returns all fields for one CampaignLabel, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.campaignLabels.get('customers/3827277046/campaignLabels/729914321~898377018')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/3827277046/campaignLabels/729914321~898377018',
        campaign: 'customers/3827277046/campaigns/729914321',
        label: 'customers/3827277046/labels/898377018',
    }
```
