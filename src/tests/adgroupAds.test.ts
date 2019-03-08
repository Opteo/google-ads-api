import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(60000)

describe('AdGroup Ads', async () => {
    const lib_instance = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })
    const customer = lib_instance.Customer({
        customer_account_id: config.cid,
        manager_cid: config.manager_cid,
        refresh_token: config.refresh_token,
    })

    let ad_id = ''
    let ad_id_1 = ''
    let ad_id_2 = ''
    const ad_group_id = config.testing.ad_group_id

    it('Lists All AdGroup Ads', async () => {
        expect.assertions(1)
        const ads = await customer.ads.list()
        expect(ads).toBeInstanceOf(Array)
    })

    it('Creates New Ad', async done => {
        expect.assertions(1)
        const new_ad = await customer.ads.create({
            ad_group_id,
            ad: {
                final_urls: 'http://hello.com',
                expanded_text_ad: {
                    headline_part1: 'headline part 1 here2',
                    headline_part2: 'headline part 2 here2',
                    description: 'my description here2',
                    path1: 'path one here2',
                    path2: 'path two here2',
                },
            },
        })
        ad_id = new_ad.id
        expect(new_ad).toEqual({
            id: expect.any(String),
            resource_name: expect.any(String),
        })
        done()
    })

    it('Creates 2 New Ads', async done => {
        expect.assertions(2)

        const new_ads_config = [
            {
                ad_group_id,
                ad: {
                    final_urls: 'http://hello.com',
                    expanded_text_ad: {
                        headline_part1: 'headline part 1 here1',
                        headline_part2: 'headline part 2 here1',
                        description: 'my description here1',
                        path1: 'path one here1',
                        path2: 'path two here1',
                    },
                },
            },
            {
                ad_group_id,
                ad: {
                    final_urls: 'http://hello.com',
                    expanded_text_ad: {
                        headline_part1: 'headline part 1 here2',
                        headline_part2: 'headline part 2 here2',
                        description: 'my description here2',
                        path1: 'path one here2',
                        path2: 'path two here2',
                    },
                },
            },
        ]
        const new_ads = await customer.ads.create(new_ads_config)

        expect(new_ads).toContainEqual(
            expect.objectContaining({
                id: expect.any(String),
                resource_name: expect.any(String),
            })
        )

        const ad_ids = new_ads.map((x: any, i: number) => x.id)

        expect(ad_ids.length).toEqual(2)

        ad_id_1 = ad_ids[0]
        ad_id_2 = ad_ids[1]

        done()
    })

    it('Retrieves Single Ad', async done => {
        expect.assertions(1)
        const ad = await customer.ads.retrieve(ad_id)
        expect(ad_id).toContain(ad.ad.id)
        done()
    })

    it('Updates Ad', async done => {
        expect.assertions(1)
        await customer.ads.update({
            id: ad_id,
            update: {
                status: 'PAUSED',
            },
        })
        const ad = await customer.ads.retrieve(ad_id)
        expect(ad.status).toBe('PAUSED')
        done()
    })

    it('Updates Multiple Ads', async done => {
        expect.assertions(2)

        await customer.ads.update([
            {
                id: ad_id_1,
                update: {
                    status: 'PAUSED',
                },
            },
            {
                id: ad_id_2,
                update: {
                    status: 'PAUSED',
                },
            },
        ])

        const ad1 = await customer.ads.retrieve(ad_id_1)
        expect(ad1.status).toBe('PAUSED')

        const ad2 = await customer.ads.retrieve(ad_id_2)
        expect(ad2.status).toBe('PAUSED')

        done()
    })

    it('Removes Ads', async done => {
        expect.assertions(3)
        await customer.ads.delete(ad_id)
        const ad = await customer.ads.retrieve(ad_id)
        expect(ad.status).toBe('REMOVED')

        await customer.ads.delete(ad_id_1)
        const ad1 = await customer.ads.retrieve(ad_id_1)
        expect(ad1.status).toBe('REMOVED')

        await customer.ads.delete(ad_id_2)
        const ad2 = await customer.ads.retrieve(ad_id_2)
        expect(ad2.status).toBe('REMOVED')
        done()
    })
})
