---
type: list
entity: KeywordPlanNegativeKeyword
title: List KeywordPlanNegativeKeyword
order: 3
---

This `customer.keywordPlanNegativeKeywords.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript

// Listing all the keywordPlanNegativeKeywords in the account
let result = await customer.keywordPlanNegativeKeywords.list()

// Listing with constraints and a limited number of results
let result = await customer.keywordPlanNegativeKeywords.list({
    constraints: [{
    	key : 'keyword_plan_negative_keyword.some_field',
    	op : '=',
    	val : 'yellow submarine'
	}],
    limit: 15,
})


// Here's what the result might look like
result === [// Todo: add example list() return here]

```
