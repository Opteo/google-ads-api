import { enums } from '../index'
import { newCustomer } from '../test_utils'
const customer = newCustomer()

describe('Errors', () => {
    it('includes an enum error code in the error body', async () => {
        try {
            await customer.query(`campaign.id FROM campaign`)
        } catch (err) {
            expect(err.code.queryError).toEqual(enums.QueryError.EXPECTED_SELECT)
        }

        try {
            await customer.query(`SELECT campaign_feed.feed FROM ad_group_criterion`)
        } catch (err) {
            expect(err.code.queryError).toEqual(enums.QueryError.PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE)
        }
    })
})
