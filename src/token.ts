import request from 'request'

import { ADWORDS_AUTH_URL } from "./constants"
import { AccessToken } from './types/Http'
import { Client } from './types/Global'

import token_cache from './token_cache'


export const getAccessToken = async (client: Client) => {
    const hash = getTokenHash(client)
    const now = new Date().getTime()

    if (token_cache[hash] && token_cache[hash].expires > now) { 
        console.log("returning cached token")
        return token_cache[hash].access_token 
    }

    console.log("getting new token")
    const token_promise = await refreshToken(client.client_id, client.client_secret, client.refresh_token).then(token => {
        delete token_cache[hash]
        return Promise.resolve({
            access_token: token.access_token,
            expires: now + token.expires_in * 1000
        })
    }).catch(error => {
        return Promise.reject(error)
    })

    token_cache[hash] = token_promise

    return token_promise.access_token 
}



const getTokenHash = (client: Client) => {
    return `${client.developer_token}_${client.cid}`
}
 
const refreshToken = (client_id: string|number, client_secret: string, refresh_token: string) : Promise<AccessToken> => {
    const options = {
        url: ADWORDS_AUTH_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
            client_id,
            client_secret,
            refresh_token,
            grant_type: 'refresh_token'
        }
    }
    
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                reject(error)
            } else {
                const token = JSON.parse(body)
                resolve(token)
            }   
        })  
    })
}