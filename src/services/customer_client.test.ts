// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CustomerClient } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CustomerClient', async () => {

    describe('list', async () => {
        it('can retrieve a list of CustomerClients with all fields (if valid)', async () => {
            const customer_clients = await customer.customerClients.list()
            expect(customer_clients).toBeInstanceOf(Array)

            if(customer_clients.length > 0) {
                expect(customer_clients[0].customer_client).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/customerClients`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.customerClients.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
