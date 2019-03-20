// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroupFeed } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroupFeed', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of AdGroupFeeds with all fields (if valid)', async () => {
            const ad_group_feeds = await customer.adGroupFeeds.list()
            expect(ad_group_feeds).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(ad_group_feeds.length > 0 && ad_group_feeds[0].ad_group_feed.resource_name) {
                expect(ad_group_feeds[0].ad_group_feed).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroupFeeds`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = ad_group_feeds[0].ad_group_feed.resource_name

                if(resource) {
                    const singleton = await customer.adGroupFeeds.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/adGroupFeeds`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adGroupFeeds.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
