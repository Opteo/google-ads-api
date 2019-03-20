// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CampaignBudget } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CampaignBudget', async () => {

    describe('list', async () => {
        it('can retrieve a list of CampaignBudgets with all fields (if valid)', async () => {
            const campaign_budgets = await customer.campaignBudgets.list()
            expect(campaign_budgets).toBeInstanceOf(Array)

            if(campaign_budgets.length > 0) {
                expect(campaign_budgets[0].campaign_budget).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaignBudgets`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.campaignBudgets.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
