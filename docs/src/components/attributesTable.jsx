import PropTypes from 'prop-types'
import React from 'react'

import AttributesTableRows from './attributesTableRows'
import AttributesTableOneOfs from './attributesTableOneOfs'

const AttributesTable = ({ data, section, nestingDepth }) => {
    const oneOfs = {}

    Object.keys(data).forEach(key => {
        if (data[key]._oneof) {
            if (!oneOfs[data[key]._oneof]) {
                oneOfs[data[key]._oneof] = {}
            }

            oneOfs[data[key]._oneof][key] = data[key]
        }
    })

    return (
        <div>
            {nestingDepth === 0 && <h4 className="nested-title opteo-middle-gray bb-0">Fields</h4>}
            <AttributesTableOneOfs oneOfs={oneOfs} nestingDepth={nestingDepth} />
            <AttributesTableRows rows={data} section={section} nestingDepth={nestingDepth} />
        </div>
    )
}

AttributesTable.propTypes = {
    data: PropTypes.object.isRequired,
    section: PropTypes.string,
    nestingDepth: PropTypes.number,
}

export default AttributesTable
