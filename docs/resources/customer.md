# Customer Object

#### Properties 
| Property            |  Type  | Description |
| :------------------ | :------| :-----------|
| `resource_name`     | String | The resource name of the customer | 
| `id`                | String | The ID of the customer |
| `descriptive_name`  | String | Optional, non-unique descriptive name of the customer |
| `currency_code`     | String | The currency in which the account operates |
| `time_zone`         | String | The local timezone ID of the customer |
| `auto_tagging_enabled`| Boolean | Whether auto-tagging is enabled for the customer  |
| `has_partners_badge`| Boolean | Whether the Customer has a Partners program badge |

<!-- {
	"resourceName": "customers/9262111890",
	"id": "9262111890",
	"descriptiveName": "Test Account created with ManagedCustomerService",
	"currencyCode": "EUR",
	"timeZone": "Europe/London",
	"autoTaggingEnabled": false,
	"hasPartnersBadge": false
} -->

# Retrieve Customer
[..]
### Arguments
No arguments required.

#### Example Request
```javascript  
const customer_data = await customer.retrieve()
```

### Returns
[...]

#### Example Response
```json
{
    resource_name: "customers/1234123412",
    id: 1234123412,
    descriptive_name: "Test Account",
    currency_code: "EUR",
    time_zone: "Europe/London",
    auto_tagging_enabled: false,
    has_partners_badge: false
}
```

# Update Customer
N/A

# Search
[Search Query](/resources/search.md)
