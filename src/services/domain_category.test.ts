// Auto Generated File! Do Not Edit.

// @ts-ignore
import { DomainCategory } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('DomainCategory', async () => {

    describe('list', async () => {
        it('can retrieve a list of DomainCategorys with all fields (if valid)', async () => {
            const domain_categorys = await customer.domainCategorys.list()
            expect(domain_categorys).toBeInstanceOf(Array)

            if(domain_categorys.length > 0) {
                expect(domain_categorys[0].domain_category).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/domainCategorys`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.domainCategorys.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
