import { newCustomer, CAMPAIGN_ID, CID } from '../test_utils'

// @ts-ignore
import { CampaignStatus, AdvertisingChannelType, BiddingStrategyType } from 'google-ads-node/build/lib/enums'
// @ts-ignore
import { Campaign } from 'google-ads-node/build/lib/resources'

jest.setTimeout(30000)
const customer = newCustomer()

describe('campaigns', async () => {
    describe('get', async () => {
        it('can retrieve a single campaign with an id', async () => {
            const campaign = await customer.campaigns.get(CAMPAIGN_ID)
            expect(campaign).toEqual(
                expect.objectContaining({
                    resource_name: `customers/${CID}/campaigns/${CAMPAIGN_ID}`,
                    id: CAMPAIGN_ID,
                    url_custom_parameters: [],
                })
            )
        })

        it("throws an error when the campaign doesn't exist", async () => {
            await expect(customer.campaigns.get(123)).rejects.toThrow('Resource not found')
        })
    })

    describe('list', async () => {
        it('can retrieve a list of campaigns with all fields (if valid)', async () => {
            const campaigns = await customer.campaigns.list()
            expect(campaigns).toBeInstanceOf(Array)
            expect(campaigns[0]).toEqual({
                campaign: expect.objectContaining({
                    resource_name: expect.any(String),
                    id: expect.any(Number),
                    status: expect.any(Number),
                }),
            })
        })

        it('can retrieve a list of campaigns with constraints', async () => {
            const campaign_ids = await customer.campaigns.list({
                limit: 1,
                constraints: [
                    {
                        status: 'ENABLED',
                    },
                ],
            })
            expect(campaign_ids.length).toEqual(1)
            expect(campaign_ids[0]).toEqual({
                campaign: expect.objectContaining({
                    resource_name: expect.any(String),
                    id: expect.any(Number),
                    status: CampaignStatus.ENABLED,
                }),
            })
        })
    })

    describe('create', async () => {
        it('can create a new campaign from a specified campaign object', async () => {
            const campaign: Campaign = {
                name: 'test-campaign-wasd-1',
                advertising_channel_type: AdvertisingChannelType.SEARCH,
                status: CampaignStatus.PAUSED,
                bidding_strategy_type: BiddingStrategyType.MANUAL_CPC,
                campaign_budget: `resources/${CID}/campaignBudgets/1794199407`,
                manual_cpc: {
                    enhanced_cpc_enabled: true,
                },
            }

            const created = await customer.campaigns.create(campaign, {
                validate_only: true,
            })
            console.log(created)
        })
    })
})
