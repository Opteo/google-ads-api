// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CustomerClientLink } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CustomerClientLink', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of CustomerClientLinks with all fields (if valid)', async () => {
            const customer_client_links = await customer.customerClientLinks.list()
            expect(customer_client_links).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(customer_client_links.length > 0 && customer_client_links[0].customer_client_link.resource_name) {
                expect(customer_client_links[0].customer_client_link).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/customerClientLinks`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = customer_client_links[0].customer_client_link.resource_name

                if(resource) {
                    const singleton = await customer.customerClientLinks.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/customerClientLinks`) || '',
                        })
                    )
                }
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
