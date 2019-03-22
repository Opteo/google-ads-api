// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroupAd } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroupAd', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of AdGroupAds with all fields (if valid)', async () => {
            const ad_group_ads = await customer.adGroupAds.list()
            expect(ad_group_ads).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(ad_group_ads.length > 0 && ad_group_ads[0].ad_group_ad.resource_name) {
                expect(ad_group_ads[0].ad_group_ad).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroupAds`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = ad_group_ads[0].ad_group_ad.resource_name

                if(resource) {
                    const singleton = await customer.adGroupAds.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/adGroupAds`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adGroupAds.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
