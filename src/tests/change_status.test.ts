// Auto Generated File! Do Not Edit.

// @ts-ignore
import { ChangeStatus } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('ChangeStatus', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of ChangeStatuss with all fields (if valid)', async () => {
            const change_status = await customer.changeStatus.list()
            expect(change_status).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(change_status.length > 0 && change_status[0].change_status.resource_name) {
                expect(change_status[0].change_status).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/changeStatus`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = change_status[0].change_status.resource_name

                if(resource) {
                    const singleton = await customer.changeStatus.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/changeStatus`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.changeStatus.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
