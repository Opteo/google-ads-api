
import GoogleAdsJs from '..'
import config from '../config'

function delay(ms){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve()
        }, ms)
    })
}

describe('Tokens', async () => {
    const lib_instance = new GoogleAdsJs({
		client_id: config.client_id, 
		client_secret: config.client_secret, 
		developer_token: config.developer_token
    })

    
    // TODO: finish this
    it('Waits for tokens to be available before querying', async () => {


        const customer = lib_instance.Customer(async () => {
            await delay(1000)
            return {
                customer_account_id: config.cid, 
                refresh_token: config.refresh_token
            }
        })

        await customer.retrieve()

        
    }) 

})