import crypto from 'crypto'
import request from 'request'

const ADWORDS_AUTH_URL = 'https://accounts.google.com/o/oauth2/token'
const ADWORDS_AUTH_SERVICE_ACCOUNTURL = 'https://oauth2.googleapis.com/token'

import { cached_tokens, unresolved_token_promises } from './token_cache'
import {KJUR} from "jsrsasign";

interface TokenAuth {
    client_id: string
    client_secret: string
    refresh_token: string
}

interface TokenReturn {
    access_token: string
    expires_in: number
}

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

export const getAccessTokenByServiceAccount = async (service_account: any) => {

    const jwtHeader = {
        alg: "RS256",
        typ: "JWT"
    };
    const todayEpoch = parseInt(String(Date.now() / 1000));
    const jwtClaimSet = {
        iss: service_account.client_email,
        sub: service_account.sub,
        scope: "https://www.googleapis.com/auth/adwords",
        aud: service_account.token_uri,
        exp: todayEpoch + (60 * 10),
        iat: todayEpoch
    };

    let sJWS = KJUR.jws.JWS
    const v = sJWS.sign(
        jwtHeader.alg,
        jwtHeader,
        JSON.stringify(jwtClaimSet),
        service_account.private_key
    );
    const now = Date.now()
    const token_promise = requestAccessTokenByServiceAccount(v).then(token => {
        return {
            access_token: token.access_token,
            expires_in: now + token.expires_in,
        }
    })
    .catch(e => {
        return Promise.reject(e)
    })

    return await token_promise
}

const requestAccessTokenByServiceAccount = (assertion: string): Promise<TokenReturn> => {
    const options = {
        url: ADWORDS_AUTH_SERVICE_ACCOUNTURL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        form: {
            "grant_type": 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            "assertion": assertion,
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
