import PropTypes from 'prop-types'
import React from 'react'

import Attribute from './attribute'

const AttributesTable = ({ data, isChild }) => {
    const getRows = rows => {
        return Object.keys(rows).map(key => {
            const details = rows[key]

            return (
                <tr key={`key-${key}`} className="tl pa3 mw5">
                    <Attribute data={details} name={key} enums={details._enums} />
                </tr>
            )
        })
    }

    return (
        <table className="f7 w-100 ba b--opteo-light-gray mw6">
            <thead>
                <tr className="fw6 tl pa3">
                    <th>
                        {isChild ? 'Child ' : ''}
                        Attributes
                    </th>
                </tr>
            </thead>
            <tbody>{getRows(data)}</tbody>
        </table>
    )
}

AttributesTable.propTypes = {
    data: PropTypes.object.isRequired,
    isChild: PropTypes.bool,
}

export default AttributesTable
