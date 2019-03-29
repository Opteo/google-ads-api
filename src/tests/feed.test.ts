// Auto Generated File! Do Not Edit.

// @ts-ignore
import { Feed } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('Feed', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of Feeds with all fields (if valid)', async () => {
            const feeds = await customer.feeds.list()
            expect(feeds).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(feeds.length > 0 && feeds[0].feed.resource_name) {
                expect(feeds[0].feed).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/feeds`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = feeds[0].feed.resource_name

                if(resource) {
                    const singleton = await customer.feeds.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/feeds`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.feeds.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
