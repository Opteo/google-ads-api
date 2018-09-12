import GoogleAdsApi from '..'
import config from '../config'

describe('Reporting', async () => {
    const lib_instance = new GoogleAdsApi({
		client_id: config.client_id, 
		client_secret: config.client_secret, 
		developer_token: config.developer_token
    })

    const customer = lib_instance.Customer({
		customer_account_id: config.cid, 
		refresh_token: config.refresh_token
	})
    
    it('Retrieves API fields', async () => {
        expect.assertions(2)
        const data = await customer.report({
            resource: 'ad_group',
            fields: ['ad_group.id', 'ad_group.name', 'campaign.id']
        })
        // console.log(data)
        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            campaign: {
                resource_name: expect.any(String),
                id: expect.any(String)
            },
            ad_group: {
                resource_name: expect.any(String),
                id: expect.any(String),
                name: expect.any(String),
            }
        })
    })   

    it('Retrieves Metrics', async () => {
        expect.assertions(2)
        const data = await customer.report({
            resource: 'ad_group',
            fields: ['ad_group.id', 'campaign.id'],
            metrics: ['clicks', 'conversions']
        })
        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            campaign: {
                resource_name: expect.any(String),
                id: expect.any(String)
            },
            ad_group: {
                resource_name: expect.any(String),
                id: expect.any(String),
            },
            metrics: {
                click: expect.any(String),
                conversions: expect.any(Number),
            }
        })
    })   

    it('Date Constants', async () => {
        expect.assertions(1)
        const data = await customer.report({
            resource: 'ad_group',
            fields: ['ad_group.id'],
            metrics: ['clicks', 'conversions'],
            date_constant: 'TODAY'
        })
        console.log(data);
        expect(data).toBeInstanceOf(Array)
    })   
})