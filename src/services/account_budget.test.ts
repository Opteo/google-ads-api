// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AccountBudget } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AccountBudget', async () => {

    describe('list', async () => {
        it('can retrieve a list of AccountBudgets with all fields (if valid)', async () => {
            const account_budgets = await customer.accountBudgets.list()
            expect(account_budgets).toBeInstanceOf(Array)

            if(account_budgets.length > 0) {
                expect(account_budgets[0].account_budget).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/accountBudgets`) || '',
                    })
                )
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
