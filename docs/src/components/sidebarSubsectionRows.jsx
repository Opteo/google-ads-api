import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import { getSubsectionTitle } from '../utils'

const SidebarSubsectionRows = ({ subsections, currentSection }) => (
    <ul className="list pt2 pl3 pb2">
        {Object.keys(subsections).map(index => {
            const subsection = subsections[index]
            const subsection_id = `sidebar-${subsection.id}`
            const subsection_link_id = `#${subsection.id}`

            return (
                <li
                    id={subsection_id}
                    key={subsection_id}
                    className={
                        'entity-child pointer f5-5 pt1 pl3 pb1 ' + (subsection.id === currentSection ? 'active' : '')
                    }
                >
                    <Link to={'/' + subsection_link_id}>{getSubsectionTitle(subsection)}</Link>
                </li>
            )
        })}
    </ul>
)

SidebarSubsectionRows.propTypes = {
    subsections: PropTypes.object,
    currentSection: PropTypes.string,
}

export default SidebarSubsectionRows
