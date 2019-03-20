// Auto Generated File! Do Not Edit.

// @ts-ignore
import { KeywordView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('KeywordView', async () => {

    describe('list', async () => {
        it('can retrieve a list of KeywordViews with all fields (if valid)', async () => {
            const keyword_views = await customer.keywordViews.list()
            expect(keyword_views).toBeInstanceOf(Array)

            if(keyword_views.length > 0) {
                expect(keyword_views[0].keyword_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/keywordViews`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.keywordViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
