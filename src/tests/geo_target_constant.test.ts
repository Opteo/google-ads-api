// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('Geo Target Constants', async () => {
    const location_id = '1021278'

    it('Retrieves Single Geo Target Constant', async () => {
        expect.assertions(1)
        const geo_target_constant = await customer.geoTargetConstants.get(`geoTargetConstants/${location_id}`)
        expect(geo_target_constant.name).toEqual('Raleigh')
    })

    it('Suggests Geo Target Constants', async () => {
        const geo_target_constants = await customer.geoTargetConstants.suggest({
            locale: 'en',
            country_code: 'US',
            location_names: {
                names: ['mountain view'],
            },
        })

        expect(geo_target_constants[0].search_term).toEqual('mountain view')

        expect(geo_target_constants).toBeInstanceOf(Array)
    })
})
