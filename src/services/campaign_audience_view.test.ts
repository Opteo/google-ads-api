// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CampaignAudienceView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CampaignAudienceView', async () => {

    describe('list', async () => {
        it('can retrieve a list of CampaignAudienceViews with all fields (if valid)', async () => {
            const campaign_audience_views = await customer.campaignAudienceViews.list()
            expect(campaign_audience_views).toBeInstanceOf(Array)

            if(campaign_audience_views.length > 0) {
                expect(campaign_audience_views[0].campaign_audience_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaignAudienceViews`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.campaignAudienceViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
