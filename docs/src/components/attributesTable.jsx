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

const AttributesTable = ({ data, title, section }) => {
    const getBasicRows = rows => {
        return Object.keys(rows).map(key => {
            const details = rows[key]
            if (typeof details !== 'object' || details._oneof) {
                return null
            }

            return <Attribute data={details} section={section} name={key} key={key} enums={details._enums} />
        })
    }

    const getOneOfRows = one_ofs => {
        return Object.keys(one_ofs).map(oneof_type_key => {
            return (
                <div key={'oneofcontainer' + section + oneof_type_key}>
                    {Object.keys(one_ofs[oneof_type_key]).map((oneof_key, index) => {
                        const details = one_ofs[oneof_type_key][oneof_key]
                        if (typeof details !== 'object') {
                            return null
                        }

                        const unique_oneof_key = 'oneof' + section + oneof_type_key
                        const unique_attribute_key = 'oneof' + section + oneof_type_key + oneof_key

                        return (
                            <div
                                style={{ display: index === 0 ? 'block' : 'none' }}
                                className={`${unique_oneof_key}`}
                                id={unique_attribute_key}
                                key={unique_attribute_key}
                            >
                                <Attribute data={details} section={section} name={oneof_key} enums={details._enums} />
                            </div>
                        )
                    })}
                    <div className="pl3">This field can also be replaced by:</div>
                    <ul className="pt2 pl3 pr3 pb3">
                        {Object.keys(one_ofs[oneof_type_key]).map(oneof_key => {
                            const unique_attribute_key = 'oneof' + section + oneof_type_key + oneof_key

                            return (
                                <li
                                    key={unique_attribute_key + 'selector'}
                                    className="one-of-item mb1 pointer"
                                    onClick={() =>
                                        toggleOneOf(
                                            'oneof' + section + oneof_type_key,
                                            'oneof' + section + oneof_type_key + oneof_key
                                        )
                                    }
                                >
                                    <span>• </span><span className="opteo-link-blue">{oneof_key.split('_').join(' ')} </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        })
    }

    const oneOfs = {}

    Object.keys(data).forEach(key => {
        if (data[key]._oneof) {
            if (!oneOfs[data[key]._oneof]) {
                oneOfs[data[key]._oneof] = {}
            }

            oneOfs[data[key]._oneof][key] = data[key]
        }
    })

    return (
        <div>
            { !title &&
            <h4 className="nested-title bb-0">Fields</h4>
            }
            <div>{getOneOfRows(oneOfs)}</div>
            <div>{getBasicRows(data)}</div>
        </div>
    )
}

AttributesTable.propTypes = {
    data: PropTypes.object.isRequired,
    section: PropTypes.string,
    title: PropTypes.string,
}

export default AttributesTable
