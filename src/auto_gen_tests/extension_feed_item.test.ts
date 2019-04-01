// Auto Generated File! Do Not Edit.

// @ts-ignore
import { ExtensionFeedItem } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('ExtensionFeedItem', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of ExtensionFeedItems with all fields (if valid)', async () => {
            const extension_feed_items = await customer.extensionFeedItems.list()
            expect(extension_feed_items).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(extension_feed_items.length > 0 && extension_feed_items[0].extension_feed_item.resource_name) {
                expect(extension_feed_items[0].extension_feed_item).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/extensionFeedItems`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = extension_feed_items[0].extension_feed_item.resource_name

                if(resource) {
                    const singleton = await customer.extensionFeedItems.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/extensionFeedItems`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.extensionFeedItems.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
