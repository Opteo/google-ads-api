// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CustomerManagerLink } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CustomerManagerLink', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of CustomerManagerLinks with all fields (if valid)', async () => {
            const customer_manager_links = await customer.customerManagerLinks.list()
            expect(customer_manager_links).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(customer_manager_links.length > 0 && customer_manager_links[0].customer_manager_link.resource_name) {
                expect(customer_manager_links[0].customer_manager_link).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/customerManagerLinks`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = customer_manager_links[0].customer_manager_link.resource_name

                if(resource) {
                    const singleton = await customer.customerManagerLinks.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/customerManagerLinks`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.customerManagerLinks.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
