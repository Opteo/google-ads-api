import { CampaignBudget } from 'google-ads-node/build/lib/resources'
import { BudgetStatus } from 'google-ads-node/build/lib/enums'

import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('campaign budgets', async () => {
    describe('get', async () => {
        it('can retrieve a single campaign with an id', async () => {
            const budget = await customer.campaignBudgets.get(BUDGET_ID)
            expect(budget).toEqual(
                expect.objectContaining({
                    resource_name: `customers/${CID}/campaignBudgets/${BUDGET_ID}`,
                    id: BUDGET_ID,
                    status: expect.any(Number),
                    amount_micros: expect.any(Number),
                })
            )
        })

        it("throws an error when the campaign doesn't exist", async () => {
            await expect(customer.campaignBudgets.get(123)).rejects.toThrow('Resource not found')
        })
    })

    describe('list', async () => {
        it('can retrieve a list of budgets with all fields (if valid)', async () => {
            const budgets = await customer.campaignBudgets.list()
            expect(budgets).toBeInstanceOf(Array)

            expect(budgets[0].campaign_budget).toEqual(
                expect.objectContaining({
                    resource_name: expect.stringContaining(`customers/${CID}/campaignBudgets/`),
                    id: expect.any(Number),
                    status: expect.any(Number),
                    amount_micros: expect.any(Number),
                })
            )
        })

        it('can retrieve a list of budgets with constraints', async () => {
            const budgets = await customer.campaignBudgets.list({
                limit: 2,
                constraints: [
                    {
                        status: 'ENABLED',
                    },
                ],
            })
            expect(budgets.length).toEqual(2)
            expect(budgets[0].campaign_budget).toEqual(
                expect.objectContaining({
                    status: BudgetStatus.ENABLED,
                })
            )
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.campaignBudgets.list({
                    limit: -10,
                    constraints: ['fake_constraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

    describe('mutation', () => {
        let new_budget_resource_name: string = ''

        it('can create a new budget', async () => {
            const budget: CampaignBudget = {
                name: getRandomName('budget'),
                amount_micros: 30000000,
                explicitly_shared: true,
            }

            const { results } = await customer.campaignBudgets.create(budget)
            new_budget_resource_name = results[0]

            expect(results[0]).toContain(`customers/${CID}/campaignBudgets/`)
        })

        it('supports multiple operations when using create', async () => {
            const { results } = await customer.campaignBudgets.create(
                [
                    {
                        name: getRandomName('budget-1'),
                        amount_micros: 30000000,
                    },
                    {
                        name: getRandomName('budget-2'),
                        amount_micros: 30000000,
                    },
                ],
                {
                    validate_only: true,
                }
            )
            /* Result is empty because we're using validate only */
            expect(results).toEqual([])
        })

        it('supports multiple operations when using update', async () => {
            const { results } = await customer.campaignBudgets.create(
                [
                    {
                        name: getRandomName('budget-1'),
                        amount_micros: 30000000,
                    },
                    {
                        name: getRandomName('budget-2'),
                        amount_micros: 30000000,
                    },
                ],
                {
                    validate_only: true,
                }
            )
            /* Result is empty because we're using validate only */
            expect(results).toEqual([])
        })

        it('supports partial failures for multiple operations', async () => {
            const response = await customer.campaignBudgets.create(
                [
                    {
                        name: getRandomName('budget-1'),
                        amount_micros: 30000000,
                    },
                    {
                        name: getRandomName('budget-2'),
                        amount_micros: -1,
                    },
                ],
                {
                    partial_failure: true,
                    validate_only: true,
                }
            )

            expect(response.partial_failure_error).toBeDefined()
            expect(response.results).toEqual([])
        })

        it('can update a budget', async () => {
            const updated_budget: CampaignBudget = {
                resource_name: new_budget_resource_name,
                amount_micros: 20000000,
            }

            const { results } = await customer.campaignBudgets.update(updated_budget)
            const updated_budget_resource = results[0]

            expect(updated_budget_resource).toEqual(new_budget_resource_name)
        })

        it('can delete a budget', async done => {
            await customer.campaignBudgets.delete(new_budget_resource_name)
            done()
        })
    })
})
