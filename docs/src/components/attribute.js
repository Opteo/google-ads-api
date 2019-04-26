import PropTypes from 'prop-types'
import React from 'react'
import Collapsible from 'react-collapsible'

import AttributesTable from './attributesTable'
import Enums from './enums'

const Attribute = ({ data, name, enums, section }) => {
    const { _description, _oneof } = data
    let details = null

    if (_description) {
        details = <div>{_description}</div>
    } else {
        details = (
            <Collapsible
                trigger="show child attributes"
                triggerWhenOpen="hide child attributes"
                triggerClassName="pointer pl2 opteo-link-blue tc"
                triggerOpenedClassName="pointer pl2 opteo-link-blue tc"
            >   
                <div className="ml3 mt3 pa3 ba b--opteo-light-gray br3">
                    <AttributesTable data={data} section={section} title="Child Attributes" />
                </div>
            </Collapsible>
        )
    }

    return (
        <div key={`${section}-${name}`} className=" w-100 v-top pv3 bt b--opteo-light-gray">
                

            <div className=" mb2">
                <span className=" f5 fw6 mv0 ">{name} </span>
                {data._type ? <span className=" f6 fw5 mv0 black-70">{data._type}</span> : null}
                {_oneof ? (
                    <span className="f5 fw6 black-30">
                        ONE OF{' '}
                        {_oneof
                            .split(/(?=[A-Z])/)
                            .join('_')
                            .toLowerCase()}
                    </span>
                ) : null}
            </div>

            

            {enums ? (
                <Collapsible
                    className="pl1"
                    trigger="show enums"
                    triggerWhenOpen="hide enums"
                    triggerClassName="pointer pl2 opteo-link-blue tc"
                    triggerOpenedClassName="pointer pl2 opteo-link-blue tc"
                >
                    <Enums enums={enums} />
                </Collapsible>
            ) : null}

            <div className="">
                {details}
            </div>
        </div>
    )
}

Attribute.propTypes = {
    data: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    enums: PropTypes.array,
    section: PropTypes.string,
}

export default Attribute
