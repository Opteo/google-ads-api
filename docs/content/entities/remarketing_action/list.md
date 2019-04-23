---
type: list
entity: RemarketingAction
title: List RemarketingAction
order: 3
---

This `customer.remarketingActions.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript

// Listing all the remarketingActions in the account
let result = await customer.remarketingActions.list()

// Listing with constraints and a limited number of results
let result = await customer.remarketingActions.list({
    constraints: [{
    	key : 'remarketing_action.some_field',
    	op : '=',
    	val : 'yellow submarine'
	}],
    limit: 15,
})


// Here's what the result might look like
result === [// Todo: add example list() return here]

```
