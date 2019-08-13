import { newCustomer, CID } from '../test_utils'
const customer = newCustomer()

describe('Campaign', () => {
    describe('reporting', () => {
        it('can retrieve a list of Campaigns with all fields (if valid)', async () => {
            const campaigns = await customer.campaigns.list()
            expect(campaigns).toBeInstanceOf(Array)

            if (campaigns.length > 0 && campaigns[0].campaign.resource_name) {
                expect(campaigns[0].campaign).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/campaigns`) || '',
                    })
                )

                const resource = campaigns[0].campaign.resource_name

                if (resource) {
                    const singleton = await customer.campaigns.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/campaigns`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.campaigns.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })
})
