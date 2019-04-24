import PropTypes from 'prop-types'
import React from 'react'
import Collapsible from 'react-collapsible'

import AttributesTable from './attributesTable'
import Enums from './enums'

const Attribute = ({ data, name, enums }) => {
    const { _description, _oneof } = data
    let details = null

    if (_description) {
        details = <p>{_description}</p>
    } else if (_oneof) {
        details = <p>it is one of {_oneof}</p>
    } else {
        details = (
            <Collapsible
                trigger="show child attributes"
                triggerWhenOpen="hide child attributes"
                className="pointer pl2 opteo-link-blue"
            >
                <AttributesTable data={data} isChild={true} />
            </Collapsible>
        )
    }
    // console.log({ enums })
    return (
        <tr className="tl w-100 v-top">
            <td className="tl mw5">
                <p className="pl2 f7 fw6 mv0">{name}</p>
                {data._type ? <p className="pl2 f7 fw5 mv0 black-70">{data._type}</p> : ''}

                {enums ? (
                    <Collapsible
                        trigger="show enums"
                        triggerWhenOpen="hide enums"
                        className="pointer pl2 opteo-link-blue"
                    >
                        <Enums enums={enums} />
                    </Collapsible>
                ) : null}
            </td>
            <td className="tl">{details}</td>
        </tr>
    )
}

Attribute.propTypes = {
    data: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    enums: PropTypes.array,
}

export default Attribute
