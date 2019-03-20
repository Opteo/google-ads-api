// Auto Generated File! Do Not Edit.

// @ts-ignore
import { LocationView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('LocationView', async () => {

    describe('list', async () => {
        it('can retrieve a list of LocationViews with all fields (if valid)', async () => {
            const location_views = await customer.locationViews.list()
            expect(location_views).toBeInstanceOf(Array)

            if(location_views.length > 0) {
                expect(location_views[0].location_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/locationViews`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.locationViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
