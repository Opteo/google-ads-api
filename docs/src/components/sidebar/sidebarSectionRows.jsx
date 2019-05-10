import PropTypes from 'prop-types'
import React from 'react'

import { capitalizeFirstLetter, stringMatch } from '../../utils'

import SidebarSectionRow from './sidebarSectionRow'

const SidebarSectionRows = ({ groupSections, currentSection, search, jumpTo }) => {
    return Object.keys(groupSections).map(section => {
        const subsections = groupSections[section]

        const section_key = `sidebar-${section}`
        const section_id = section.toLowerCase()
        const section_name = capitalizeFirstLetter(section)
        const subsection_ids = Object.keys(subsections).map(index => subsections[index].id)

        const searched = search && search.length > 0 ? stringMatch(section, search) : true

        if (!searched) {
            return null
        }

        let is_active = true

        if (!subsection_ids.includes(currentSection)) {
            is_active = false
        }

        return (
            <SidebarSectionRow
                key={section_key}
                sectionKey={section_key}
                sectionId={section_id}
                sectionName={section_name}
                isActive={is_active}
                subsections={subsections}
                currentSection={is_active ? currentSection : ''}
                jumpTo={jumpTo}
            />
        )
    })
}

SidebarSectionRows.propTypes = {
    groupSections: PropTypes.object,
    currentSection: PropTypes.string,
    search: PropTypes.string,
}

export default SidebarSectionRows
