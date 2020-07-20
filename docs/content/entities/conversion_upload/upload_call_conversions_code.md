---
title: Upload ConversionCall
order: 2.1
type: upload_code
entity: ConversionUpload
---

```javascript
// uploading CallConversions

const call_conversions: CallConversion[] = [
  {
    // Your CallConversion here
  },
  {
    // Your CallConversion here
  },
]

// Getting identifying information for all uploads
const result = await customer.conversionUploads.uploadCallConversions(call_conversions, {}, true)

// Getting identifying information for all uploads with options
const result = await customer.conversionUploads.uploadCallConversions(
  call_conversions,
  {
    validate_only: true,
  },
  true
)

// Getting identifying information for the first uploaded item
const result = await customer.conversionUploads.uploadCallConversions(call_conversions)
```

```javascript

// Example result

{
	results: [
		{
			caller_id: '+442087599036',
			call_start_date_time: '2019-01-01 12:32:45-08:00',
			conversion_action: `customer/${CID}/conversionAction/123123123`,
			conversion_date_time: '2019-01-01 12:32:45-08:00',
		}
	],
	partial_failure_error : null,
	request: { /* your request object */ }
}

```
