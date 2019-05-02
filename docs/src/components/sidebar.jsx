import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import { toggleVisible } from '../utils'
import _ from 'lodash'

class Sidebar extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    render() {
        const { ids } = this.props
        return (
            <div className="absolute top-0 h-100 flex flex-column bg-white fixed br b--opteo-light-gray" style={{ maxWidth: '280px' }}>
                <div className="f3 tc pv3 bb b--opteo-light-gray opteo-gray">google-ads-api</div>
                <div className="f6 pa3 bb b--opteo-light-gray opteo-middle-gray">CORE RESOURCES</div>
                <ul className="list f5 pv3 pl3 overflow-y-auto">
                    {Object.keys(ids).map(entity => {
                        const subsections = ids[entity]
                        const key = `sidebar-${entity}`

                        return (
                            <li key={key} className="mv0 pb2-5">
                                <div className="entity pointer" onClick={() => toggleVisible(key)}>
                                    {entity}
                                </div>

                                <ul style={{ display: 'none' }} className="list pt2 pl3" id={key}>
                                    {Object.keys(subsections).map(index => {
                                        const sub_key = `${key}-${index}`
                                        const subpage = subsections[index]
                                        const subsection_id = `#${subpage.id}`

                                        return (
                                            <li className="entity-child pointer f5-5 pt1 pb1" key={sub_key}>
                                                <Link to={'/' + subsection_id}>
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
}

Sidebar.propTypes = {
    ids: PropTypes.object.isRequired,
}

export default Sidebar
