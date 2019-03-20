// Auto Generated File! Do Not Edit.

// @ts-ignore
import { GenderView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('GenderView', async () => {

    describe('list', async () => {
        it('can retrieve a list of GenderViews with all fields (if valid)', async () => {
            const gender_views = await customer.genderViews.list()
            expect(gender_views).toBeInstanceOf(Array)

            if(gender_views.length > 0) {
                expect(gender_views[0].gender_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/genderViews`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.genderViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
