// Auto Generated File! Do Not Edit.

// @ts-ignore
import { CustomerNegativeCriterion } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('CustomerNegativeCriterion', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of CustomerNegativeCriterions with all fields (if valid)', async () => {
            const customer_negative_criterions = await customer.customerNegativeCriterions.list()
            expect(customer_negative_criterions).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(customer_negative_criterions.length > 0 && customer_negative_criterions[0].customer_negative_criterion.resource_name) {
                expect(customer_negative_criterions[0].customer_negative_criterion).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/customerNegativeCriterions`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = customer_negative_criterions[0].customer_negative_criterion.resource_name

                if(resource) {
                    const singleton = await customer.customerNegativeCriterions.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/customerNegativeCriterions`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.customerNegativeCriterions.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
