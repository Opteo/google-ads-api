import Http from './Http'
import CustomerInstance from './Customer'

import { Library, Account } from './types/Global'
import { Customer as ICustomer } from './types/Customer'

export default class GoogleAdsJs {
	private client_id: string|number
	private client_secret: string
	private developer_token: string

	/**
	 * Creates GoogleAdsJs Instance
	* @param client_id  - OAuth2 client ID 
	* @param client_secret - OAuth2 client secret
	* @param developer_token - Developer token
	*
	*/
	constructor({client_id, client_secret, developer_token}: Library) {
		this.client_id = client_id
		this.client_secret = client_secret
		this.developer_token = developer_token
	}

	/**
	 * Creates new Customer instance
	 * 
	 * @param customer_account_id - Client customer (account) ID
	 * @param refresh_token - OAuth2 refresh token
	 * 
	*/
	public Customer({customer_account_id, refresh_token, async_account_getter}: Account) : ICustomer {

		/* 
			Need to accept a fn in there instead...
			Perhaps make the fn mode default, and create it if it doesn't exist?
			gotta change all the TYPES though
		 */

		if(!async_account_getter && (!customer_account_id || !refresh_token)){
			throw new Error('must specify either {customer_account_id, refresh_token} or an async_account_getter')
		}

		if(!async_account_getter){
			const cid = (customer_account_id || '').toString().split('-').join('')
			async_account_getter = async () => {
				return { cid, refresh_token }
			}
		}

		const http_controller = new Http({
			async_account_getter,
			client_id: this.client_id,
			developer_token: this.developer_token,
			client_secret: this.client_secret
		})

		return CustomerInstance(http_controller)
	}

}
