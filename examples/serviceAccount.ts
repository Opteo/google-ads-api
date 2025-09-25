import { auth, JWT } from "google-auth-library";
import { GoogleAdsApi } from "../src";

const LOGIN_CUSTOMER_ID = "xxx"; // Adwords manager account (optional)
const GOOGLE_DEVELOPER_TOKEN = "yyy"; // Your developer token
const LINKED_CUSTOMER_ID = "zzz"; // The customer account you want to access

async function main() {
  // Service account key (should not be in your code but usually loaded from secret, environment or file)
  // See https://youtu.be/8MYzuG7JzLs?si=0aoBVEQI7wa-b3uh on how to get one
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

  console.log(
    "Successfully authenticated with Google Ads API using service account"
  );

  // Create GoogleAdsApi client with service account auth
  const client = new GoogleAdsApi({
    auth_client: authClient,
    developer_token: GOOGLE_DEVELOPER_TOKEN,
  });

  // Create a customer instance - no refresh_token needed for service accounts
  const customer = client.Customer({
    customer_id: LINKED_CUSTOMER_ID,
    login_customer_id: LOGIN_CUSTOMER_ID, // optional
  });

  try {
    // Example: Search for campaigns
    const campaigns = await customer.query(`
      SELECT 
        campaign.id, 
        campaign.name, 
        campaign.network_settings.target_content_network 
      FROM campaign 
      ORDER BY campaign.id
    `);

    console.log("Campaigns:", campaigns);

    // Example: List accessible customers using service account
    const accessibleCustomers = await client.listAccessibleCustomers();
    console.log("Accessible customers:", accessibleCustomers);
  } catch (error) {
    console.error("Error:", error);
  }
}

main().catch(console.error);
