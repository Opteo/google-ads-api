// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AccountBudgetProposal } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AccountBudgetProposal', async () => {

    describe('list', async () => {
        it('can retrieve a list of AccountBudgetProposals with all fields (if valid)', async () => {
            const account_budget_proposals = await customer.accountBudgetProposals.list()
            expect(account_budget_proposals).toBeInstanceOf(Array)

            if(account_budget_proposals.length > 0) {
                expect(account_budget_proposals[0].account_budget_proposal).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/accountBudgetProposals`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.accountBudgetProposals.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
