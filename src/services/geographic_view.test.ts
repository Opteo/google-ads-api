// Auto Generated File! Do Not Edit.

// @ts-ignore
import { GeographicView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('GeographicView', async () => {

    describe('list', async () => {
        it('can retrieve a list of GeographicViews with all fields (if valid)', async () => {
            const geographic_views = await customer.geographicViews.list()
            expect(geographic_views).toBeInstanceOf(Array)

            if(geographic_views.length > 0) {
                expect(geographic_views[0].geographic_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/geographicViews`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.geographicViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
