// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdScheduleView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdScheduleView', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of AdScheduleViews with all fields (if valid)', async () => {
            const ad_schedule_views = await customer.adScheduleViews.list()
            expect(ad_schedule_views).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(ad_schedule_views.length > 0 && ad_schedule_views[0].ad_schedule_view.resource_name) {
                expect(ad_schedule_views[0].ad_schedule_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adScheduleViews`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = ad_schedule_views[0].ad_schedule_view.resource_name

                if(resource) {
                    const singleton = await customer.adScheduleViews.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/adScheduleViews`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adScheduleViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
