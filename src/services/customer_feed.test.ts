// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CustomerFeed } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CustomerFeed', async () => {

    describe('list', async () => {
        it('can retrieve a list of CustomerFeeds with all fields (if valid)', async () => {
            const customer_feeds = await customer.customerFeeds.list()
            expect(customer_feeds).toBeInstanceOf(Array)

            if(customer_feeds.length > 0) {
                expect(customer_feeds[0].customer_feed).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/customerFeeds`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.customerFeeds.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
