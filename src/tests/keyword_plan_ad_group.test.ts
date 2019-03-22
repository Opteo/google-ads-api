// Auto Generated File! Do Not Edit.

// @ts-ignore
import { KeywordPlanAdGroup } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('KeywordPlanAdGroup', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of KeywordPlanAdGroups with all fields (if valid)', async () => {
            const keyword_plan_ad_groups = await customer.keywordPlanAdGroups.list()
            expect(keyword_plan_ad_groups).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(keyword_plan_ad_groups.length > 0 && keyword_plan_ad_groups[0].keyword_plan_ad_group.resource_name) {
                expect(keyword_plan_ad_groups[0].keyword_plan_ad_group).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/keywordPlanAdGroups`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = keyword_plan_ad_groups[0].keyword_plan_ad_group.resource_name

                if(resource) {
                    const singleton = await customer.keywordPlanAdGroups.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/keywordPlanAdGroups`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.keywordPlanAdGroups.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
