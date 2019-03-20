// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CampaignCriterion } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CampaignCriterion', async () => {

    describe('list', async () => {
        it('can retrieve a list of CampaignCriterions with all fields (if valid)', async () => {
            const campaign_criterions = await customer.campaignCriterion.list()
            expect(campaign_criterions).toBeInstanceOf(Array)

            if(campaign_criterions.length > 0) {
                expect(campaign_criterions[0].campaign_criterion).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaignCriteria`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.campaignCriterion.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
