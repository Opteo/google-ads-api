// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroupCriterionLabel } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroupCriterionLabel', async () => {

    describe('list', async () => {
        it('can retrieve a list of AdGroupCriterionLabels with all fields (if valid)', async () => {
            const ad_group_criterion_labels = await customer.adGroupCriterionLabels.list()
            expect(ad_group_criterion_labels).toBeInstanceOf(Array)

            if(ad_group_criterion_labels.length > 0) {
                expect(ad_group_criterion_labels[0].ad_group_criterion_label).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroupCriterionLabels`) || '',
                    })
                )
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
