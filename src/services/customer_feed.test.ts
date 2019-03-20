// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CustomerFeed } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CustomerFeed', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of CustomerFeeds with all fields (if valid)', async () => {
            const customer_feeds = await customer.customerFeeds.list()
            expect(customer_feeds).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(customer_feeds.length > 0 && customer_feeds[0].customer_feed.resource_name) {
                expect(customer_feeds[0].customer_feed).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/customerFeeds`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = customer_feeds[0].customer_feed.resource_name

                if(resource) {
                    const singleton = await customer.customerFeeds.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/customerFeeds`) || '',
                        })
                    )
                }
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
