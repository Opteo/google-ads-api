// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CampaignBidModifier } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CampaignBidModifier', async () => {

    describe('list', async () => {
        it('can retrieve a list of CampaignBidModifiers with all fields (if valid)', async () => {
            const campaign_bid_modifiers = await customer.campaignBidModifiers.list()
            expect(campaign_bid_modifiers).toBeInstanceOf(Array)

            if(campaign_bid_modifiers.length > 0) {
                expect(campaign_bid_modifiers[0].campaign_bid_modifier).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaignBidModifiers`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.campaignBidModifiers.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
