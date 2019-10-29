// @ts-ignore
import { newCustomerWithMetrics } from '../test_utils'
const customer = newCustomerWithMetrics()

describe('Recommendations', () => {
    let recommendationResourceName = ''

    // Even though this is in an auto-gen test, we need to get a recommendation to test applying it
    it('Lists recommendations', async () => {
        expect.assertions(2)
        const recommendations = await customer.recommendations.list()
        expect(recommendations).toBeInstanceOf(Array)
        expect(typeof recommendations[0].recommendation.resource_name).toEqual('string')
        recommendationResourceName = recommendations[0].recommendation.resource_name as string
    })

    it('Gets a recommendation', async () => {
        expect.assertions(2)
        const recommendation = await customer.recommendations.get(recommendationResourceName.split('/')[3])
        expect(recommendation).toBeInstanceOf(Object)
        expect(typeof recommendation.resource_name).toEqual('string')
    })

    it('Applies a recommendation', async () => {
        expect.assertions(2)
        const { resultsList } = await customer.recommendations.applyRecommendation(recommendationResourceName, {
            validate_only: true,
        })
        expect(resultsList instanceof Array).toEqual(true)
        expect(resultsList[0]).toHaveProperty('resourceName')
    })
})
