// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CustomerClientLink } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CustomerClientLink', async () => {

    describe('list', async () => {
        it('can retrieve a list of CustomerClientLinks with all fields (if valid)', async () => {
            const customer_client_links = await customer.customerClientLinks.list()
            expect(customer_client_links).toBeInstanceOf(Array)

            if(customer_client_links.length > 0) {
                expect(customer_client_links[0].customer_client_link).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/customerClientLinks`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.customerClientLinks.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
