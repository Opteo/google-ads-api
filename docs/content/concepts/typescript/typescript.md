---
order: 7.1
type: manual
entity: typescript
title: Using Typescript
---


## Typescript

All arguments and return types in this library have been carefully set up with typescript. We also expose every single type in the google ads api via the `types` export, should you choose to use them in your own code:

```typescript
import { types } from 'google-ads-api'

const campaign: types.Campaign = {
    id: 123123,
    some_wrong_field: false, // The type checker won't allow this.
    name: [1, 2, 3], // `name` should be a string, so this will also throw an error.
}
```

The [`resources.ts`](https://github.com/Opteo/google-ads-node/blob/master/src/lib/resources.ts) file (found in our companion library) is a good reference for all exported types. For example, you'll find:

```typescript
// Example interface for the v1 common "TextAdInfo" entity in the Google Ads API

/* .google.ads.googleads.v1.common.TextAdInfo */
export interface TextAdInfo {
    headline?: string
    description_1?: string
    description_2?: string
}
```

