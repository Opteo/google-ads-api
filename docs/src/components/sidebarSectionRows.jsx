import PropTypes from 'prop-types'
import React from 'react'

import { capitalizeFirstLetter, stringMatch, jumpTo } from '../utils'

import SidebarSubsectionRows from './sidebarSubsectionRows'

const SidebarSectionRows = ({ groupSections, currentSection, search }) => {
    return Object.keys(groupSections).map(section => {
        const subsections = groupSections[section]

        const section_key = `sidebar-${section}`
        const section_id = `/#${section.toLowerCase()}`
        const section_name = capitalizeFirstLetter(section)
        const subsection_ids = Object.keys(subsections).map(index => subsections[index].id)

        const searched = search && search.length > 0 ? stringMatch(section, search) : true

        if (!searched) {
            return null
        }

        if (!subsection_ids.includes(currentSection)) {
            return (
                <li key={section_key} className="mv0 pb2">
                    <p className="entity pl3 pointer" onClick={() => jumpTo(section_id)}>
                        {section_name}
                    </p>
                </li>
            )
        }

        return (
            <li key={section_key} className="mv0 pb2">
                <div className="relative">
                    <div className="indicator absolute top-0 left-0 h-100 bg-opteo-link-blue" />
                    <p
                        className="entity active pointer pt1 pl3 pb1 db bg-opteo-light-gray"
                        onClick={() => jumpTo(section_id)}
                    >
                        {section_name}
                    </p>
                </div>
                <SidebarSubsectionRows id={section_key} subsections={subsections} currentSection={currentSection} />
            </li>
        )
    })
}

SidebarSectionRows.propTypes = {
    groupSections: PropTypes.object,
    currentSection: PropTypes.string,
    search: PropTypes.string,
}

export default SidebarSectionRows
