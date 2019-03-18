import GoogleAdsApi from './index'
import config from './config'

export const CID = config.cid
export const CAMPAIGN_ID = config.testing.campaign_id
export const BUDGET_ID = 1536143460

export function newCustomer() {
    const client = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })
    return client.Customer({
        customer_account_id: config.cid,
        login_customer_id: config.login_customer_id,
        refresh_token: config.refresh_token,
    })
}

export function getRandomName(entity: string) {
    return `test-${entity}-${(Math.random() * 100000 + 1).toFixed(0)}`
}
