import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

describe('Campaign Budgets', async () => {
    const lib_instance = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })
    const customer = lib_instance.Customer({
        customer_account_id: config.cid,
        manager_cid: config.manager_cid,
        refresh_token: config.refresh_token,
    })

    let budget_id = ''

    it('Lists All Campaign Budgets', async () => {
        expect.assertions(1)
        const budgets = await customer.campaignBudgets.list()
        expect(budgets).toBeInstanceOf(Array)
    })

    it('Creates New Campaign Budget', async done => {
        expect.assertions(1)
        const budget = await customer.campaignBudgets.create({
            amount_micros: 12000000,
            explicitly_shared: false,
        })
        expect(budget).toEqual({
            id: expect.any(String),
            resource_name: expect.any(String),
        })
        budget_id = budget.id
        done()
    })

    it('Retrieves Campaign Budget', async done => {
        expect.assertions(1)
        const budget = await customer.campaignBudgets.retrieve(budget_id)
        expect(budget.id).toEqual(budget_id)
        done()
    })

    it('Updates Campaign Budget', async done => {
        expect.assertions(1)
        await customer.campaignBudgets.update({
            id: budget_id,
            update: {
                amount_micros: 15000000,
            },
        })
        const campaign_budget = await customer.campaignBudgets.retrieve(budget_id)
        expect(campaign_budget.amount_micros).toBe('15000000')
        done()
    })

    it('Deletes Campaign Budget', async () => {
        expect.assertions(1)
        await customer.campaignBudgets.delete(budget_id)
        const campaign_budget = await customer.campaignBudgets.retrieve(budget_id)
        expect(campaign_budget.status).toBe('REMOVED')
    })
})
