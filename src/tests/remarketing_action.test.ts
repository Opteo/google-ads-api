// Auto Generated File! Do Not Edit.

// @ts-ignore
import { RemarketingAction } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('RemarketingAction', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of RemarketingActions with all fields (if valid)', async () => {
            const remarketing_actions = await customer.remarketingActions.list()
            expect(remarketing_actions).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(remarketing_actions.length > 0 && remarketing_actions[0].remarketing_action.resource_name) {
                expect(remarketing_actions[0].remarketing_action).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/remarketingActions`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = remarketing_actions[0].remarketing_action.resource_name

                if(resource) {
                    const singleton = await customer.remarketingActions.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/remarketingActions`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.remarketingActions.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
