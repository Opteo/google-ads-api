import PropTypes from 'prop-types'
import React from 'react'

import AttributesTable from './attributesTable'
import Enums from './enums'

const Attribute = ({ data, name }) => {
    const { _description, _oneof } = data
    let details = null

    if (_description) {
        details = <p>{_description}</p>
    } else if (_oneof) {
        details = <p>it is one of {_oneof}</p>
    } else {
        details = <AttributesTable data={data} isChild={true} />
    }

    return (
        <tr
            style={{
                verticalAlign: `top`,
            }}
        >
            <td>
                <h5>{name}</h5>
                {data._type ? <p>{data._type}</p> : ''}
                {details._enums ? <Enums enums={details._enums} /> : null}
            </td>
            <td>{details}</td>
        </tr>
    )
}

Attribute.propTypes = {
    data: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
}

export default Attribute
