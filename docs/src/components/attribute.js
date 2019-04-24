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
        <tr className="tl w-100">
            <td className="tl">
                <p className="pl2 f7 fw6 mv0">{name}</p>
                {data._type ? <p className="pl2 f7 fw5 mv0 black-70">{data._type}</p> : ''}
                {details._enums ? <Enums enums={details._enums} /> : null}
            </td>
            <td className="tl">{details}</td>
        </tr>
    )
}

Attribute.propTypes = {
    data: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
}

export default Attribute
