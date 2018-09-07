import GoogleAdsJs from '..'
import config from '../config'

const getRandomSharedSetName = () => `test-list-${((Math.random() * 100) + 1).toFixed(0)} (created during library test)`

describe('Shared Sets', async () => {
	const lib_instance = new GoogleAdsJs({
		client_id: config.client_id, 
		client_secret: config.client_secret, 
		developer_token: config.developer_token
	})
	
	const customer = lib_instance.Customer({
		customer_account_id: config.cid, 
		refresh_token: config.refresh_token
	})

	let new_shared_set_id = ''

	it('Lists All Shared Sets', async () => {
		expect.assertions(1)
		const shared_sets = await customer.sharedSets.list({
			limit: 2,
			fields: [
				'id',
				'name',
				'status'
			],
			constraints: {
				status: 'ENABLED',
			}
		})

		expect(shared_sets).toEqual({
            results: expect.any(Object),
            total_results_count: expect.any(String),
            field_mask: 'sharedSet.id,sharedSet.name,sharedSet.status'
        })
	})

	it('Creates New Shared Set', async (done) => {
		expect.assertions(1)
		const new_shared_set = await customer.sharedSets.create({
			name: getRandomSharedSetName(),
			type: 'NEGATIVE_KEYWORDS'
		})

		expect(new_shared_set).toEqual({
			id: expect.any(String),
			resource_name: expect.any(String)
		})

		new_shared_set_id = new_shared_set.id
		done()
	})

	it('Retrieves Single Shared Set', async () => {
		expect.assertions(1)
		const shared_set = await customer.sharedSets.retrieve(new_shared_set_id)

		expect(shared_set).toEqual({
			resource_name: expect.any(String),
			id: expect.any(String),
			type: expect.any(String),
			name: expect.any(String),
			status: expect.any(String),
			member_count: expect.any(String),
			reference_count: expect.any(String),
		})
	})

	it('Updates Shared Set', async () => {
		expect.assertions(1)
		const new_shared_set_name = getRandomSharedSetName()
		await customer.sharedSets.update({
			id: new_shared_set_id,
			update: {
				name: new_shared_set_name
			}
		})
		const shared_set = await customer.sharedSets.retrieve(new_shared_set_id)
		expect(shared_set.name).toBe(new_shared_set_name)
	})

	it('Deletes Shared Set', async () => {
		await customer.sharedSets.delete(new_shared_set_id)
		const shared_set = await customer.sharedSets.retrieve(new_shared_set_id)	
		expect(shared_set.status).toBe('REMOVED')
	})
	
})