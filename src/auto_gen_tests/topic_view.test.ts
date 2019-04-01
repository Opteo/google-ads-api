// Auto Generated File! Do Not Edit.

// @ts-ignore
import { TopicView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('TopicView', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of TopicViews with all fields (if valid)', async () => {
            const topic_views = await customer.topicViews.list()
            expect(topic_views).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(topic_views.length > 0 && topic_views[0].topic_view.resource_name) {
                expect(topic_views[0].topic_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/topicViews`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = topic_views[0].topic_view.resource_name

                if(resource) {
                    const singleton = await customer.topicViews.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/topicViews`) || '',
                        })
                    )
                }
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
