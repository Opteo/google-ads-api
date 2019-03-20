// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CampaignFeed } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CampaignFeed', async () => {

    describe('list', async () => {
        it('can retrieve a list of CampaignFeeds with all fields (if valid)', async () => {
            const campaign_feeds = await customer.campaignFeeds.list()
            expect(campaign_feeds).toBeInstanceOf(Array)

            if(campaign_feeds.length > 0) {
                expect(campaign_feeds[0].campaign_feed).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaignFeeds`) || '',
                    })
                )
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
