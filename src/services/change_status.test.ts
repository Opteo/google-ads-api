// Auto Generated File! Do Not Edit.

// @ts-ignore
import { ChangeStatus } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('ChangeStatus', async () => {

    describe('list', async () => {
        it('can retrieve a list of ChangeStatuss with all fields (if valid)', async () => {
            const change_statuss = await customer.changeStatus.list()
            expect(change_statuss).toBeInstanceOf(Array)

            if(change_statuss.length > 0) {
                expect(change_statuss[0].change_status).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/changeStatus`) || '',
                    })
                )
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
