import Bottleneck from 'bottleneck'
import crypto from 'crypto'
import { noop } from 'lodash'

import Customer, { CustomerInstance } from './customer'
import GrpcClient, { GoogleAdsNodeOptions } from './grpc'
import { normaliseCustomerId } from './utils'
import { PreReportHook, PostReportHook } from './types'
import AccessibleCustomersService from "./services/accessible_customers";

interface ClientOptions {
    readonly client_id: string
    readonly client_secret: string
    readonly developer_token: string
    readonly redis_options?: any
}

interface CustomerAuth {
    customer_account_id?: string
    refresh_token?: string
    login_customer_id?: string
}

interface CustomerOptions extends CustomerAuth, GoogleAdsNodeOptions {
    pre_report_hook?: PreReportHook
    post_report_hook?: PostReportHook
}

interface ListAccessibleCustomersOptions extends GoogleAdsNodeOptions {
    refresh_token: string
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
        pre_report_hook,
        post_report_hook,
        prevent_mutations,
        logging,
    }: CustomerOptions): CustomerInstance {
        if (!customer_account_id || !refresh_token) {
            throw new Error('Must specify {customer_account_id, refresh_token}')
        }

        pre_report_hook = pre_report_hook || noop
        post_report_hook = post_report_hook || noop

        customer_account_id = normaliseCustomerId(customer_account_id)
        login_customer_id = normaliseCustomerId(login_customer_id)

        const gads_node_options = {
            prevent_mutations,
            logging,
        }

        const client = new GrpcClient(
            this.options.developer_token,
            this.options.client_id,
            this.options.client_secret,
            refresh_token as string,
            login_customer_id,
            gads_node_options
        )

        return Customer(customer_account_id, client, this.throttler, pre_report_hook, post_report_hook)
    }

    public async listAccessibleCustomers({
        refresh_token,
        prevent_mutations,
        logging,
    }: ListAccessibleCustomersOptions): Promise<Array<string>> {
        if (!refresh_token) {
            throw new Error('Must specify {refresh_token}')
        }

        const gads_node_options = {
            prevent_mutations,
            logging,
        }

        const client = new GrpcClient(
            this.options.developer_token,
            this.options.client_id,
            this.options.client_secret,
            refresh_token as string,
            '',
            gads_node_options
        )

        const cusService = new AccessibleCustomersService(client, this.throttler, 'CustomerService')
        const { resource_names } = await cusService.listAccessibleCustomers()
        return resource_names
    }
}
