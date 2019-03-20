// Auto Generated File! Do Not Edit.

// @ts-ignore
import { KeywordPlanCampaign } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('KeywordPlanCampaign', async () => {

    describe('list', async () => {
        it('can retrieve a list of KeywordPlanCampaigns with all fields (if valid)', async () => {
            const keyword_plan_campaigns = await customer.keywordPlanCampaigns.list()
            expect(keyword_plan_campaigns).toBeInstanceOf(Array)

            if(keyword_plan_campaigns.length > 0) {
                expect(keyword_plan_campaigns[0].keyword_plan_campaign).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/keywordPlanCampaigns`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.keywordPlanCampaigns.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
