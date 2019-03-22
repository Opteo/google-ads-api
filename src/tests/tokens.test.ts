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
})
