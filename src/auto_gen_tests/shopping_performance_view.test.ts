// Auto Generated File! Do Not Edit.

// @ts-ignore
import { ShoppingPerformanceView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('ShoppingPerformanceView', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of ShoppingPerformanceViews with all fields (if valid)', async () => {
            const shopping_performance_views = await customer.shoppingPerformanceViews.list()
            expect(shopping_performance_views).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(shopping_performance_views.length > 0 && shopping_performance_views[0].shopping_performance_view.resource_name) {
                expect(shopping_performance_views[0].shopping_performance_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/shoppingPerformanceViews`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = shopping_performance_views[0].shopping_performance_view.resource_name

                if(resource) {
                    const singleton = await customer.shoppingPerformanceViews.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/shoppingPerformanceViews`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.shoppingPerformanceViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
