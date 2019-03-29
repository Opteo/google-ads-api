// Auto Generated File! Do Not Edit.

// @ts-ignore
import { KeywordPlanKeyword } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('KeywordPlanKeyword', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of KeywordPlanKeywords with all fields (if valid)', async () => {
            const keyword_plan_keywords = await customer.keywordPlanKeywords.list()
            expect(keyword_plan_keywords).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(keyword_plan_keywords.length > 0 && keyword_plan_keywords[0].keyword_plan_keyword.resource_name) {
                expect(keyword_plan_keywords[0].keyword_plan_keyword).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/keywordPlanKeywords`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = keyword_plan_keywords[0].keyword_plan_keyword.resource_name

                if(resource) {
                    const singleton = await customer.keywordPlanKeywords.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/keywordPlanKeywords`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.keywordPlanKeywords.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
