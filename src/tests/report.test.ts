import { orderBy } from 'lodash'
import { newCustomerWithMetrics, newCustomer } from '../test_utils'

import { AdGroupStatus, AdType } from 'google-ads-node/build/lib/enums'

describe('Reporting', async () => {
    const customer = newCustomerWithMetrics()

    it('retrieves API attributes', async () => {
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'ad_group.name', 'campaign.id'],
            order_by: 'ad_group.id',
            sort_order: 'DESC',
        })
        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            campaign: {
                resource_name: expect.any(String),
                id: expect.any(Number),
            },
            ad_group: {
                resource_name: expect.any(String),
                id: expect.any(Number),
                name: expect.any(String),
            },
        })
    })

    it('retrieves metrics', async () => {
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'campaign.id'],
            metrics: ['metrics.clicks', 'metrics.conversions', 'metrics.cost_micros'],
            order_by: 'id',
        })

        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            campaign: {
                resource_name: expect.any(String),
                id: expect.any(Number),
            },
            ad_group: {
                resource_name: expect.any(String),
                id: expect.any(Number),
            },
            metrics: {
                clicks: expect.any(Number),
                conversions: expect.any(Number),
                cost_micros: expect.any(Number),
            },
        })
    })

    it('retrieves segments', async () => {
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'campaign.id'],
            segments: ['segments.device'],
            limit: 10,
        })

        expect(data[0]).toEqual({
            campaign: {
                resource_name: expect.any(String),
                id: expect.any(Number),
            },
            ad_group: {
                resource_name: expect.any(String),
                id: expect.any(Number),
            },
            segments: {
                device: expect.any(Number),
            },
        })
        expect(data.length).toBeLessThanOrEqual(10)
    })

    it('supports date constants', async () => {
        expect.assertions(12)

        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id'],
            segments: ['segments.date'],
            date_constant: 'TODAY',
            limit: 10,
        })
        const expected_date = new Date().toJSON().slice(0, 10)

        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            ad_group: {
                resource_name: expect.any(String),
                id: expect.any(Number),
            },
            segments: {
                date: expect.any(String),
            },
        })

        for (const row of data) {
            expect(row.segments.date).toEqual(expected_date)
        }
    })

    it('supports custom date ranges', async () => {
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id'],
            segments: ['segments.date'],
            from_date: '2019-01-01',
            to_date: '2019-01-10',
        })
        expect(data).toBeInstanceOf(Array)

        const ordered_dates = orderBy(data, r => r.segments.date)
        expect(ordered_dates[0].segments.date).toEqual('2019-01-01')
        expect(ordered_dates[ordered_dates.length - 1].segments.date).toEqual('2019-01-10')
    })

    it('supports constraints as an array of strings', async () => {
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'ad_group.status'],
            constraints: ['ad_group.status = ENABLED'],
            limit: 2,
        })

        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            ad_group: {
                resource_name: expect.any(String),
                id: expect.any(Number),
                status: 2,
            },
        })
        expect(data[1].ad_group.status).toEqual(AdGroupStatus.ENABLED)
    })

    it('supports constraints as an array of shorthands', async () => {
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'ad_group.status'],
            constraints: [{ 'ad_group.status': 'ENABLED' }],
            limit: 2,
        })
        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            ad_group: {
                resource_name: expect.any(String),
                id: expect.any(Number),
                status: AdGroupStatus.ENABLED,
            },
        })
        expect(data[1]).toEqual({
            ad_group: {
                resource_name: expect.any(String),
                id: expect.any(Number),
                status: AdGroupStatus.ENABLED,
            },
        })
    })

    it('supports constraints as an array of objects', async () => {
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'ad_group.status'],
            constraints: [
                {
                    key: 'ad_group.status',
                    op: '=',
                    val: 'ENABLED',
                },
            ],
            limit: 2,
        })
        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            ad_group: {
                resource_name: expect.any(String),
                id: expect.any(Number),
                status: AdGroupStatus.ENABLED,
            },
        })
        expect(data[1]).toEqual({
            ad_group: {
                resource_name: expect.any(String),
                id: expect.any(Number),
                status: AdGroupStatus.ENABLED,
            },
        })
    })

    it('supports using enums as constraints', async () => {
        const rows = await customer.report({
            entity: 'ad_group_ad',
            attributes: ['ad_group.id', 'ad_group.status'],
            constraints: [
                { 'ad_group.status': AdGroupStatus.ENABLED },
                { 'ad_group_ad.ad.type': [AdType.TEXT_AD, AdType.EXPANDED_TEXT_AD] },
            ],
            limit: 1,
        })
        expect(rows[0].ad_group.status).toEqual(AdGroupStatus.ENABLED)
    })

    it("retrieves no rows for entities that don't exist", async () => {
        const row = await customer.report({
            entity: 'campaign',
            attributes: ['campaign.id'],
            constraints: [{ 'campaign.id': '0123456789' }],
        })
        expect(row.length).toEqual(0)
    })
})

describe('Reporting (zero metric rows)', async () => {
    const customer = newCustomer()

    it('retrieves no rows because all metrics are zero', async () => {
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'campaign.id'],
            segments: ['segments.device'],
            limit: 10,
        })
        expect(data).toEqual([])
        expect(data.length).toEqual(0)
    })
})
