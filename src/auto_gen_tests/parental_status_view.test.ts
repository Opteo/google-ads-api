// Auto Generated File! Do Not Edit.

// @ts-ignore
import { ParentalStatusView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('ParentalStatusView', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of ParentalStatusViews with all fields (if valid)', async () => {
            const parental_status_views = await customer.parentalStatusViews.list()
            expect(parental_status_views).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(parental_status_views.length > 0 && parental_status_views[0].parental_status_view.resource_name) {
                expect(parental_status_views[0].parental_status_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/parentalStatusViews`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = parental_status_views[0].parental_status_view.resource_name

                if(resource) {
                    const singleton = await customer.parentalStatusViews.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/parentalStatusViews`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.parentalStatusViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
