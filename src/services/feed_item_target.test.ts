// Auto Generated File! Do Not Edit.

// @ts-ignore
import { FeedItemTarget } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('FeedItemTarget', async () => {

    describe('list', async () => {
        it('can retrieve a list of FeedItemTargets with all fields (if valid)', async () => {
            const feed_item_targets = await customer.feedItemTargets.list()
            expect(feed_item_targets).toBeInstanceOf(Array)

            if(feed_item_targets.length > 0) {
                expect(feed_item_targets[0].feed_item_target).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/feedItemTargets`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.feedItemTargets.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
