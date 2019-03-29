// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CustomerLabel } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CustomerLabel', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of CustomerLabels with all fields (if valid)', async () => {
            const customer_labels = await customer.customerLabels.list()
            expect(customer_labels).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(customer_labels.length > 0 && customer_labels[0].customer_label.resource_name) {
                expect(customer_labels[0].customer_label).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/customerLabels`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = customer_labels[0].customer_label.resource_name

                if(resource) {
                    const singleton = await customer.customerLabels.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/customerLabels`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.customerLabels.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
