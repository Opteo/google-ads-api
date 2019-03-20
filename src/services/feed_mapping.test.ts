// Auto Generated File! Do Not Edit.

// @ts-ignore
import { FeedMapping } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('FeedMapping', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of FeedMappings with all fields (if valid)', async () => {
            const feed_mappings = await customer.feedMappings.list()
            expect(feed_mappings).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(feed_mappings.length > 0 && feed_mappings[0].feed_mapping.resource_name) {
                expect(feed_mappings[0].feed_mapping).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/feedMappings`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = feed_mappings[0].feed_mapping.resource_name

                if(resource) {
                    const singleton = await customer.feedMappings.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/feedMappings`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.feedMappings.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
