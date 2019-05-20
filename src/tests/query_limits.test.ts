import { newCustomerWithMetrics } from '../test_utils'
const customer = newCustomerWithMetrics()
jest.setTimeout(30000)

describe('Query Limits', async () => {
    it('limits correctly, default page_size', async () => {
        const data = await customer.report({
            entity: 'keyword_view',
            attributes: ['ad_group_criterion.criterion_id'],
            segments: ['segments.date'],
            metrics: ['metrics.impressions'],
            date_constant: 'LAST_7_DAYS',
            limit: 10,
        })

        expect(data).toHaveLength(10)
    })

    it('limits correctly, page_size = limit', async () => {
        const data = await customer.report({
            entity: 'keyword_view',
            attributes: ['ad_group_criterion.criterion_id'],
            segments: ['segments.date'],
            metrics: ['metrics.impressions'],
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
            segments: ['segments.date'],
            metrics: ['metrics.impressions'],
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
            segments: ['segments.date'],
            metrics: ['metrics.impressions'],
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
            segments: ['segments.date'],
            metrics: ['metrics.impressions'],
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
            segments: ['segments.date'],
            metrics: ['metrics.impressions'],
            date_constant: 'LAST_7_DAYS',
            limit: 10,
            page_size: 20,
        })

        expect(data).toHaveLength(10)
    })

    it('iterates correctly when no limit is set', async () => {
        const data = await customer.report({
            entity: 'customer',
            attributes: ['customer.id'],
            segments: ['segments.date'],
            metrics: ['metrics.impressions'],
            date_constant: 'LAST_30_DAYS',
            page_size: 13,
        })

        expect(data).toHaveLength(30)
    })
})
