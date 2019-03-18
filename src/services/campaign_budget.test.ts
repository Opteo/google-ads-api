// @ts-ignore
import { newCustomer, BUDGET_ID, CID } from '../test_utils'

// @ts-ignore
import { CampaignBudget } from 'google-ads-node/build/lib/resources'
import { BudgetStatus } from 'google-ads-node/build/lib/enums'

jest.setTimeout(30000)
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
            expect(budgets[0]).toEqual({
                campaign_budget: expect.objectContaining({
                    resource_name: `customers/${CID}/campaignBudgets/${BUDGET_ID}`,
                    id: BUDGET_ID,
                    status: expect.any(Number),
                    amount_micros: expect.any(Number),
                }),
            })
        })

        it('can retrieve a list of budgets with constraints', async () => {
            const budgets = await customer.campaignBudgets.list({
                limit: 1,
                constraints: [
                    {
                        status: 'ENABLED',
                    },
                ],
            })
            expect(budgets.length).toEqual(1)
            expect(budgets[0]).toEqual({
                campaign_budget: expect.objectContaining({
                    status: BudgetStatus.ENABLED,
                }),
            })
        })
    })

    // describe('create', async () => {
    //     it('can create a new campaign from a specified campaign object', async () => {
    //         const budget: CampaignBudget = {
    //             name: 'shared-test-campaign-budget-2',
    //             // @ts-ignore
    //             amount_micros: {
    //                 value: 10000000,
    //             },
    //             explicitly_shared: true,
    //         }

    //         const created = await customer.campaignBudgets.create(budget)
    //         console.log(created)
    //     })
    // })
})
