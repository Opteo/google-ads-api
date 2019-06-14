module.exports = {
    name: 'SharedSet',
    object: {
        id: { _description: 'The ID of this shared set. Read only.', _type: 'int64' },
        member_count: {
            _description: 'The number of shared criteria within this shared set. Read only.',
            _type: 'int64',
        },
        name: {
            _description:
                'The name of this shared set. Required. Shared Sets must have names that are unique among active shared sets of the same type. The length of this string should be between 1 and 255 UTF-8 bytes, inclusive.',
            _type: 'string',
        },
        reference_count: {
            _description: 'The number of campaigns associated with this shared set. Read only.',
            _type: 'int64',
        },
        resource_name: {
            _description:
                'The resource name of the shared set. Shared set resource names have the form: <code>customers/{customer_id}/sharedSets/{shared_set_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'The status of this shared set. Read only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'The shared set is enabled.' },
                { s: 'REMOVED', description: 'The shared set is removed and can no longer be used.' },
            ],
            _type: 'enum',
        },
        type: {
            _description:
                'The type of this shared set: each shared set holds only a single kind of resource. Required. Immutable.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NEGATIVE_KEYWORDS', description: 'A set of keywords that can be excluded from targeting.' },
                { s: 'NEGATIVE_PLACEMENTS', description: 'A set of placements that can be excluded from targeting.' },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
