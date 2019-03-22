// Auto Generated File! Do Not Edit.

// @ts-ignore
import { Label } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('Label', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of Labels with all fields (if valid)', async () => {
            const labels = await customer.labels.list()
            expect(labels).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(labels.length > 0 && labels[0].label.resource_name) {
                expect(labels[0].label).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/labels`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = labels[0].label.resource_name

                if(resource) {
                    const singleton = await customer.labels.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/labels`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.labels.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
