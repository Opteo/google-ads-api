import GoogleAdsApi from '..'
import config from '../config'

describe('AdGroup Ads', async () => {
    const lib_instance = new GoogleAdsApi({
		client_id: config.client_id, 
		client_secret: config.client_secret, 
		developer_token: config.developer_token
	})
    const customer = lib_instance.Customer({
		customer_account_id: config.cid, 
		refresh_token: config.refresh_token
    })
    
    let ad_id = ''
    const ad_group_id = 56328868446

    it('Lists All AdGroup Ads', async () => {
        expect.assertions(1)
        const ads = await customer.ads.list()
        console.log(ads);
        expect(ads).toBeInstanceOf(Array)
    })

    it('Creates New Ad', async (done) => {
	    expect.assertions(1)
        const new_ad = await customer.ads.create({
            ad_group_id,
            ad: {
                final_urls: "http://hello.com",
                expanded_text_ad: {
                    headline_part1: "headline part 1 here2",
                    headline_part2: "headline part 2 here2",
                    description: "my description here2",
                    path1: "path one here2",
                    path2: "path two here2",
                }
            }
        })
        ad_id = new_ad.id
        expect(new_ad).toEqual({
            id: expect.any(String),
            resource_name: expect.any(String),
        })
        done()
    })

    it('Retrieves Single Ad', async (done) => {
	    expect.assertions(1)
        const ad = await customer.ads.retrieve(ad_id)
        expect(ad).toEqual({
            resource_name: expect.any(String),
            status: expect.any(String),
            ad_group: expect.any(String),
            ad: { 
                id: expect.any(String),
                final_urls: expect.any(Object),
                display_url: expect.any(String),
                type: expect.any(String),
                expanded_text_ad: { 
                    headline_part_1: expect.any(String),
                    headline_part_2: expect.any(String),
                    description: expect.any(String),
                    path_1: expect.any(String),
                    path_2: expect.any(String),
                } 
            } 
        })
        done()
    })

    it('Updates Ad', async (done) => {
        expect.assertions(1)
        await customer.ads.update({
            id: ad_id,
            update: {
                status: 'PAUSED',
            }
        })
        const ad = await customer.ads.retrieve(ad_id)	
		expect(ad.status).toBe('PAUSED')
        done()
    })

    it('Removes Ad', async (done) => {
        expect.assertions(1)
        await customer.ads.delete(ad_id)
        const ad = await customer.ads.retrieve(ad_id)    
        expect(ad.status).toBe('REMOVED')
        done()
    })
    
})