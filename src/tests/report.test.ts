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
        customer_account_id: config.opteo_cid,
        refresh_token: config.opteo_refresh_token,
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
        expect.assertions(1)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'campaign.id'],
            metrics: ['metrics.clicks', 'conversions', 'cost'],
            order_by: 'id',
        })

        expect(data).toBeInstanceOf(Array)
    })

    it('Converts Micros', async () => {
        expect.assertions(2)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: [
                'id',
                'campaign.id',
                'campaign.target_cpa.target_cpa_micros',
                'campaign.target_spend.target_spend_micros',
            ],
            metrics: ['metrics.clicks', 'conversions', 'metrics.cost_micros', 'cost'],
            constraints: ['ad_group.status = ENABLED', { key: 'cost', op: '>', val: 1 }],
            order_by: 'id',
            convert_micros: true,
        })

        expect(data).toBeInstanceOf(Array)
        expect(data[0].metrics).toEqual({
            clicks: expect.any(Number),
            conversions: expect.any(Number),
            cost_micros: expect.any(Number),
            cost: expect.any(Number),
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
            device: expect.any(String),
            resource_name: expect.any(String),
            id: expect.any(String),
        })
        expect(data).toHaveLength(10)
    })

    it('Date Constants', async () => {
        expect.assertions(1)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id'],
            metrics: ['clicks', 'conversions'],
            date_constant: 'TODAY',
        })
        expect(data).toBeInstanceOf(Array)
    })

    it('Custom Date Ranges', async () => {
        expect.assertions(1)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id'],
            metrics: ['clicks', 'conversions'],
            from_date: '2018-09-01',
            to_date: '2018-09-10',
        })
        expect(data).toBeInstanceOf(Array)
    })

    it('Constraints as Array of Strings', async () => {
        expect.assertions(1)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'campaign.id'],
            metrics: ['clicks', 'conversions'],
            constraints: ['ad_group.status = ENABLED'],
            from_date: '2018-09-01',
            to_date: '2018-09-10',
        })
        expect(data).toBeInstanceOf(Array)
    })

    it('Constraints as Array of Shorthands', async () => {
        expect.assertions(1)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'campaign.id'],
            metrics: ['clicks', 'conversions'],
            constraints: [{ 'ad_group.status': 'ENABLED' }, { 'campaign.id': [1485014801, 1483704368] }],
            date_constant: 'TODAY',
        })
        expect(data).toBeInstanceOf(Array)
    })

    it('Constraints as Array of Objects', async () => {
        expect.assertions(1)
        const data = await customer.report({
            entity: 'ad_group',
            attributes: ['ad_group.id', 'campaign.id'],
            metrics: ['clicks', 'conversions'],
            constraints: [
                {
                    key: 'ad_group.status',
                    op: '=',
                    val: 'ENABLED',
                },
                {
                    key: 'clicks',
                    op: '>',
                    val: '1',
                },
            ],
            date_constant: 'TODAY',
            limit: 5,
        })
        expect(data).toBeInstanceOf(Array)
    })
})
