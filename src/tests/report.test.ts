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
            fields: ['ad_group.id', 'ad_group.name', 'campaign.id'],
            order_by: 'ad_group.id',
            sort_order: 'DESC'
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
        expect.assertions(1)
        const data = await customer.report({
            resource: 'ad_group',
            fields: ['ad_group.id', 'campaign.id'],
            metrics: ['clicks', 'conversions']
        })
        expect(data).toBeInstanceOf(Array)
    })   

    it('Date Constants', async () => {
        expect.assertions(1)
        const data = await customer.report({
            resource: 'ad_group',
            fields: ['ad_group.id'],
            metrics: ['clicks', 'conversions'],
            date_constant: 'TODAY'
        })
        // console.log(data);
        expect(data).toBeInstanceOf(Array)
    })    

    it('Custom Date Ranges', async () => {
        expect.assertions(1)
        const data = await customer.report({
            resource: 'ad_group',
            fields: ['ad_group.id'],
            metrics: ['clicks', 'conversions'],
            from_date: '2018-09-01',
            to_date: '2018-09-10',
        })
        // console.log(data);
        expect(data).toBeInstanceOf(Array)
    })    

    it('Array of Constraints', async () => {
        expect.assertions(2)
        const data = await customer.report({
            resource: 'ad_group',
            fields: ['ad_group.id', 'campaign.id'],
            metrics: ['clicks', 'conversions'],
            constraints: ['ad_group.status = ENABLED', 'campaign.id = 1485014801'],
            from_date: '2018-09-01',
            to_date: '2018-09-10',
        })
        expect(data).toBeInstanceOf(Array)
        expect(data[0].campaign.id).toEqual('1485014801')
    }) 

    it('Single String Constraints', async () => {
        expect.assertions(1)
        const data = await customer.report({
            resource: 'ad_group',
            fields: ['ad_group.id', 'campaign.id'],
            metrics: ['clicks', 'conversions'],
            constraints: 'ad_group.status = ENABLED AND campaign.id IN (1485014801, 1483704368)',
            date_constant: 'TODAY'
        })
        expect(data).toBeInstanceOf(Array)
    })   
})