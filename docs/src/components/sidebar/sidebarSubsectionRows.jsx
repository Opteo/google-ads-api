import PropTypes from 'prop-types'
import React from 'react'

import { getSubsectionTitle } from '../../utils'

const SidebarSubsectionRows = ({ subsections, currentSection, jumpTo }) => {
    const has_current_section = Object.keys(subsections)
        .map(index => subsections[index].id)
        .includes(currentSection)

    const only_one_section = Object.keys(subsections).length === 1

    if (!has_current_section || only_one_section) {
        return <div />
    }
    return (
        <ul className="list pt2 pl3 pb2">
            {Object.keys(subsections).map(index => {
                const subsection = subsections[index]
                const subsection_id = `sidebar-${subsection.id}`

                return (
                    <li id={subsection_id} key={subsection_id}>
                        <div
                            className={
                                'entity-child pointer pt1 pl3 pb1' +
                                (subsection.id === currentSection ? ' active opteo-link-blue' : '')
                            }
                            onClick={() => jumpTo(subsection.id)}
                        >
                            {getSubsectionTitle(subsection)}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

SidebarSubsectionRows.propTypes = {
    subsections: PropTypes.object,
    currentSection: PropTypes.string,
    jumpTo: PropTypes.func,
}

export default SidebarSubsectionRows
