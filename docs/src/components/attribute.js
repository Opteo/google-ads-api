import PropTypes from 'prop-types'
import React from 'react'
import Collapsible from 'react-collapsible'

import AttributesTable from './attributesTable'
import Enums from './enums'

const Attribute = ({ data, name, enums, section }) => {
    const { _description, _oneof } = data
    let details = null

    if (_description) {
        details = <p>{_description}</p>
    } else {
        details = (
            <Collapsible
                trigger="show child attributes"
                triggerWhenOpen="hide child attributes"
                triggerClassName="pointer pl2 opteo-link-blue tc"
                triggerOpenedClassName="pointer pl2 opteo-link-blue tc"
            >
                <AttributesTable data={data} section={section} title="Child Attributes" />
            </Collapsible>
        )
    }

    return (
        <tr key={`${section}-${name}`} className="tl w-100 v-top">
            <td className="tl mw5">
                {_oneof ? (
                    <span className="pl2 fw6 black-30">
                        ONE OF{' '}
                        {_oneof
                            .split(/(?=[A-Z])/)
                            .join('_')
                            .toLowerCase()}
                    </span>
                ) : null}

                <p className="pl2 f7 fw6 mv0">{name}</p>

                {data._type ? <p className="pl2 f7 fw5 mv0 black-70">{data._type}</p> : null}

                {enums ? (
                    <Collapsible
                        trigger="show enums"
                        triggerWhenOpen="hide enums"
                        triggerClassName="pointer pl2 opteo-link-blue tc"
                        triggerOpenedClassName="pointer pl2 opteo-link-blue tc"
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
    section: PropTypes.string,
}

export default Attribute
