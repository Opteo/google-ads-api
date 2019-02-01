import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

function delay(ms: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

describe('Tokens', async () => {
    const lib_instance = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })

    // TODO: finish this
    it('Waits for tokens to be available before querying', async () => {
        const customer = lib_instance.Customer({
            async_account_getter: async () => {
                await delay(1000)
                return {
                    cid: config.cid,
                    manager_cid: config.manager_cid,
                    refresh_token: config.refresh_token,
                }
            },
        })

        await customer.retrieve()
    })
})
