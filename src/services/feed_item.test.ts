// Auto Generated File! Do Not Edit.

// @ts-ignore
import { FeedItem } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('FeedItem', async () => {

    describe('list', async () => {
        it('can retrieve a list of FeedItems with all fields (if valid)', async () => {
            const feed_items = await customer.feedItems.list()
            expect(feed_items).toBeInstanceOf(Array)

            if(feed_items.length > 0) {
                expect(feed_items[0].feed_item).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/feedItems`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.feedItems.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
