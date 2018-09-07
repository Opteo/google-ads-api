import request from 'request'

import { ADWORDS_AUTH_URL } from "./constants"
import { AccessToken } from './types/Http'
import { Client } from './types/Global'

import { cached_tokens, unresolved_token_promises } from './token_cache'


export const getAccessToken = async (client: Client) => {
    const hash = getTokenHash(client)
    const now = Date.now()

    if (cached_tokens[hash] && cached_tokens[hash].expires > now) { 
        return cached_tokens[hash].access_token 
    }

    if (unresolved_token_promises[hash]) {
        return (await unresolved_token_promises[hash]).access_token
    }

    const token_promise = refreshAccessToken(client.client_id, client.client_secret, client.refresh_token).then(token => {
        cached_tokens[hash] = token
        delete unresolved_token_promises[hash]

        return {
            access_token: token.access_token,
            expires: now + (token.expires_in * 1000) - (1000 * 60 * 3) // refresh 3 minutes before expiry just to make sure
        }
    }).catch(e => {
        delete unresolved_token_promises[hash]
        return Promise.reject(e)
    })

    unresolved_token_promises[hash] = token_promise
    
    const token_object = await token_promise

    cached_tokens[hash] = token_object

    return token_object.access_token 
}

const getTokenHash = (client: Client) => `${client.developer_token}_${client.cid}`
 
const refreshAccessToken = (client_id: string|number, client_secret: string, refresh_token: string) : Promise<AccessToken> => {
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