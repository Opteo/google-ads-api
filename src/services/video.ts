// @ts-ignore
import { Video } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'videos'
const MUTATE_METHOD = 'mutateVideos'
const MUTATE_REQUEST = 'MutateVideosRequest'
const OPERATION_REQUEST = 'VideoOperation'
const GET_METHOD = 'getVideo'
const GET_REQUEST = 'GetVideoRequest'
const RESOURCE = 'Video'

export default class VideoService extends Service {
    public async get(id: number | string): Promise<Video> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as Video
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ video: Video }>> {
        return this.getListResults('video', options)
    }

    public async create(
        video: Video | Array<Video>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, video],
            ...options,
        })
    }

    public async update(
        video: Video | Array<Video>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, video],
            ...options,
        })
    }

    public async delete(id: number | string, options?: ServiceCreateOptions) {
        return this.serviceDelete({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            entity_id: id,
            ...options,
        })
    }
}
