import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import { toggleVisible } from '../utils'
import _ from 'lodash'

class Sidebar extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    getSubsectionTitle({ entity, type }) {
        const AN = ['O', 'A'].includes(entity.slice(0, 1)) ? 'an' : 'a'

        switch (type) {
            case 'object': {
                return `The ${entity} Object`
            }
            case 'list': {
                return `List all ${entity}s`
            }
            default:
                return `${_.startCase(type)} ${AN} ${entity}`
        }
    }

    render() {
        const { ids } = this.props

        return (
            <div
                className="absolute top-0 h-100 flex flex-column bg-white fixed br b--opteo-light-gray"
                style={{ maxWidth: '280px' }}
            >
                <div className="f3 tc pv3 bb b--opteo-light-gray opteo-gray">google-ads-api</div>
                <div className="f6 pa3 bb b--opteo-light-gray opteo-middle-gray">CORE RESOURCES</div>
                <ul className="list f5 pv3 pl3 overflow-y-auto">
                    {Object.keys(ids).map(section => {
                        const subsections = ids[section]
                        const section_key = `sidebar-${section}`

                        return (
                            <li key={section_key} className="mv0 pb2-5">
                                <div className="entity pointer" onClick={() => toggleVisible(section_key)}>
                                    {section}
                                </div>

                                <ul style={{ display: 'none' }} className="list pt2 pl3" id={section_key}>
                                    {Object.keys(subsections).map(index => {
                                        const subsection = subsections[index]

                                        const subsection_key = `${section_key}-${index}`
                                        const subsection_id = `#${subsection.id}`

                                        return (
                                            <li className="entity-child pointer f5-5 pt1 pb1" key={subsection_key}>
                                                <Link to={'/' + subsection_id}>
                                                    {this.getSubsectionTitle(subsection)}
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
