import PropTypes from 'prop-types'
import React from 'react'

import Attribute from './attribute'

const toggleOneOf = (others, id) => {
    const els = document.getElementsByClassName(others)
    console.log(els)
    for (let item of els) {
        item.style.display = 'none'
    }

    document.getElementById(id).style.display = 'block'
}

const AttributesTableOneOfs = ({ oneOfs, nestingDepth, section }) => {
    return Object.keys(oneOfs).map(oneof_type_key => {
        const one_of = oneOfs[oneof_type_key]

        const section_key = section + oneof_type_key
        const key = 'oneofcontainer' + section_key

        return (
            <div key={key} className="mb4 br3 ba b--opteo-light-gray">
                <div className="table-heading pa3 bb b--opteo-light-gray"><span class="fw6">ONE</span> of the following:</div>
                <ul className={nestingDepth === 0 ? '' : 'pb3'}>
                    {Object.keys(one_of).map((oneof_key, index) => {
                        const unique_oneof_key = 'oneof' + section_key
                        const unique_attribute_key = unique_oneof_key + oneof_key
                        const details = one_of[oneof_key]

                        return (
                            <li
                                key={unique_attribute_key + 'selector'}
                                className="one-of-item pointer bb b--opteo-light-gray"
                                onClick={() => toggleOneOf(unique_oneof_key, unique_attribute_key)}
                            >
                                <div className="pa3">
                                    {/* <span>• </span> */}
                                    <span className="mono fw6 mv0 opteo-gray">{ oneof_key } </span>
                                    <span className="f7 fw5 mv0 opteo-middle-gray">{ details._type ? details._type : 'null' }</span>
                                </div>
                                {
                                    typeof details !== 'object' ? null : (
                                    <div
                                        style={{ display: 'none' }}
                                        className={unique_oneof_key}
                                        id={unique_attribute_key}
                                        key={unique_attribute_key}
                                    >
                                        <Attribute
                                            data={details}
                                            section={section}
                                            name={oneof_key}
                                            enums={details._enums}
                                            nestingDepth={nestingDepth}
                                            ofManyChild={true}
                                        />
                                    </div>
                                    ) 
                                }
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    })
}

AttributesTableOneOfs.propTypes = {
    rows: PropTypes.object,
    nestingDepth: PropTypes.number,
    section: PropTypes.string,
}

export default AttributesTableOneOfs
