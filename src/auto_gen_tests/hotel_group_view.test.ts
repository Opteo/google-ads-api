// Auto Generated File! Do Not Edit.

// @ts-ignore
import { HotelGroupView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('HotelGroupView', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of HotelGroupViews with all fields (if valid)', async () => {
            const hotel_group_views = await customer.hotelGroupViews.list()
            expect(hotel_group_views).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(hotel_group_views.length > 0 && hotel_group_views[0].hotel_group_view.resource_name) {
                expect(hotel_group_views[0].hotel_group_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/hotelGroupViews`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = hotel_group_views[0].hotel_group_view.resource_name

                if(resource) {
                    const singleton = await customer.hotelGroupViews.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/hotelGroupViews`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.hotelGroupViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
