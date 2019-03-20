// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AgeRangeView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AgeRangeView', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of AgeRangeViews with all fields (if valid)', async () => {
            const age_range_views = await customer.ageRangeViews.list()
            expect(age_range_views).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(age_range_views.length > 0 && age_range_views[0].age_range_view.resource_name) {
                expect(age_range_views[0].age_range_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/ageRangeViews`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = age_range_views[0].age_range_view.resource_name

                if(resource) {
                    const singleton = await customer.ageRangeViews.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/ageRangeViews`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.ageRangeViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
