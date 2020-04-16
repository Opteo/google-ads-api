import { GoogleAdsApi } from './index'
import { GoogleAdsNodeOptions } from './grpc'

export const CID = process.env.GADS_CID as string
export const CID_WITH_METRICS = process.env.GADS_CID_WITH_METRICS as string
export const CAMPAIGN_ID = +(process.env.GADS_CAMPAIGN_ID as string)
export const BUDGET_ID = +(process.env.GADS_BUDGET_ID as string)
export const ADGROUP_ID = +(process.env.GADS_ADGROUP_ID as string)

export const newGadsAPIClient = (() => {
    let client: GoogleAdsApi

    return () => {
        if (!client) {
            client = new GoogleAdsApi({
                client_id: process.env.GADS_CLIENT_ID as string,
                client_secret: process.env.GADS_CLIENT_SECRET as string,
                developer_token: process.env.GADS_DEVELOPER_TOKEN as string,
            })
        }

        return client
    }
})()

export function newCustomer(client?: GoogleAdsApi) {
    if (!client) {
        client = newGadsAPIClient()
    }
    return client.Customer({
        customer_account_id: process.env.GADS_CID as string,
        login_customer_id: process.env.GADS_LOGIN_CUSTOMER_ID as string,
        refresh_token: process.env.GADS_REFRESH_TOKEN as string,
    })
}

export function newCustomerWithMetrics(client?: GoogleAdsApi) {
    if (!client) {
        client = newGadsAPIClient()
    }
    return client.Customer({
        customer_account_id: process.env.GADS_CID_WITH_METRICS as string,
        login_customer_id: process.env.GADS_LOGIN_CUSTOMER_ID_WITH_METRICS as string,
        refresh_token: process.env.GADS_REFRESH_TOKEN_WITH_METRICS as string,
    })
}

export function newMccCustomer(client?: GoogleAdsApi) {
    if (!client) {
        client = newGadsAPIClient()
    }
    return client.Customer({
        customer_account_id: process.env.GADS_LOGIN_CUSTOMER_ID as string,
        login_customer_id: process.env.GADS_LOGIN_CUSTOMER_ID as string,
        refresh_token: process.env.GADS_REFRESH_TOKEN as string,
    })
}

export function newCustomerWithNodeOptions(options: GoogleAdsNodeOptions) {
    const client = newGadsAPIClient()
    return client.Customer({
        customer_account_id: process.env.GADS_CID as string,
        login_customer_id: process.env.GADS_LOGIN_CUSTOMER_ID as string,
        refresh_token: process.env.GADS_REFRESH_TOKEN as string,
        ...options,
    })
}

export function getRandomName(entity: string) {
    return `test-${entity}-${(Math.random() * 100000 + 1).toFixed(0)}`
}


export async function getCustomerAccessToken() {

    const data =  JSON.parse(process.env.GOOGLE_ADS_SERVICE_ACCOUNT as string);
    const options = {
        developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN as string,
        client_id: data.client_id,
        client_secret: ''
    }

    const service_account = {
        private_key: data.private_key,
        auth_uri: data.auth_uri,
        token_uri: data.token_uri,
        client_email: data.client_email,
        sub: data.sub
    };

    const client = new GoogleAdsApi(options)
    await client.requestAndSetAccessToken(service_account)
    return client.Customer({"customer_account_id": process.env.GOOGLE_ADS_CUSTOMER_ID})
}
