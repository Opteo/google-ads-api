// Auto Generated File! Do Not Edit.

// @ts-ignore
import { DisplayKeywordView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('DisplayKeywordView', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of DisplayKeywordViews with all fields (if valid)', async () => {
            const display_keyword_views = await customer.displayKeywordViews.list()
            expect(display_keyword_views).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(display_keyword_views.length > 0 && display_keyword_views[0].display_keyword_view.resource_name) {
                expect(display_keyword_views[0].display_keyword_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/displayKeywordViews`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = display_keyword_views[0].display_keyword_view.resource_name

                if(resource) {
                    const singleton = await customer.displayKeywordViews.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/displayKeywordViews`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.displayKeywordViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
