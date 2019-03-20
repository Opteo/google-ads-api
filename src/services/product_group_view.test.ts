// Auto Generated File! Do Not Edit.

// @ts-ignore
import { ProductGroupView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('ProductGroupView', async () => {

    describe('list', async () => {
        it('can retrieve a list of ProductGroupViews with all fields (if valid)', async () => {
            const product_group_views = await customer.productGroupViews.list()
            expect(product_group_views).toBeInstanceOf(Array)

            if(product_group_views.length > 0) {
                expect(product_group_views[0].product_group_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/productGroupViews`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.productGroupViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
