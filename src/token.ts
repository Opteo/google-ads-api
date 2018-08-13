import request from 'request'

import { ADWORDS_AUTH_URL } from "./constants"
import { AccessToken } from './types/Http'
import { Client } from './types/Global'

import token_cache from './token_cache'


export const getAccessToken = async (client: Client) => {
    const hash = getTokenHash(client)
    const cached_token = getCachedToken(hash)

    if(!cached_token) { 
        // console.log("getting new token")
        return new Promise((resolve, reject) => {
            return refreshToken(client.client_id, client.client_secret, client.refresh_token).then(token => {
                cacheNewToken(hash, token)
                resolve(token.access_token)
            }).catch(error => {
                reject(error)
            })
        })
    } 
    // console.log("found cached token")
    return cached_token.access_token 
}



const getTokenHash = (client: Client) => {
    return `${client.developer_token}_${client.cid}`
}

const getCachedToken = (hash: string) => {
    const cached_token = token_cache[hash]
    const now = new Date().getTime()

    if(cached_token && cached_token.expires > now) { 
        return cached_token
    }
    return null
}

const cacheNewToken = (hash: string, token: AccessToken) => {
    const now = new Date().getTime()

    token_cache[hash] = {
        access_token: token.access_token,
        expires: now + token.expires_in * 1000
    }
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
        request(options, function (error, response, body) {
            if (error) {
                reject(error)
            } else {
                const token = JSON.parse(body)
                resolve(token)
            }   
        })  
    })
}