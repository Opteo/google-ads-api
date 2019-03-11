import GoogleAdsApi from '../index'
import config from '../config'
import { CampaignStatus } from 'google-ads-node/build/lib/enums'

jest.setTimeout(30000)

function newCustomer(customer_account_id: string, manager_cid: string, refresh_token: string) {
    const client = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })
    return client.Customer({
        customer_account_id,
        manager_cid,
        refresh_token,
    })
}

const CAMPAIGN_ID = config.testing.campaign_id

describe('campaigns', async () => {
    const customer = newCustomer(config.cid, config.manager_cid, config.refresh_token)

    describe('get', async () => {
        it('can retrieve a single campaign with an id', async () => {
            const campaign = await customer.campaigns.get(CAMPAIGN_ID)
            expect(campaign).toEqual(
                expect.objectContaining({
                    resource_name: `customers/${config.cid}/campaigns/${CAMPAIGN_ID}`,
                    id: CAMPAIGN_ID,
                })
            )
        })

        it("throws an error when the campaign doesn't exist", async () => {
            await expect(customer.campaigns.get(123)).rejects.toThrow('Resource not found')
        })
    })

    describe('list', async () => {
        it('can retrieve a list of campaigns with specified fields', async () => {
            const campaigns = await customer.campaigns.list({
                fields: ['id', 'name'],
            })
            expect(campaigns).toBeInstanceOf(Array)
            expect(campaigns[0]).toEqual({
                campaign: {
                    resource_name: expect.any(String),
                    id: expect.any(Number),
                    name: expect.any(String),
                },
            })
        })

        it('can retrieve a list of campaigns with constraints', async () => {
            const campaign_ids = await customer.campaigns.list({
                fields: ['id', 'status'],
                limit: 1,
                constraints: [
                    {
                        status: 'ENABLED',
                    },
                ],
            })
            expect(campaign_ids.length).toEqual(1)
            expect(campaign_ids[0]).toEqual({
                campaign: {
                    resource_name: expect.any(String),
                    id: expect.any(Number),
                    status: CampaignStatus.ENABLED,
                },
            })
        })

        it('throws an error when a field is invalid', async () => {
            await expect(customer.campaigns.list({ fields: ['pid'] })).rejects.toThrow('Unrecognized field')
        })
    })
})
