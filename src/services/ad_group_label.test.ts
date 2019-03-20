// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroupLabel } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroupLabel', async () => {

    describe('list', async () => {
        it('can retrieve a list of AdGroupLabels with all fields (if valid)', async () => {
            const ad_group_labels = await customer.adGroupLabels.list()
            expect(ad_group_labels).toBeInstanceOf(Array)

            if(ad_group_labels.length > 0) {
                expect(ad_group_labels[0].ad_group_label).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroupLabels`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adGroupLabels.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
