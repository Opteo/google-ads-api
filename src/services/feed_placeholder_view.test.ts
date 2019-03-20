// Auto Generated File! Do Not Edit.

// @ts-ignore
import { FeedPlaceholderView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('FeedPlaceholderView', async () => {

    describe('list', async () => {
        it('can retrieve a list of FeedPlaceholderViews with all fields (if valid)', async () => {
            const feed_placeholder_views = await customer.feedPlaceholderViews.list()
            expect(feed_placeholder_views).toBeInstanceOf(Array)

            if(feed_placeholder_views.length > 0) {
                expect(feed_placeholder_views[0].feed_placeholder_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/feedPlaceholderViews`) || '',
                    })
                )
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
