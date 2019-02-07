import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

const getRandomCampaignName = () =>
    `test-campaign-${(Math.random() * 1000000 + 1).toFixed(0)} (created during library test)`

describe('Campaigns', async () => {
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

    let new_campaign_id = ''
    let new_campaign_id_1 = ''
    let new_campaign_id_2 = ''

    it('Lists All Campaigns', async () => {
        expect.assertions(1)
        const campaigns = await customer.campaigns.list({
            limit: 3,
            constraints: [{ status: 'ENABLED' }],
            order_by: 'id',
        })
        expect(campaigns).toHaveLength(3)
    })

    it('Creates New Campaign', async done => {
        expect.assertions(1)

        const response = await customer.campaignBudgets.create({
            amount_micros: 12000000,
            explicitly_shared: false,
        })

        const new_campaign = await customer.campaigns.create({
            name: getRandomCampaignName(),
            budget_id: response.id,
            advertising_channel_type: 'DISPLAY',
            target_spend: {
                cpc_bid_ceiling_micros: 1000000,
            },
        })

        expect(new_campaign).toEqual({
            id: expect.any(String),
            resource_name: expect.any(String),
        })

        new_campaign_id = new_campaign.id
        done()
    })

    it('Creates 2 New Campaigns', async done => {
        expect.assertions(1)

        const response = await customer.campaignBudgets.create({
            amount_micros: 12000000,
            explicitly_shared: true,
            name: `test-budget-${(Math.random() * 1000000 + 1).toFixed(0)}`,
        })

        const new_campaigns_config = [
            {
                name: getRandomCampaignName(),
                budget_id: response.id,
                advertising_channel_type: 'DISPLAY',
                target_spend: {
                    cpc_bid_ceiling_micros: 1000000,
                },
            },
            {
                name: getRandomCampaignName(),
                budget_id: response.id,
                advertising_channel_type: 'SEARCH',
                target_spend: {
                    cpc_bid_ceiling_micros: 1000000,
                },
            },
        ]

        const new_campaigns = await customer.campaigns.create(new_campaigns_config)

        expect(new_campaigns).toEqual({
            id: expect.any(String),
            resource_name: expect.any(String),
        })

        const campaign_ids = new_campaigns.id.split('_')

        expect(campaign_ids.length).toEqual(2)

        new_campaign_id_1 = campaign_ids[0]
        new_campaign_id_2 = campaign_ids[1]

        done()
    })

    it('Retrieves Single Campaign', async () => {
        expect.assertions(1)
        const campaign = await customer.campaigns.retrieve(new_campaign_id)
        expect(campaign.id).toEqual(new_campaign_id)
    })

    it('Updates Campaign Name', async () => {
        const new_campaign_name = getRandomCampaignName()
        const config = {
            id: new_campaign_id,
            update: {
                name: new_campaign_name,
            },
        }
        expect.assertions(1)
        await customer.campaigns.update(config)
        const campaign = await customer.campaigns.retrieve(new_campaign_id)
        expect(campaign.name).toBe(new_campaign_name)
    })

    it('Updates Multiple Campaign Names', async () => {
        const new_campaign_name_1 = getRandomCampaignName()
        const config_1 = {
            id: new_campaign_id_1,
            update: {
                name: new_campaign_name_1,
            },
        }

        const new_campaign_name_2 = getRandomCampaignName()
        const config_2 = {
            id: new_campaign_id_2,
            update: {
                name: new_campaign_name_2,
            },
        }

        expect.assertions(1)
        await customer.campaigns.update([config_1, config_2])

        const campaign_1 = await customer.campaigns.retrieve(new_campaign_id_1)
        expect(campaign_1.name).toBe(new_campaign_name_1)

        const campaign_2 = await customer.campaigns.retrieve(new_campaign_id_2)
        expect(campaign_2.name).toBe(new_campaign_name_2)
    })

    it('Deletes Campaign', async () => {
        expect.assertions(1)

        await customer.campaigns.delete(new_campaign_id)
        const campaign = await customer.campaigns.retrieve(new_campaign_id)
        expect(campaign.status).toBe('REMOVED')

        await customer.campaigns.delete(new_campaign_id_1)
        const campaign1 = await customer.campaigns.retrieve(new_campaign_id_1)
        expect(campaign1.status).toBe('REMOVED')

        await customer.campaigns.delete(new_campaign_id_2)
        const campaign2 = await customer.campaigns.retrieve(new_campaign_id_2)
        expect(campaign2.status).toBe('REMOVED')
    })
})
