// Auto Generated File! Do Not Edit.

// @ts-ignore
import { DynamicSearchAdsSearchTermView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('DynamicSearchAdsSearchTermView', async () => {

    describe('list', async () => {
        it('can retrieve a list of DynamicSearchAdsSearchTermViews with all fields (if valid)', async () => {
            const dynamic_search_ads_search_term_views = await customer.dynamicSearchAdsSearchTermViews.list()
            expect(dynamic_search_ads_search_term_views).toBeInstanceOf(Array)

            if(dynamic_search_ads_search_term_views.length > 0) {
                expect(dynamic_search_ads_search_term_views[0].dynamic_search_ads_search_term_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/dynamicSearchAdsSearchTermViews`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.dynamicSearchAdsSearchTermViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
