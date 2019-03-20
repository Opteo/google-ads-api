// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroupCriterion } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroupCriterion', async () => {

    describe('list', async () => {
        it('can retrieve a list of AdGroupCriterions with all fields (if valid)', async () => {
            const ad_group_criterions = await customer.adGroupCriterion.list()
            expect(ad_group_criterions).toBeInstanceOf(Array)

            if(ad_group_criterions.length > 0) {
                expect(ad_group_criterions[0].ad_group_criterion).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroupCriteria`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adGroupCriterion.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
