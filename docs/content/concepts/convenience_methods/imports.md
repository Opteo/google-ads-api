---
order: 6.1
type: manual
entity: utilities
title: Utilities
---

## Utilities


This library exports a set of helper methods that can assist you during development.

* `fromMicros` : Converts micro value to a normal number 
* `toMicros`: Converts a normal number to a micro value  
* `getEnumString`: Get the value of an enum as a string (instead of the default number value) 

```javascript
import { fromMicros, toMicros, getEnumString /* , enums, types, GoogleAdsApi */ } from 'google-ads-api'

fromMicros(123300000) // 123.3
toMicros(123.3) // 123300000

// You must pass the enum name and the value
getEnumString('AdvertisingChannelType', enums.AdvertisingChannelType.DISPLAY) // "DISPLAY"
getEnumString('AdvertisingChannelType', 3) // "DISPLAY"
```

