// Auto Generated File! Do Not Edit.

// @ts-ignore
import { ManagedPlacementView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('ManagedPlacementView', async () => {

    describe('list', async () => {
        it('can retrieve a list of ManagedPlacementViews with all fields (if valid)', async () => {
            const managed_placement_views = await customer.managedPlacementViews.list()
            expect(managed_placement_views).toBeInstanceOf(Array)

            if(managed_placement_views.length > 0) {
                expect(managed_placement_views[0].managed_placement_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/managedPlacementViews`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.managedPlacementViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
