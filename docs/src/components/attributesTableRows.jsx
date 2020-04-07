import PropTypes from 'prop-types'
import React from 'react'

import Attribute from './attribute'

const AttributesTableRows = ({ rows, nestingDepth, section }) =>
    Object.keys(rows).map(key => {
        const details = rows[key]
        if (typeof details !== 'object' || details._oneof) {
            return null
        }

        return (
            <Attribute
                data={details}
                section={section}
                name={key}
                key={key}
                enums={details._enums}
                nestingDepth={nestingDepth}
            />
        )
    })

AttributesTableRows.propTypes = {
    rows: PropTypes.object,
    nestingDepth: PropTypes.number,
    section: PropTypes.string,
}

export default AttributesTableRows
