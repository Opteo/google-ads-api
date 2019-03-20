// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroupAudienceView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroupAudienceView', async () => {

    describe('list', async () => {
        it('can retrieve a list of AdGroupAudienceViews with all fields (if valid)', async () => {
            const ad_group_audience_views = await customer.adGroupAudienceViews.list()
            expect(ad_group_audience_views).toBeInstanceOf(Array)

            if(ad_group_audience_views.length > 0) {
                expect(ad_group_audience_views[0].ad_group_audience_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroupAudienceViews`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adGroupAudienceViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
