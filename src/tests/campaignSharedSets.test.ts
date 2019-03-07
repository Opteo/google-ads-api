import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

describe('Campaign Shared Sets', async () => {
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

    const campaign_id = config.testing.campaign_id
    const shared_set_id = config.testing.shared_set_id
    const campaign_shared_set = `${campaign_id}~${shared_set_id}`

    it('Creates New Campaign Shared Set', async done => {
        expect.assertions(1)
        const res = await customer.campaignSharedSets.link({
            campaign_id,
            shared_set_id,
        })

        expect(res.id).toEqual(campaign_shared_set)
        done()
    })

    it('Lists Campaign Shared Sets', async () => {
        expect.assertions(1)
        const shared_sets = await customer.campaignSharedSets.list()
        expect(shared_sets).toBeInstanceOf(Array)
    })

    it('Retrieves Single Campaign Shared Set', async () => {
        expect.assertions(1)
        const shared_set = await customer.campaignSharedSets.retrieve(campaign_shared_set)
        expect(shared_set.shared_set).toContain(shared_set_id)
    })

    it('Unlinks Campaign Shared Set', async () => {
        expect.assertions(1)
        await customer.campaignSharedSets.delete(campaign_shared_set)
        const shared_set = await customer.campaignSharedSets.retrieve(campaign_shared_set)

        expect(shared_set.status).toEqual('REMOVED')
    })
})
