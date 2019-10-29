// @ts-ignore
import { newCustomerWithMetrics } from '../test_utils'
const customer = newCustomerWithMetrics()

describe('Recommendations', () => {
    let recommendationResourceName = ''

    // Even though this is in an auto-gen test, we need to get a recommendation to test applying it
    it('Lists recommendations', async () => {
        expect.assertions(2)
        const recommendations = await customer.recommendations.list()
        console.log(recommendations)
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

    /*
    These are commented out to make sure no changes are actually made to accounts
    
    it('Applies a recommendation', async () => {
        expect.assertions(2)
        const { results } = await customer.recommendations.applyRecommendation(recommendationResourceName)
        expect(results instanceof Array).toEqual(true)
        expect(typeof results[0]).toEqual('string')
    })

    it('Dismisses a recommendation', async () => {
        expect.assertions(2)
        const { results } = await customer.recommendations.dismissRecommendation(recommendationResourceName)
        expect(results instanceof Array).toEqual(true)
        expect(typeof results[0]).toEqual('string')
    }) */
})
