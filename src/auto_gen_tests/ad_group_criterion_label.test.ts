// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroupCriterionLabel } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroupCriterionLabel',  () => {

    describe('reporting', async () => {
        it('can retrieve a list of AdGroupCriterionLabels with all fields (if valid)', async () => {
            const ad_group_criterion_labels = await customer.adGroupCriterionLabels.list()
            expect(ad_group_criterion_labels).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(ad_group_criterion_labels.length > 0 && ad_group_criterion_labels[0].ad_group_criterion_label.resource_name) {
                expect(ad_group_criterion_labels[0].ad_group_criterion_label).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroupCriterionLabels`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = ad_group_criterion_labels[0].ad_group_criterion_label.resource_name

                if(resource) {
                    const singleton = await customer.adGroupCriterionLabels.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/adGroupCriterionLabels`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adGroupCriterionLabels.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
