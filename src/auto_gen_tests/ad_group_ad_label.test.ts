// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroupAdLabel } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroupAdLabel', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of AdGroupAdLabels with all fields (if valid)', async () => {
            const ad_group_ad_labels = await customer.adGroupAdLabels.list()
            expect(ad_group_ad_labels).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(ad_group_ad_labels.length > 0 && ad_group_ad_labels[0].ad_group_ad_label.resource_name) {
                expect(ad_group_ad_labels[0].ad_group_ad_label).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroupAdLabels`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = ad_group_ad_labels[0].ad_group_ad_label.resource_name

                if(resource) {
                    const singleton = await customer.adGroupAdLabels.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/adGroupAdLabels`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adGroupAdLabels.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
