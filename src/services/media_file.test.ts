// Auto Generated File! Do Not Edit.

// @ts-ignore
import { MediaFile } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('MediaFile', async () => {

    describe('list', async () => {
        it('can retrieve a list of MediaFiles with all fields (if valid)', async () => {
            const media_files = await customer.mediaFiles.list()
            expect(media_files).toBeInstanceOf(Array)

            if(media_files.length > 0) {
                expect(media_files[0].media_file).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/mediaFiles`) || '',
                    })
                )
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
