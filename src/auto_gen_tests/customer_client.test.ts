// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CustomerClient } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CustomerClient', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of CustomerClients with all fields (if valid)', async () => {
            const customer_clients = await customer.customerClients.list()
            expect(customer_clients).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(customer_clients.length > 0 && customer_clients[0].customer_client.resource_name) {
                expect(customer_clients[0].customer_client).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/customerClients`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = customer_clients[0].customer_client.resource_name

                if(resource) {
                    const singleton = await customer.customerClients.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/customerClients`) || '',
                        })
                    )
                }
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
