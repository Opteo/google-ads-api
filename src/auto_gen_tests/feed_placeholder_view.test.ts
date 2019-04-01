// Auto Generated File! Do Not Edit.

// @ts-ignore
import { FeedPlaceholderView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('FeedPlaceholderView', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of FeedPlaceholderViews with all fields (if valid)', async () => {
            const feed_placeholder_views = await customer.feedPlaceholderViews.list()
            expect(feed_placeholder_views).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(feed_placeholder_views.length > 0 && feed_placeholder_views[0].feed_placeholder_view.resource_name) {
                expect(feed_placeholder_views[0].feed_placeholder_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/feedPlaceholderViews`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = feed_placeholder_views[0].feed_placeholder_view.resource_name

                if(resource) {
                    const singleton = await customer.feedPlaceholderViews.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/feedPlaceholderViews`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.feedPlaceholderViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
