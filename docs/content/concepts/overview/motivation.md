---
order: 1.3
type: manual
entity: overview
title: Goals
---

### Goals

When we first started using AdWords, we found the API difficult to use. SOAP, in particular, was a huge pain to use with Node.

The Google Ads API is a massive step in the right direction, but we still don't feel that it still isn't quite as developer friendly as it could be. We have written two libraries to fill that gap:

-   [`google-ads-node`](https://github.com/Opteo/google-ads-node) is a low-level Node implementation of the API which imitates the stucture of the other client libraries.
-   `google-ads-api` (this library) is a wrapper around `google-ads-node` to provide a better developer experience.
