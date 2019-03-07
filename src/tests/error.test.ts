import GoogleAdsApi from '..'
import config from '../config'

jest.setTimeout(30000)

function newCustomer(customer_account_id: string, manager_cid: string, refresh_token: string) {
    const client = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })
    return client.Customer({
        customer_account_id,
        manager_cid,
        refresh_token,
    })
}

describe('Error', async () => {
    const customer = newCustomer(config.cid, config.manager_cid, config.refresh_token)

    it('throws an error when an entity is invalid', async () => {
        await expect(
            customer.report({
                entity: 'campayne',
                attributes: ['id'],
            })
        ).rejects.toThrow('Unrecognized field')
    })

    it('throws an error when an attribute is invalid', async () => {
        await expect(
            customer.report({
                entity: 'campaign',
                attributes: ['wasd'],
            })
        ).rejects.toThrow('Unrecognized field')
    })

    it('throws an error when performing an invalid query', async () => {
        await expect(
            customer.query(`SELECT campaign.id FROM campaign WHERE segments.date DURING LAST_13_DAYS`)
        ).rejects.toThrow('Invalid date literal')
    })

    it('throws an error with additional grpc metadata', async () => {
        try {
            await customer.query(`
                SELECT campaign.id 
                FROM campaign 
                WHERE segments.date DURING LAST_13_DAYS
            `)
        } catch (err) {
            expect(err.code).toEqual(3) // INVALID_ARGUMENT
            expect(err.request).toEqual({
                customerId: expect.any(String),
                query: expect.any(String),
                pageToken: '',
                pageSize: 10000,
                validateOnly: false,
            })
            expect(typeof err.request_id).toBe('string')
        }
    })
})
