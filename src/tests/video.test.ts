// Auto Generated File! Do Not Edit.

// @ts-ignore
import { Video } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('Video', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of Videos with all fields (if valid)', async () => {
            const videos = await customer.videos.list()
            expect(videos).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(videos.length > 0 && videos[0].video.resource_name) {
                expect(videos[0].video).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/videos`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = videos[0].video.resource_name

                if(resource) {
                    const singleton = await customer.videos.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/videos`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.videos.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
