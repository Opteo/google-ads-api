// Auto Generated File! Do Not Edit.

// @ts-ignore
import { KeywordPlan } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('KeywordPlan', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of KeywordPlans with all fields (if valid)', async () => {
            const keyword_plans = await customer.keywordPlans.list()
            expect(keyword_plans).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(keyword_plans.length > 0 && keyword_plans[0].keyword_plan.resource_name) {
                expect(keyword_plans[0].keyword_plan).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/keywordPlans`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = keyword_plans[0].keyword_plan.resource_name

                if(resource) {
                    const singleton = await customer.keywordPlans.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/keywordPlans`) || '',
                        })
                    )
                }
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
