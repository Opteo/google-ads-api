// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName, delay } from '../test_utils'

// @ts-ignore
import { CampaignBudget } from 'google-ads-node/build/lib/resources'
// @ts-ignore
import { BudgetStatus } from 'google-ads-node/build/lib/enums'

jest.setTimeout(30000)
const customer = newCustomer()

describe('campaign budgets', async () => {
    // describe('get', async () => {
    //     it('can retrieve a single campaign with an id', async () => {
    //         const budget = await customer.campaignBudgets.get(BUDGET_ID)
    //         expect(budget).toEqual(
    //             expect.objectContaining({
    //                 resource_name: `customers/${CID}/campaignBudgets/${BUDGET_ID}`,
    //                 id: BUDGET_ID,
    //                 status: expect.any(Number),
    //                 amount_micros: expect.any(Number),
    //             })
    //         )
    //     })

    //     it("throws an error when the campaign doesn't exist", async () => {
    //         await expect(customer.campaignBudgets.get(123)).rejects.toThrow('Resource not found')
    //     })
    // })

    // describe('list', async () => {
    //     it('can retrieve a list of budgets with all fields (if valid)', async () => {
    //         const budgets = await customer.campaignBudgets.list()
    //         expect(budgets).toBeInstanceOf(Array)
    //         expect(budgets[0]).toEqual({
    //             campaign_budget: expect.objectContaining({
    //                 resource_name: `customers/${CID}/campaignBudgets/${BUDGET_ID}`,
    //                 id: BUDGET_ID,
    //                 status: expect.any(Number),
    //                 amount_micros: expect.any(Number),
    //             }),
    //         })
    //     })

    //     it('can retrieve a list of budgets with constraints', async () => {
    //         const budgets = await customer.campaignBudgets.list({
    //             limit: 1,
    //             constraints: [
    //                 {
    //                     status: 'ENABLED',
    //                 },
    //             ],
    //         })
    //         expect(budgets.length).toEqual(1)
    //         expect(budgets[0]).toEqual({
    //             campaign_budget: expect.objectContaining({
    //                 status: BudgetStatus.ENABLED,
    //             }),
    //         })
    //     })
    // })

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
