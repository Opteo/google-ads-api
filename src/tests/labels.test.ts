import { newCustomer } from '../test_utils'
const customer = newCustomer()

describe('Labels', () => {
    it('can create a new label', async () => {
        const rn = await customer.labels.create(
            {
                name: 'label-name',
                text_label: {
                    background_color: '#e993eb',
                    description: 'description',
                },
            },
            { validate_only: true }
        )
        // Empty as validate only is true
        expect(rn.results).toEqual([])
    })
})
