---
order: 2.1
type: manual
entity: authentication
title: Authentication
---

## Authentication

Before you can use the Google Ads API, you'll need to gather some authentication. You'll need:

-   **Client id** and **client secret**: These are your OAuth credentials. You'll find them in your [Google Cloud Console](https://console.cloud.google.com/apis/api/googleads.googleapis.com/). If you don't already have these tokens, see [google's instructions](https://developers.google.com/google-ads/api/docs/oauth/cloud-project).
-   **Developer token**: You'll find this in your Google Ads account, in the API Center. You will need to apply for one. 

Then, for every Google Ads account you want to access, you'll need:

-   **Customer account ID**: This is the CID of the account you want to access, which will look like `xxx-xxx-xxxx`.
-   **Login customer ID** _(only required if accessing the account via an MCC)_: This is usually the CID of the highest-level account in your MCC structure, also in the format `xxx-xxx-xxxx`.
-   **Linked customer ID** : Only required for methods that update the resources of an entity when permissioned via Linked Accounts in the Google Ads UI. [Read more](https://support.google.com/google-ads/answer/7365001)
-   **Refresh token**: You'll get this token when somebody authorises you to query their Google Ads account via OAuth. To get started, you can use https://refresh-token-helper.opteo.com/ to generate a single refresh token.


```javascript
import { GoogleAdsApi } from 'google-ads-api'

const client = new GoogleAdsApi({
    client_id: '<YOUR_CLIENT_ID>',
    client_secret: '<YOUR_CLIENT_SECRET>',
    developer_token: '<YOUR_DEVELOPER_TOKEN>',
})

const customer = client.Customer({
    customer_account_id: '123-123-123',
    login_customer_id: '456-456-456', // Optionally provide a login-customer-id
    linked_customer_id: '789-789-789', // Optionally provide a linked-customer-id
    refresh_token: '<YOUR_REFRESH_TOKEN>',
})

// If done correctly, you should now be able to list the campaigns in the account 123-123-123
customer.campaigns.list()

```

