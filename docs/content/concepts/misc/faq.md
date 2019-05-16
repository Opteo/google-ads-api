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

**When Google releases their own Node client for Google Ads, will this library still be relevant?**
Yes. We've already auto-generated a client with Google's protocol buffers, called [google-ads-node](https://github.com/Opteo/google-ads-node). It's very feature complete, and this library is built on top of it. When google releases their own node client, we may deprecate google-ads-node and refractor this library to use it instead.

**Do you have any examples on how to use this library?**
We're working on a robust set of examples. You can find the ones we've already completed [in this branch](https://github.com/Opteo/google-ads-api/tree/561e5b4782a3a184c920d04aefdbc6e7547f0ae4/examples).

