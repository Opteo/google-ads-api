import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

describe('Debugging', async () => {
    const lib_instance = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })

    const customer = lib_instance.Customer({
        customer_account_id: config.cid,
        manager_cid: config.manager_cid,
        refresh_token: config.refresh_token,
    })

    it('Lists All Campaigns', async () => {
        expect.assertions(1)
        const campaigns = await customer.campaigns.list({
            limit: 3,
            constraints: [{ status: 'ENABLED' }],
            order_by: 'id',
        })
        expect(campaigns).toHaveLength(3)
    })
})
