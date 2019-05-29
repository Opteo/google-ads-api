import { getEnumString, enums } from '../index'
import { translateEnumValue, buildReportQuery, verifyConstraintType, addQuotesIfMissing, snakeCaseGads } from '../utils'
import { ReportOptions } from '../types'

test('getEnumString', () => {
    const status = getEnumString('CampaignStatus', enums.CampaignStatus.ENABLED)
    expect(status).toEqual('ENABLED')

    const type = getEnumString('AdvertisingChannelType', enums.AdvertisingChannelType.HOTEL)
    expect(type).toEqual('HOTEL')

    try {
        getEnumString('InvalidEnumName', 2)
    } catch (err) {
        expect(err.message).toContain('Could not find')
    }

    try {
        getEnumString('CampaignStatus', 66)
    } catch (err) {
        expect(err.message).toContain('Could not find value')
    }
})

describe('translateEnumValue', () => {
    it("should tranlate an enum value to it's key (string) value", () => {
        const inputs = [
            ['ad_group.status', enums.AdGroupStatus.PAUSED],
            ['campaign.status', enums.CampaignStatus.ENABLED],
            ['campaign.advertising_channel_type', enums.AdvertisingChannelType.SHOPPING],
        ]

        const outputs = inputs.map(([name, value]) => translateEnumValue(name as string, value))

        expect(outputs).toEqual(['PAUSED', 'ENABLED', 'SHOPPING'])
    })
})

describe('snakeCaseGads', () => {
    it('should apply snakecase in the google way', () => {
        expect(snakeCaseGads('headlinePart1')).toEqual('headline_part1')
        expect(snakeCaseGads('adGroupAd')).toEqual('ad_group_ad')
    })
})

describe('addQuotesIfMissing', () => {
    it('should add quotes only when quotes are missing', () => {
        expect(addQuotesIfMissing(true)).toEqual(`"true"`)
        expect(addQuotesIfMissing('true')).toEqual(`"true"`)
        expect(addQuotesIfMissing(`"true"`)).toEqual(`"true"`)
        expect(addQuotesIfMissing('customer/133/campaign/456')).toEqual(`"customer/133/campaign/456"`)
        expect(addQuotesIfMissing(`'customer/133/campaign/456'`)).toEqual(`'customer/133/campaign/456'`)
        expect(addQuotesIfMissing(123)).toEqual(`"123"`)
        expect(addQuotesIfMissing(`123`)).toEqual(`"123"`)
        expect(addQuotesIfMissing(`"123"`)).toEqual(`"123"`)
    })
})

describe('verifyConstraintType', () => {
    it('should throw if a constraint value is not of a supported type', () => {
        expect(() => verifyConstraintType('key', undefined)).toThrow()
        expect(() => verifyConstraintType('key', null)).toThrow()
        expect(() => verifyConstraintType('key', { hello: 'yes' })).toThrow()
        expect(() => verifyConstraintType('key', [1, 'yes'])).toThrow()
    })

    it('should not throw if a constraint value is of a supported type', () => {
        expect(() => verifyConstraintType('key', true)).not.toThrow()
        expect(() => verifyConstraintType('key', 'hello')).not.toThrow()
        expect(() => verifyConstraintType('key', 123.66)).not.toThrow()
    })
})

describe('buildReportQuery', () => {
    it('should translate enums in constraints to their key (string) value', () => {
        const options: ReportOptions = {
            entity: 'ad_group',
            attributes: ['ad_group.name', 'campaign.name'],
            constraints: [
                { key: 'ad_group.status', op: '=', val: enums.AdGroupStatus.PAUSED },
                {
                    'campaign.advertising_channel_type': enums.AdvertisingChannelType.SEARCH,
                },
                {
                    key: 'metrics.clicks',
                    op: '>',
                    val: 10,
                },
                {
                    'campaign_budget.status': enums.BudgetStatus.ENABLED,
                },
            ],
        }

        const query = buildReportQuery(options)

        expect(query).toEqual(
            `SELECT ad_group.name, campaign.name FROM ad_group WHERE ad_group.status = "PAUSED" AND campaign.advertising_channel_type = "SEARCH" AND campaign_budget.status = "ENABLED" AND metrics.clicks > "10"`
        )
    })

    it(`should throw an error if "val" is undefined`, () => {
        const id = undefined

        const options: ReportOptions = {
            entity: 'campaign',
            attributes: ['campaign.id'],
            constraints: [{ key: 'campaign.id', op: '=', val: id }],
        }

        try {
            buildReportQuery(options)
        } catch (err) {
            expect(err.message).toContain('cannot be undefined')
        }
    })

    it('should throw an error when incorrectly using key, op, val constraint fields', () => {
        const options: ReportOptions = {
            entity: 'campaign',
            attributes: ['campaign.id'],
            constraints: [{ key: 'campaign.id', val: 2 }],
        }

        try {
            buildReportQuery(options)
        } catch (err) {
            expect(err.message).toContain('must specify { key, op, val }')
        }
    })
})
