// Auto Generated File! Do Not Edit.

// @ts-ignore
import { SearchTermView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('SearchTermView', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of SearchTermViews with all fields (if valid)', async () => {
            const search_term_views = await customer.searchTermViews.list()
            expect(search_term_views).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(search_term_views.length > 0 && search_term_views[0].search_term_view.resource_name) {
                expect(search_term_views[0].search_term_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/searchTermViews`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = search_term_views[0].search_term_view.resource_name

                if(resource) {
                    const singleton = await customer.searchTermViews.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/searchTermViews`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.searchTermViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
