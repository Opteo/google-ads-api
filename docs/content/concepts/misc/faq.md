---
order: 8.2
type: manual
entity: misc
title: FAQ
---

## FAQ

**I'm getting errors that my bids or budgets are too small. Why?**
All monetary values are set and fetched in `micros`. These are 1,000,000x bigger than the actual amount. Use our utility functions `toMicros` and `fromMicros` to convert.

**Where are my keywords?**
Keywords are hidden away in AdGroupCriterion -> keyword. Keywords are just one of many types of targeting "Criteria", meaning that they modify the targeting of ads.

**Can I run this in a browser?**
No. There's no way to hide your tokens without using a proxy, which would need to be on your server anyway.

**Can I run this in a serverless environment? (lamda, etc)**
Yes. Note that this library uses several NodeJS native methods (fs, crypto), so webworker-like environments such as CloudFlare workers won't work.
