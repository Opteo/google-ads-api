// Auto Generated File! Do Not Edit.

// @ts-ignore
import { HotelPerformanceView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('HotelPerformanceView', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of HotelPerformanceViews with all fields (if valid)', async () => {
            const hotel_performance_views = await customer.hotelPerformanceViews.list()
            expect(hotel_performance_views).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(hotel_performance_views.length > 0 && hotel_performance_views[0].hotel_performance_view.resource_name) {
                expect(hotel_performance_views[0].hotel_performance_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/hotelPerformanceViews`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = hotel_performance_views[0].hotel_performance_view.resource_name

                if(resource) {
                    const singleton = await customer.hotelPerformanceViews.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/hotelPerformanceViews`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.hotelPerformanceViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
