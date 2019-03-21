// Auto Generated File! Do Not Edit.

// @ts-ignore
import { DomainCategory } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('DomainCategory', async () => {
    describe('reporting', async () => {
        it('can retrieve a list of DomainCategorys with all fields (if valid)', async () => {
            const domain_categorys = await customer.domainCategories.list()
            expect(domain_categorys).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if (domain_categorys.length > 0 && domain_categorys[0].domain_category.resource_name) {
                expect(domain_categorys[0].domain_category).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/domainCategorys`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = domain_categorys[0].domain_category.resource_name

                if (resource) {
                    const singleton = await customer.domainCategories.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/domainCategorys`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.domainCategories.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })
})
