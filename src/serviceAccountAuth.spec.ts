import { auth } from "google-auth-library";
import {
  Client,
  isOAuth2Options,
  isServiceAccountOptions,
  ServiceAccountAuth,
} from "../src/client";

describe("Service Account Authentication", () => {
  const mockServiceAccountKey = {
    type: "service_account",
    project_id: "test-project-id",
    private_key_id: "test-private-key-id",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMOCK_PRIVATE_KEY\n-----END PRIVATE KEY-----",
    client_email: "test@test-project-id.iam.gserviceaccount.com",
    client_id: "123456789",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://accounts.google.com/o/oauth2/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/oauth2/v1/certs/test%40test-project-id.iam.gserviceaccount.com",
  };

  describe("Type Guards", () => {
    it("should identify service account options correctly", () => {
      const authClient = auth.fromJSON(mockServiceAccountKey);
      const serviceAccountOptions = {
        auth_client: authClient as ServiceAccountAuth,
        developer_token: "test-token",
      };

      expect(isServiceAccountOptions(serviceAccountOptions)).toBe(true);
      expect(isOAuth2Options(serviceAccountOptions)).toBe(false);
    });

    it("should identify OAuth2 options correctly", () => {
      const oauthOptions = {
        client_id: "test-client-id",
        client_secret: "test-client-secret",
        developer_token: "test-token",
      };

      expect(isOAuth2Options(oauthOptions)).toBe(true);
      expect(isServiceAccountOptions(oauthOptions)).toBe(false);
    });
  });

  describe("Client with Service Account", () => {
    it("should accept service account authentication options", () => {
      const authClient = auth.fromJSON(mockServiceAccountKey);

      const client = new Client({
        auth_client: authClient as ServiceAccountAuth,
        developer_token: "test-developer-token",
      });

      expect(client).toBeInstanceOf(Client);
    });

    it("should create a customer without refresh_token for service accounts", () => {
      const authClient = auth.fromJSON(mockServiceAccountKey);
      const client = new Client({
        auth_client: authClient as ServiceAccountAuth,
        developer_token: "test-developer-token",
      });

      const customer = client.Customer({
        customer_id: "123-456-7890",
      });

      expect(customer).toBeDefined();
    });
  });
});
