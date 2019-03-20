// Auto Generated File! Do Not Edit.

// @ts-ignore
import { GroupPlacementView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('GroupPlacementView', async () => {

    describe('list', async () => {
        it('can retrieve a list of GroupPlacementViews with all fields (if valid)', async () => {
            const group_placement_views = await customer.groupPlacementViews.list()
            expect(group_placement_views).toBeInstanceOf(Array)

            if(group_placement_views.length > 0) {
                expect(group_placement_views[0].group_placement_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/groupPlacementViews`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.groupPlacementViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
