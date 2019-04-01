// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CampaignFeed } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CampaignFeed', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of CampaignFeeds with all fields (if valid)', async () => {
            const campaign_feeds = await customer.campaignFeeds.list()
            expect(campaign_feeds).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(campaign_feeds.length > 0 && campaign_feeds[0].campaign_feed.resource_name) {
                expect(campaign_feeds[0].campaign_feed).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaignFeeds`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = campaign_feeds[0].campaign_feed.resource_name

                if(resource) {
                    const singleton = await customer.campaignFeeds.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/campaignFeeds`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.campaignFeeds.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
