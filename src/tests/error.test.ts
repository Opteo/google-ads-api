import { enums } from '../index'
import { newCustomer } from '../test_utils'
const customer = newCustomer()

jest.setTimeout(30000)

describe('Error', async () => {
    it('throws an error when an entity is invalid', async () => {
        await expect(
            customer.report({
                // @ts-ignore
                entity: 'campayne',
                attributes: ['campaign.id'],
            })
        ).rejects.toThrow('is not a valid resource name')
    })

    it('throws an error when an attribute is invalid', async () => {
        await expect(
            customer.report({
                entity: 'campaign',
                // @ts-ignore
                attributes: ['wasd'],
            })
        ).rejects.toThrow('Unrecognized field')
    })

    it('throws an error when performing an invalid query', async () => {
        await expect(
            customer.query(`SELECT campaign.id FROM campaign WHERE segments.date DURING LAST_13_DAYS`)
        ).rejects.toThrow('Invalid date literal')
    })

    it('throws an error with additional grpc metadata', async () => {
        try {
            await customer.query(`
                SELECT campaign.id 
                FROM campaign 
                WHERE segments.date DURING LAST_13_DAYS
            `)
        } catch (err) {
            expect(err.code.queryError).toEqual(enums.QueryError.INVALID_VALUE_WITH_DURING_OPERATOR) // INVALID_ARGUMENT
            expect(err.request).toEqual({
                customerId: expect.any(String),
                query: expect.any(String),
                pageToken: '',
                pageSize: 10000,
                validateOnly: false,
                returnSummaryRow: false,
            })
            expect(typeof err.request_id).toBe('string')
        }
    })

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
