// Auto Generated File! Do Not Edit.

// @ts-ignore
import { SharedCriterion } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('SharedCriterion', async () => {

    describe('list', async () => {
        it('can retrieve a list of SharedCriterions with all fields (if valid)', async () => {
            const shared_criterions = await customer.sharedCriterion.list()
            expect(shared_criterions).toBeInstanceOf(Array)

            if(shared_criterions.length > 0) {
                expect(shared_criterions[0].shared_criterion).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/sharedCriteria`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.sharedCriterion.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
