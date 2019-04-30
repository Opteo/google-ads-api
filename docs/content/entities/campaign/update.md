---
title: Update Campaign
order: 5
type: update
entity: Campaign
---

### Update Campaign

This section describes how to update a Campaign.

```javascript
// Updating the entity

const campaign = {
  resource_name: 'customers/9262111890/campaigns/1568629385', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.campaigns.update(campaign)
```

```javascript
// Example result
;['customers/9262111890/campaigns/1568629385']
```
