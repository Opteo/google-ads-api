// Auto Generated File! Do Not Edit.

// @ts-ignore
import { MediaFile } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('MediaFile', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of MediaFiles with all fields (if valid)', async () => {
            const media_files = await customer.mediaFiles.list()
            expect(media_files).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(media_files.length > 0 && media_files[0].media_file.resource_name) {
                expect(media_files[0].media_file).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/mediaFiles`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = media_files[0].media_file.resource_name

                if(resource) {
                    const singleton = await customer.mediaFiles.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/mediaFiles`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.mediaFiles.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
