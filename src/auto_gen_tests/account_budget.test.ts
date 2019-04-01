// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AccountBudget } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AccountBudget', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of AccountBudgets with all fields (if valid)', async () => {
            const account_budgets = await customer.accountBudgets.list()
            expect(account_budgets).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(account_budgets.length > 0 && account_budgets[0].account_budget.resource_name) {
                expect(account_budgets[0].account_budget).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/accountBudgets`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = account_budgets[0].account_budget.resource_name

                if(resource) {
                    const singleton = await customer.accountBudgets.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/accountBudgets`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.accountBudgets.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
