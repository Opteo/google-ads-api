import { orderBy } from 'lodash'

import GoogleAdsApi from '..'
import config from '../config'

jest.setTimeout(30000)

describe('Reporting', async () => {
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

    it('Retrieves API Attributes', async () => {
        expect.assertions(2)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['id', 'name', 'campaign.id'],
            order_by: 'ad_group.id',
            sort_order: 'DESC',
        })

        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            campaign: {
                resource_name: expect.any(String),
                id: expect.any(String),
            },
            resource_name: expect.any(String),
            id: expect.any(String),
            name: expect.any(String),
        })
    })

    it('Retrieves Metrics', async () => {
        expect.assertions(2)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'campaign.id'],
            metrics: ['metrics.clicks', 'conversions', 'cost'],
            order_by: 'id',
        })

        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            campaign: {
                resource_name: expect.any(String),
                id: expect.any(String),
            },
            resource_name: expect.any(String),
            id: expect.any(String),
            metrics: {
                clicks: expect.any(Number),
                conversions: expect.any(Number),
                cost_micros: expect.any(Number),
                cost: expect.any(Number),
            },
        })
    })

    it('Converts Micros', async () => {
        expect.assertions(2)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['id', 'campaign.id'],
            metrics: ['metrics.clicks', 'conversions', 'metrics.cost_micros', 'cost'],
            order_by: 'id',
            convert_micros: true,
        })

        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            campaign: {
                resource_name: expect.any(String),
                id: expect.any(String),
            },
            resource_name: expect.any(String),
            id: expect.any(String),
            metrics: {
                clicks: expect.any(Number),
                conversions: expect.any(Number),
                cost_micros: expect.any(Number),
                cost: expect.any(Number),
            },
        })
    })

    it('Retrieves Segments', async () => {
        expect.assertions(2)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'campaign.id'],
            segments: ['device'],
            limit: 10,
        })
        expect(data[0]).toEqual({
            campaign: {
                resource_name: expect.any(String),
                id: expect.any(String),
            },
            segments: {
                device: expect.any(String),
            },
            resource_name: expect.any(String),
            id: expect.any(String),
        })
        expect(data.length).toBeLessThanOrEqual(10)
    })

    it('Date Constants', async () => {
        expect.assertions(2)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id'],
            segments: ['date'],
            date_constant: 'TODAY',
        })

        const expected_date = new Date().toJSON().slice(0, 10)

        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            segments: {
                date: expect.stringContaining(expected_date),
            },
            resource_name: expect.any(String),
            id: expect.any(String),
        })
    })

    it('Custom Date Ranges', async () => {
        expect.assertions(3)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id'],
            segments: ['date'],
            from_date: '2019-01-01',
            to_date: '2019-01-10',
        })
        expect(data).toBeInstanceOf(Array)

        const ordered_dates = orderBy(data, r => r.segments.date)
        expect(ordered_dates[0].segments.date).toEqual('2019-01-01')
        expect(ordered_dates[ordered_dates.length - 1].segments.date).toEqual('2019-01-10')
    })

    it('Constraints as Array of Strings', async () => {
        expect.assertions(3)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'ad_group.status'],
            constraints: ['ad_group.status = ENABLED'],
            limit: 2,
        })

        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            resource_name: expect.any(String),
            id: expect.any(String),
            status: expect.stringContaining('ENABLED'),
        })
        expect(data[1]).toEqual({
            resource_name: expect.any(String),
            id: expect.any(String),
            status: expect.stringContaining('ENABLED'),
        })
    })

    it('Constraints as Array of Shorthands', async () => {
        expect.assertions(3)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'ad_group.status'],
            constraints: [{ 'ad_group.status': 'ENABLED' }],
            limit: 2,
        })
        expect(data).toBeInstanceOf(Array)
        expect(data[0]).toEqual({
            resource_name: expect.any(String),
            id: expect.any(String),
            status: expect.stringContaining('ENABLED'),
        })
        expect(data[1]).toEqual({
            resource_name: expect.any(String),
            id: expect.any(String),
            status: expect.stringContaining('ENABLED'),
        })
    })

    it('Constraints as Array of Objects', async () => {
        expect.assertions(3)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'status'],
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
            resource_name: expect.any(String),
            id: expect.any(String),
            status: expect.stringContaining('ENABLED'),
        })
        expect(data[1]).toEqual({
            resource_name: expect.any(String),
            id: expect.any(String),
            status: expect.stringContaining('ENABLED'),
        })
    })
})
