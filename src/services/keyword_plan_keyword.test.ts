// Auto Generated File! Do Not Edit.

// @ts-ignore
import { KeywordPlanKeyword } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('KeywordPlanKeyword', async () => {

    describe('list', async () => {
        it('can retrieve a list of KeywordPlanKeywords with all fields (if valid)', async () => {
            const keyword_plan_keywords = await customer.keywordPlanKeywords.list()
            expect(keyword_plan_keywords).toBeInstanceOf(Array)

            if(keyword_plan_keywords.length > 0) {
                expect(keyword_plan_keywords[0].keyword_plan_keyword).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/keywordPlanKeywords`) || '',
                    })
                )
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
