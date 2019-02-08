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
    let budget_id_1 = ''
    let budget_id_2 = ''

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

    it('Creates 2 New Campaign Budgets', async done => {
        expect.assertions(1)

        const budgets = await customer.campaignBudgets.create([
            {
                amount_micros: 13000000,
                explicitly_shared: false,
            },
            {
                amount_micros: 14000000,
                explicitly_shared: false,
            },
        ])

        expect(budgets).toContainEqual(
            expect.objectContaining({
                id: expect.any(String),
                resource_name: expect.any(String),
            })
        )
        const budget_ids = budgets.map((x: any, i: number) => x.id)
        budget_id_1 = budget_ids[0]
        budget_id_2 = budget_ids[1]
        done()
    })

    it('Retrieves Campaign Budget', async done => {
        expect.assertions(1)
        const budget = await customer.campaignBudgets.retrieve(budget_id)
        expect(budget.id).toEqual(budget_id)
        done()
    })

    it('Updates Multiple Campaign Budgets', async done => {
        expect.assertions(2)
        const update_config = [
            {
                id: budget_id_1,
                update: {
                    amount_micros: 16000000,
                },
            },
            {
                id: budget_id_2,
                update: {
                    amount_micros: 17000000,
                },
            },
        ]
        await customer.campaignBudgets.update(update_config)
        const campaign_budget_1 = await customer.campaignBudgets.retrieve(budget_id_1)
        expect(campaign_budget_1.amount_micros).toBe('16000000')
        const campaign_budget_2 = await customer.campaignBudgets.retrieve(budget_id_2)
        expect(campaign_budget_2.amount_micros).toBe('17000000')
        done()
    })

    it('Deletes Campaign Budget', async () => {
        expect.assertions(3)
        await customer.campaignBudgets.delete(budget_id)
        const campaign_budget = await customer.campaignBudgets.retrieve(budget_id)
        expect(campaign_budget.status).toBe('REMOVED')

        await customer.campaignBudgets.delete(budget_id_1)
        const campaign_budget_1 = await customer.campaignBudgets.retrieve(budget_id_1)
        expect(campaign_budget_1.status).toBe('REMOVED')

        await customer.campaignBudgets.delete(budget_id_2)
        const campaign_budget_2 = await customer.campaignBudgets.retrieve(budget_id_2)
        expect(campaign_budget_2.status).toBe('REMOVED')
    })
})
