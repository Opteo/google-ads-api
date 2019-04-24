import PropTypes from 'prop-types'
import React from 'react'

import Attribute from './attribute'
import Enums from './enums'

const AttributesTable = ({ data, isChild }) => {
    const getRows = rows => {
        return Object.keys(rows).map(key => {
            const details = rows[key]
            return (
                <tr key={`key-${key}`} className="tl pa3 mw5">
                    <Attribute data={details} name={key} />
                    {details._enums ? <Enums enums={details._enums} /> : null}
                </tr>
            )
        })
    }

    return (
        <table className="f7 w-100 center ba b--opteo-light-gray">
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
