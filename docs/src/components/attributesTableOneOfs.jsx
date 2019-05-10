import PropTypes from 'prop-types'
import React from 'react'

import Attribute from './attribute'

const toggleOneOf = (others, id) => {
    const els = document.getElementsByClassName(others)
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
            <div key={key}>
                {Object.keys(one_of).map((oneof_key, index) => {
                    const details = one_of[oneof_key]
                    if (typeof details !== 'object') {
                        return null
                    }

                    const unique_oneof_key = 'oneof' + section_key
                    const unique_attribute_key = unique_oneof_key + oneof_key

                    return (
                        <div
                            style={{ display: index === 0 ? 'block' : 'none' }}
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
                            />
                        </div>
                    )
                })}

                <div className={nestingDepth === 0 ? null : 'pl3'}>This field can also be replaced by:</div>

                <ul className={nestingDepth === 0 ? 'pt2 pr3 pb3' : 'pt2 pl3 pr3 pb3'}>
                    {Object.keys(one_of).map(oneof_key => {
                        const unique_oneof_key = 'oneof' + section_key
                        const unique_attribute_key = unique_oneof_key + oneof_key

                        return (
                            <li
                                key={unique_attribute_key + 'selector'}
                                className="one-of-item mb1 pointer"
                                onClick={() => toggleOneOf(unique_oneof_key, unique_attribute_key)}
                            >
                                <span>• </span>
                                <span className="opteo-link-blue">{oneof_key.split('_').join(' ')} </span>
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
