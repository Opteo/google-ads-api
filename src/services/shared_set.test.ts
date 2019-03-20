// Auto Generated File! Do Not Edit.

// @ts-ignore
import { SharedSet } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('SharedSet', async () => {

    describe('list', async () => {
        it('can retrieve a list of SharedSets with all fields (if valid)', async () => {
            const shared_sets = await customer.sharedSets.list()
            expect(shared_sets).toBeInstanceOf(Array)

            if(shared_sets.length > 0) {
                expect(shared_sets[0].shared_set).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/sharedSets`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.sharedSets.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
