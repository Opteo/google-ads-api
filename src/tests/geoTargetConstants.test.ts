// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()
jest.setTimeout(30000)

describe('Geo Target Constants', async () => {
    const location_id = '1021278'

    it.only('Retrieves Single Geo Target Constant', async () => {
        expect.assertions(1)
        const geo_target_constant = await customer.geoTargetConstants.get(`geoTargetConstants/${location_id}`)
        expect(geo_target_constant.name).toEqual('Raleigh')
    })

    it.only('Suggests Geo Target Constants', async () => {
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
