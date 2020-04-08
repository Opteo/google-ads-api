---
title: Upload ConversionClick
order: 3.1
type: upload_code
entity: ConversionUpload
---

```javascript
// uploading ClickConversions

const click_conversions: ClickConversion[] = [
    {
        // Your ClickConversion here
    },
    {
        // Your ClickConversion here
    },
]

// Getting identifying information for all uploads
const result = await customer.conversionUploads.uploadClickConversions(click_conversions, {}, true)

// Getting identifying information for all uploads with options
const result = await customer.conversionUploads.uploadClickConversions(
    click_conversions,
    {
        validate_only: true,
    },
    true
)

// Getting identifying information for the first uploaded item
const result = await customer.conversionUploads.uploadClickConversions(click_conversions)
```

```javascript

// Example result

{
	results: [
		{
            gclid: '42812402112',
            conversion_action: 'beans',
            conversion_date_time: '2019-01-01 12:32:45-08:00',
            conversion_value: 320,
            currency_code: 'GBP',
            order_id: '32894129342',
            external_attribution_data: {
                external_attribution_credit: 925592,
                external_attribution_model: 'heinz',
            }

		}
	],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
