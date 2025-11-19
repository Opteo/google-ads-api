# Service Account Authentication Support

This document explains how to use the Google Ads API with Google Cloud Service Account authentication instead of OAuth2. A service account is an account that belongs to your app instead of to an individual end user. Service accounts enable server-to-server interactions between a web app and a Google service. Your app calls Google APIs on behalf of the service account, so users aren't directly involved.

## Overview

The Google Ads API library now supports both OAuth2 and service account authentication methods:

1. **OAuth2 (existing)**: Uses `client_id`, `client_secret`, and `refresh_token`, good for user-facing applications
2. **Service Account (new)**: Uses a service account key file, good for server-to-server applications

[Depending on your application type](https://developers.google.com/google-ads/api/docs/get-started/choose-application-type) choose between using User Authentication with OAuth2 or a using a service account.

### Key Differences

#### OAuth2 Authentication

- Requires `client_id`, `client_secret`, `developer_token`
- Requires `refresh_token` for each customer
- Good for user-facing applications

#### Service Account Authentication

- Requires service account key file and `developer_token`
- No `refresh_token` needed
- Good for server-to-server applications

See more in [this guide](https://developers.google.com/google-ads/api/docs/get-started/choose-application-type).

## Preparation

Follow [this guide](https://developers.google.com/google-ads/api/docs/oauth/service-accounts#setting_up_service_account_access) on how to set up a service account and share your Google Ads account with it. Make sure you also have [the `developer_token`](https://developers.google.com/google-ads/api/docs/get-started/dev-token) from your Google Ads manager account and that the [Google Ads API is enabled](https://developers.google.com/google-ads/api/docs/get-started/oauth-cloud-project#enable-api) in your Google Cloud project.

## Using Service Account Authentication

```typescript
import { GoogleAdsApi } from "google-ads-api";
import { auth, JWT } from "google-auth-library";

// Service account key (should not be in your code but usually loaded from secret, environment or file)
// This is also the JSON you download when creating the service account in Google Cloud Console
const serviceAccountKey = {
  type: "service_account",
  project_id: "your-project-id",
  private_key_id: "your-private-key-id",
  private_key: "your-private-key",
  client_email: "your-client-email",
  client_id: "your-client-id",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://accounts.google.com/o/oauth2/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "your-cert-url",
};

// Create JWT auth client from service account key
const authClient = auth.fromJSON(serviceAccountKey) as JWT;
authClient.scopes = ["https://www.googleapis.com/auth/adwords"];
await authClient.authorize();

// Create GoogleAdsApi client with service account auth
const client = new GoogleAdsApi({
  auth_client: authClient,
  developer_token: "YOUR_DEVELOPER_TOKEN",
});

// Create a customer instance (no refresh_token needed)
const customer = client.Customer({
  customer_id: "CUSTOMER_ID",
  login_customer_id: "LOGIN_CUSTOMER_ID", // optional
});

// Use as normal
const campaigns = await customer.query(
  "SELECT campaign.id, campaign.name FROM campaign"
);
```
