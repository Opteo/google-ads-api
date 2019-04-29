import PropTypes from 'prop-types'
import React from 'react'
import { Link } from "gatsby"

import { toggleVisible } from '../utils'
import _ from 'lodash'

const Sidebar = ({ ids }) => {
    return (
        <div className="absolute top-0 h-100 bg-white fixed br b--opteo-light-gray" style={{ maxWidth: '280px' }}>
            <h3 className="tc pv3 bb b--opteo-light-gray">google-ads-api</h3>
            <h4 className="f6 pv2 opteo-blue pl4">CORE RESOURCES</h4>
            <ul className="h-100 list f5 ph0 overflow-y-scroll">
                {Object.keys(ids).map(entity => {
                    const subsections = ids[entity]
                    const key = `sidebar-${entity}`

                    return (
                        <li key={key} className="mv0 pb2">
                            <div className="pointer opteo-blue" onClick={() => toggleVisible(key)}>
                                {entity}
                            </div>

                            <ul style={{ display: 'none' }} className="list" id={key}>
                                {Object.keys(subsections).map(index => {
                                    const sub_key = `${key}-${index}`
                                    const subpage = subsections[index]
                                    const subsection_id = `#${subpage.id}`

                                    return (
                                        <li className="pointer f6 fw5 mt1 mb0" key={sub_key}>
                                            <Link to={'/'+subsection_id}>
                                                {subpage.type === 'object'
                                                    ? `The ${subpage.entity} object`
                                                    : `${_.startCase(subpage.type)}`}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

Sidebar.propTypes = {
    ids: PropTypes.object.isRequired,
}

export default Sidebar
