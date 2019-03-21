import { GoogleAdsApi } from './index'

export const CID = process.env.GADS_CID as string
export const CID_WITH_METRICS = process.env.GADS_CID_WITH_METRICS as string
export const CAMPAIGN_ID = +(process.env.GADS_CAMPAIGN_ID as string)
export const BUDGET_ID = +(process.env.GADS_BUDGET_ID as string)
export const ADGROUP_ID = +(process.env.GADS_ADGROUP_ID as string)

export function newCustomer() {
    const client = new GoogleAdsApi({
        client_id: process.env.GADS_CLIENT_ID as string,
        client_secret: process.env.GADS_CLIENT_SECRET as string,
        developer_token: process.env.GADS_DEVELOPER_TOKEN as string,
    })
    return client.Customer({
        customer_account_id: process.env.GADS_CID as string,
        login_customer_id: process.env.GADS_LOGIN_CUSTOMER_ID as string,
        refresh_token: process.env.GADS_REFRESH_TOKEN as string,
    })
}

export function newCustomerWithMetrics() {
    const client = new GoogleAdsApi({
        client_id: process.env.GADS_CLIENT_ID as string,
        client_secret: process.env.GADS_CLIENT_SECRET as string,
        developer_token: process.env.GADS_DEVELOPER_TOKEN as string,
    })
    return client.Customer({
        customer_account_id: process.env.GADS_CID_WITH_METRICS as string,
        login_customer_id: process.env.GADS_LOGIN_CUSTOMER_ID_WITH_METRICS as string,
        refresh_token: process.env.GADS_REFRESH_TOKEN_WITH_METRICS as string,
    })
}

export function getRandomName(entity: string) {
    return `test-${entity}-${(Math.random() * 100000 + 1).toFixed(0)}`
}
