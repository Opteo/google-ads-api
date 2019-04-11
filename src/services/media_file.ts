// @ts-ignore
import { MediaFile } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

// The media_file entity:

const media_file = {
    file_size: 'int64', // The size of the media file in bytes.
    id: 'int64', // The ID of the media file.
    mime_type:
        'UNSPECIFIED | UNKNOWN | IMAGE_JPEG | IMAGE_GIF | IMAGE_PNG | FLASH | TEXT_HTML | PDF | MSWORD | MSEXCEL | RTF | AUDIO_WAV | AUDIO_MP3 | HTML5_AD_ZIP', // The mime type of the media file.
    media_bundle: {
        data: 'byte', // Raw zipped data.
    },
    source_url: 'string', // The URL of where the original media file was downloaded from (or a file name).
    resource_name: 'string', // The resource name of the media file. Media file resource names have the form:  `customers/{customer_id}/mediaFiles/{media_file_id}`
    video: {
        youtube_video_id: 'string', // The YouTube video ID (as seen in YouTube URLs).
        ad_duration_millis: 'int64', // The duration of the Video in milliseconds.
        advertising_id_code: 'string', // The Advertising Digital Identification code for this video, as defined by the American Association of Advertising Agencies, used mainly for television commercials.
        isci_code: 'string', // The Industry Standard Commercial Identifier code for this video, used mainly for television commercials.
    },
    image: {
        data: 'byte', // Raw image data.
    },
    audio: {
        ad_duration_millis: 'int64', // The duration of the Audio in milliseconds.
    },
    name: 'string', // The name of the media file. The name can be used by clients to help identify previously uploaded media.
    type: 'UNSPECIFIED | UNKNOWN | IMAGE | ICON | MEDIA_BUNDLE | AUDIO | VIDEO | DYNAMIC_IMAGE', // Type of the media file.
}

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

    public async create(media_file: MediaFile | Array<MediaFile>, options?: ServiceCreateOptions): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, media_file],
            ...options,
        })
    }

    public async update(media_file: MediaFile | Array<MediaFile>, options?: ServiceCreateOptions): Promise<Mutation> {
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
