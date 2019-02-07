import Bottleneck from 'bottleneck'
import crypto from 'crypto'
import { noop } from 'lodash'

import Http from './Http'
import CustomerInstance from './Customer'

import { Library, Account } from './types/Global'
import { Customer as ICustomer } from './types/Customer'

class GoogleAdsApi {
    private client_id: string | number
    private client_secret: string
    private developer_token: string
    private throttler: Bottleneck

    /**
     * Creates GoogleAdsApi Instance
     * @param client_id  - OAuth2 client ID
     * @param client_secret - OAuth2 client secret
     * @param developer_token - Developer token
     *
     */
    constructor({ client_id, client_secret, developer_token, redis_options }: Library) {
        this.client_id = client_id
        this.client_secret = client_secret
        this.developer_token = developer_token
        const options = {
            minTime: 10, // roughly 100 requests per second
            id:
                'id' +
                crypto
                    .createHash('md5')
                    .update(developer_token)
                    .digest('hex'), // don't want to leak dev token to redis
            /* Clustering options */
            datastore: redis_options ? 'redis' : 'local',
            clearDatastore: false,
            clientOptions: redis_options,
            timeout: 1000 * 60 * 10,
        }

        this.throttler = new Bottleneck(options)

        this.throttler.on('error', err => {
            console.error('Could not connect to redis: ')
            console.error(err)
        })
    }

    /**
     * Creates new Customer instance
     *
     * @param customer_account_id - Client customer (account) ID
     * @param refresh_token - OAuth2 refresh token
     *
     */
    public Customer({
        customer_account_id,
        refresh_token,
        manager_cid,
        async_account_getter,
        pre_query_hook,
        post_query_hook,
    }: Account): ICustomer {
        if (!async_account_getter && (!customer_account_id || !refresh_token)) {
            throw new Error(
                'must specify either {customer_account_id, refresh_token, manager_cid} or an async_account_getter'
            )
        }

        if (!async_account_getter) {
            const cid = (customer_account_id || '')
                .toString()
                .split('-')
                .join('')

            const _manager_cid = (manager_cid || '')
                .toString()
                .split('-')
                .join('')

            async_account_getter = async () => {
                return { cid, refresh_token, manager_cid: _manager_cid }
            }
        }

        pre_query_hook = pre_query_hook || noop
        post_query_hook = post_query_hook || noop

        const http_controller = new Http({
            async_account_getter,
            client_id: this.client_id,
            developer_token: this.developer_token,
            client_secret: this.client_secret,
            throttler: this.throttler,
            pre_query_hook,
            post_query_hook,
        })

        return CustomerInstance(http_controller)
    }
}

export = GoogleAdsApi
