// Auto Generated File! Do Not Edit.

// @ts-ignore
import { KeywordPlanNegativeKeyword } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('KeywordPlanNegativeKeyword', async () => {

    describe('list', async () => {
        it('can retrieve a list of KeywordPlanNegativeKeywords with all fields (if valid)', async () => {
            const keyword_plan_negative_keywords = await customer.keywordPlanNegativeKeywords.list()
            expect(keyword_plan_negative_keywords).toBeInstanceOf(Array)

            if(keyword_plan_negative_keywords.length > 0) {
                expect(keyword_plan_negative_keywords[0].keyword_plan_negative_keyword).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/keywordPlanNegativeKeywords`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.keywordPlanNegativeKeywords.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
