// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AccountBudgetProposal } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AccountBudgetProposal', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of AccountBudgetProposals with all fields (if valid)', async () => {
            const account_budget_proposals = await customer.accountBudgetProposals.list()
            expect(account_budget_proposals).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(account_budget_proposals.length > 0 && account_budget_proposals[0].account_budget_proposal.resource_name) {
                expect(account_budget_proposals[0].account_budget_proposal).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/accountBudgetProposals`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = account_budget_proposals[0].account_budget_proposal.resource_name

                if(resource) {
                    const singleton = await customer.accountBudgetProposals.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/accountBudgetProposals`) || '',
                        })
                    )
                }
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
