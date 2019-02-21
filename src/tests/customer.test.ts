import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

describe('Customer', async () => {
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

    let customer_name: string

    it('Retrieves Customer Data', async () => {
        expect.assertions(1)
        const customer_data = await customer.retrieve()
        customer_name = customer_data.descriptive_name
        expect(customer_data).toBeInstanceOf(Object)
    })

    it('Queries data using search method', async () => {
        expect.assertions(1)
        const data = await customer.query(`
            SELECT 
                campaign.id, 
                campaign.name, 
                ad_group.id, 
                ad_group.name 
            FROM ad_group
        `)
        // console.log(data)
        expect(data).toBeInstanceOf(Array)
    })

    it('Updates a customer', async () => {
        expect.assertions(2)
        const customer_data = await customer.update({
            update: { descriptive_name: 'Testing' },
        })
        expect(customer_data).toBeInstanceOf(Object)
        const customer_updated_data = await customer.retrieve()
        expect(customer_updated_data.descriptive_name).toEqual('Testing')
        await customer.update({
            update: { descriptive_name: customer_name },
        })
    })
})
