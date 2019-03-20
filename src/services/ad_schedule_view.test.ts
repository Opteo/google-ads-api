// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdScheduleView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdScheduleView', async () => {

    describe('list', async () => {
        it('can retrieve a list of AdScheduleViews with all fields (if valid)', async () => {
            const ad_schedule_views = await customer.adScheduleViews.list()
            expect(ad_schedule_views).toBeInstanceOf(Array)

            if(ad_schedule_views.length > 0) {
                expect(ad_schedule_views[0].ad_schedule_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adScheduleViews`) || '',
                    })
                )
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
