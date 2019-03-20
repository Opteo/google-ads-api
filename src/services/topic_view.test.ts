// Auto Generated File! Do Not Edit.

// @ts-ignore
import { TopicView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('TopicView', async () => {

    describe('list', async () => {
        it('can retrieve a list of TopicViews with all fields (if valid)', async () => {
            const topic_views = await customer.topicViews.list()
            expect(topic_views).toBeInstanceOf(Array)

            if(topic_views.length > 0) {
                expect(topic_views[0].topic_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/topicViews`) || '',
                    })
                )
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.topicViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
