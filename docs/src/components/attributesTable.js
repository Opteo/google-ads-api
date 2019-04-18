import PropTypes from 'prop-types'
import React from 'react'

const AttributesTable = ({ meta }) => {
    const Rows = Object.keys(meta.object).map(key => {
        const details = meta.object[key]
        console.log(key, details)
        return (
            <tr key={`key-${key}`}>
                <td>
                    <strong>{key}</strong>
                    <br />
                    {details._description}
                </td>
                <td>{details._type}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>{Rows}</tbody>
        </table>
    )
}

AttributesTable.propTypes = {
    meta: PropTypes.object.isRequired,
}

export default AttributesTable
