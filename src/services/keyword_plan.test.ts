// Auto Generated File! Do Not Edit.

// @ts-ignore
import { KeywordPlan } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('KeywordPlan', async () => {

    describe('list', async () => {
        it('can retrieve a list of KeywordPlans with all fields (if valid)', async () => {
            const keyword_plans = await customer.keywordPlans.list()
            expect(keyword_plans).toBeInstanceOf(Array)

            if(keyword_plans.length > 0) {
                expect(keyword_plans[0].keyword_plan).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/keywordPlans`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.keywordPlans.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
