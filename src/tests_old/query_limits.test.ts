import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

describe('Query Limits', async () => {
    const lib_instance = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })

    const customer = lib_instance.Customer({
        customer_account_id: config.opteo_cid,
        manager_cid: config.opteo_manager_cid,
        refresh_token: config.opteo_refresh_token,
    })

    it('limits correctly, default page_size', async () => {
        const data = await customer.report({
            entity: 'keyword_view',
            attributes: ['ad_group_criterion.criterion_id'],
            segments: ['date'],
            metrics: ['impressions'],
            date_constant: 'LAST_7_DAYS',
            limit: 10,
        })

        expect(data).toHaveLength(10)
    })

    it('limits correctly, page_size = limit', async () => {
        const data = await customer.report({
            entity: 'keyword_view',
            attributes: ['ad_group_criterion.criterion_id'],
            segments: ['date'],
            metrics: ['impressions'],
            date_constant: 'LAST_7_DAYS',
            limit: 10,
            page_size: 10,
        })

        expect(data).toHaveLength(10)
    })

    it('limits correctly, page_size > limit', async () => {
        const data = await customer.report({
            entity: 'keyword_view',
            attributes: ['ad_group_criterion.criterion_id'],
            segments: ['date'],
            metrics: ['impressions'],
            date_constant: 'LAST_7_DAYS',
            limit: 10,
            page_size: 22,
        })

        expect(data).toHaveLength(10)
    })

    it('limits correctly, page_size < limit', async () => {
        const data = await customer.report({
            entity: 'keyword_view',
            attributes: ['ad_group_criterion.criterion_id'],
            segments: ['date'],
            metrics: ['impressions'],
            date_constant: 'LAST_7_DAYS',
            limit: 10,
            page_size: 3,
        })

        expect(data).toHaveLength(10)
    })

    it('limits correctly, page_size is multiple of limit', async () => {
        const data = await customer.report({
            entity: 'keyword_view',
            attributes: ['ad_group_criterion.criterion_id'],
            segments: ['date'],
            metrics: ['impressions'],
            date_constant: 'LAST_7_DAYS',
            limit: 10,
            page_size: 5,
        })

        expect(data).toHaveLength(10)
    })

    it('limits correctly, limit is multiple of page_size', async () => {
        const data = await customer.report({
            entity: 'keyword_view',
            attributes: ['ad_group_criterion.criterion_id'],
            segments: ['date'],
            metrics: ['impressions'],
            date_constant: 'LAST_7_DAYS',
            limit: 10,
            page_size: 20,
        })

        expect(data).toHaveLength(10)
    })
})
