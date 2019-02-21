import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

describe('Geo Target Constants', async () => {
    const lib_instance = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })

    const customer = lib_instance.Customer({
        customer_account_id: config.cid,
        manager_cid: config.manager_cid,
        refresh_token: config.refresh_token,
    })

    const location_id = '1021278'

    it('Retrieves Single Geo Target Constant', async () => {
        expect.assertions(1)
        const geo_target_constant = await customer.geoTargetConstants.retrieve(location_id)
        expect(geo_target_constant.name).toEqual('Raleigh')
    })

    it('Suggests Geo Target Constants', async () => {
        expect.assertions(1)

        const geo_target_constants = await customer.geoTargetConstants.suggest({
            locale: 'en',
            country_code: 'US',
            location_names: {
                names: ['mountain view'],
            },
        })

        expect(geo_target_constants.geoTargetConstantSuggestions).toBeInstanceOf(Array)
    })
})
