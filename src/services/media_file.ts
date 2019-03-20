// @ts-ignore
import { MediaFile } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types/Global'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'mediaFiles'
const MUTATE_METHOD = 'mutateMediaFiles'
const MUTATE_REQUEST = 'MutateMediaFilesRequest'
const OPERATION_REQUEST = 'MediaFileOperation'
const GET_METHOD = 'getMediaFile'
const GET_REQUEST = 'GetMediaFileRequest'
const RESOURCE = 'MediaFile'

export default class MediaFileService extends Service {
    public async get(id: number | string): Promise<MediaFile> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as MediaFile
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ media_file: MediaFile }>> {
        return this.getListResults('media_file', options)
    }

    public async create(
        media_file: MediaFile | Array<MediaFile>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, media_file],
            ...options,
        })
    }

    public async update(
        media_file: MediaFile | Array<MediaFile>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, media_file],
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
