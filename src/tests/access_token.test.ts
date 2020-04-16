import { getCustomerAccessToken} from '../test_utils'

describe('AccessTokenTest', () => {

    it('can retrieve a list of Campaigns with all fields (if valid)', async() => {
        const customer = await getCustomerAccessToken()
        const list = await customer.conversionActions.list();
        expect(list)
    })
})



