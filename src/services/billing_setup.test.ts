// Auto Generated File! Do Not Edit.

// @ts-ignore
import { BillingSetup } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('BillingSetup', async () => {

    describe('list', async () => {
        it('can retrieve a list of BillingSetups with all fields (if valid)', async () => {
            const billing_setups = await customer.billingSetups.list()
            expect(billing_setups).toBeInstanceOf(Array)

            if(billing_setups.length > 0) {
                expect(billing_setups[0].billing_setup).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/billingSetups`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.billingSetups.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
