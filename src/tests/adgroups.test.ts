import GoogleAdsJs from '..'
import config from '../config'

const getRandomAdgroupName = () => `test-adgroup-${((Math.random() * 100) + 1).toFixed(0)} (created during library test)`

describe('AdGroups', async () => {
    const lib_instance = new GoogleAdsJs({
		client_id: config.client_id, 
		client_secret: config.client_secret, 
		developer_token: config.developer_token
    })

    const customer = lib_instance.Customer({
		customer_account_id: config.cid, 
		refresh_token: config.refresh_token
	})

    const campaign_id = 1485014801
    let new_adgroup_id = ''
    
    it('Lists All AdGroups', async () => {
        expect.assertions(1)
        const adgroups = await customer.adgroups.list({
            fields: [
                'id',
                'name',
                'status'
            ],
            constraints: {
                campaign_id,
                status: 'ENABLED'
            }
        })

        expect(adgroups).toEqual({
            results: expect.any(Object),
            total_results_count: expect.any(String),
            field_mask: 'adGroup.id,adGroup.name,adGroup.status'
        })
    })
    
    it('Creates New AdGroup', async (done) => {
		expect.assertions(1)
		
		const new_adgroup = await customer.adgroups.create({
                name: getRandomAdgroupName(),
                campaign_id
        })
        
		expect(new_adgroup).toEqual({
			id: expect.any(String),
			resource_name: expect.any(String)
		})

		new_adgroup_id = new_adgroup.id
		done()
	})

    it('Retrieves Single AdGroup', async () => {
        expect.assertions(1)
        const adgroup = await customer.adgroups.retrieve(new_adgroup_id)

        expect(adgroup).toEqual({
            id: expect.any(String),
            resource_name: expect.any(String),
            name: expect.any(String),
            status: expect.any(String),
            campaign: expect.any(String),
            type: expect.any(String),
            cpc_bid_micros: expect.any(String),
            cpm_bid_micros: expect.any(String),
            cpa_bid_micros: expect.any(String),
            cpv_bid_micros: expect.any(String),
        })
    })

    it('Updates AdGroup', async () => {
        expect.assertions(1)
        const new_adgroup_name = getRandomAdgroupName()
        await customer.adgroups.update({
            id: new_adgroup_id,
            update: {
                name: new_adgroup_name
            }
        })
        const updated_adgroup = await customer.adgroups.retrieve(new_adgroup_id)
        expect(updated_adgroup.name).toEqual(new_adgroup_name)
    })

    it('Deletes AdGroup', async () => {
        expect.assertions(1)
        await customer.adgroups.delete(new_adgroup_id)
        const adgroup = await customer.adgroups.retrieve(new_adgroup_id)
		expect(adgroup.status).toBe('REMOVED')
    })

})