import Bottleneck from 'bottleneck'
import crypto from 'crypto'
import { noop } from 'lodash'

import CustomerInstance from './customer'
import GrpcClient from './grpc'
import { normaliseCustomerId } from './utils'
import { PreReportHook, PostReportHook } from './types'

interface ClientOptions {
    readonly client_id: string
    readonly client_secret: string
    readonly developer_token: string
    readonly redis_options?: any
}

interface CustomerAuth {
    customer_account_id: string
    refresh_token: string
    login_customer_id?: string
}

interface CustomerOptions extends CustomerAuth {
    async_account_getter?: () => Promise<CustomerAuth>
    pre_report_hook?: PreReportHook
    post_report_hook?: PostReportHook
}

export default class GoogleAdsApi {
    private readonly options: ClientOptions
    private throttler: Bottleneck

    constructor(options: ClientOptions) {
        this.options = options

        const throttler_options = {
            minTime: 10, // roughly 100 requests per second
            id:
                'id' +
                crypto
                    .createHash('md5')
                    .update(this.options.developer_token)
                    .digest('hex'), // don't want to leak dev token to redis
            /* Clustering options */
            datastore: this.options.redis_options ? 'redis' : 'local',
            clearDatastore: false,
            clientOptions: this.options.redis_options,
            timeout: 1000 * 60 * 10,
        }

        this.throttler = new Bottleneck(throttler_options)

        this.throttler.on('error', err => {
            console.error('Could not connect to redis: ')
            console.error(err)
        })
    }

    public Customer({
        customer_account_id,
        refresh_token,
        login_customer_id,
        async_account_getter,
        pre_report_hook,
        post_report_hook,
    }: CustomerOptions) {
        if (!async_account_getter && (!customer_account_id || !refresh_token)) {
            throw new Error(
                'must specify either {customer_account_id, refresh_token, manager_cid} or an async_account_getter'
            )
        }

        pre_report_hook = pre_report_hook || noop
        post_report_hook = post_report_hook || noop

        customer_account_id = normaliseCustomerId(customer_account_id)
        login_customer_id = normaliseCustomerId(login_customer_id)

        if (!async_account_getter) {
            async_account_getter = async () => {
                return { customer_account_id, login_customer_id, refresh_token }
            }
        }

        const client = new GrpcClient(
            this.options.developer_token,
            this.options.client_id,
            this.options.client_secret,
            refresh_token,
            login_customer_id
        )

        return CustomerInstance(customer_account_id, client, this.throttler, pre_report_hook, post_report_hook)
    }
}
