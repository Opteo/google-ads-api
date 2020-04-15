import crypto from 'crypto'
import request from 'request'

const ADWORDS_AUTH_URL = 'https://accounts.google.com/o/oauth2/token'

import { cached_tokens, unresolved_token_promises } from './token_cache'

interface TokenAuth {
    client_id: string
    client_secret: string
    refresh_token: string
}

interface TokenReturn {
    access_token: string
    expires_in: number
}

// FIXME getAccessTokenForServiceAccount = async (ServiceAccount definito in client.ts) => {
//    ...... nostra impl
//    ... deve ritornare una promise dove nel then risolve con il body della CURL JSON parsato
//    .. attenzione a gestione cache token che evita di generarli a diritto, sotto si trova
//    come l'hanno implementata
// }

export const getAccessToken = async ({ client_id, client_secret, refresh_token }: TokenAuth) => {
    const hash = getTokenHash({
        client_id,
        client_secret,
        refresh_token,
    })
    const now = Date.now()

    if (cached_tokens[hash] && cached_tokens[hash].expires > now) {
        return cached_tokens[hash].access_token
    }

    if (unresolved_token_promises[hash]) {
        return (await unresolved_token_promises[hash]).access_token
    }

    const token_promise = refreshAccessToken(client_id, client_secret, refresh_token)
        .then(token => {
            cached_tokens[hash] = token
            delete unresolved_token_promises[hash]

            return {
                access_token: token.access_token,
                expires: now + token.expires_in * 1000 - 1000 * 60 * 3, // refresh 3 minutes before expiry just to make sure
            }
        })
        .catch(e => {
            delete unresolved_token_promises[hash]
            return Promise.reject(e)
        })

    unresolved_token_promises[hash] = token_promise

    const token_object = await token_promise

    cached_tokens[hash] = token_object

    return token_object.access_token
}

const getTokenHash = (auth: TokenAuth) =>
    crypto
        .createHash('sha256')
        .update(`${auth.client_id}_${auth.refresh_token}`)
        .digest('base64')

const refreshAccessToken = (client_id: string, client_secret: string, refresh_token: string): Promise<TokenReturn> => {
    const options = {
        url: ADWORDS_AUTH_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        form: {
            client_id,
            client_secret,
            refresh_token,
            grant_type: 'refresh_token',
        },
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
