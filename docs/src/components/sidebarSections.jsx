import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { capitalizeFirstLetter, getSubsectionTitle, stringMatch, getGroupDisplayName } from '../utils'

const SidebarSections = ({ sections, currentSection, search }) => {
    const getSubsectionRows = subsections => {
        return Object.keys(subsections).map(index => {
            const subsection = subsections[index]

            const subsection_id = `sidebar-${subsection.id}`
            const subsection_link_id = `#${subsection.id}`

            if (subsection.id === currentSection) {
                return (
                    <li id={subsection_id} key={subsection_id} className="entity-child active pointer f5-5 pt1 pl3 pb1">
                        <Link to={'/' + subsection_link_id}>{getSubsectionTitle(subsection)}</Link>
                    </li>
                )
            }

            return (
                <li id={subsection_id} key={subsection_id} className="entity-child pointer f5-5 pt1 pl3 pb1">
                    <Link to={'/' + subsection_link_id}>{getSubsectionTitle(subsection)}</Link>
                </li>
            )
        })
    }

    const getSectionRows = group_sections => {
        return Object.keys(group_sections).map(section => {
            const subsections = group_sections[section]

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
                        <Link className="entity pl3 pointer" to={section_id}>
                            {section_name}
                        </Link>
                    </li>
                )
            }

            return (
                <li key={section_key} className=" mv0 pb2">
                    <div className="relative">
                        <div className="indicator absolute top-0 left-0 h-100 bg-opteo-link-blue" />
                        <Link className="entity active pointer pt1 pl3 pb1 db bg-opteo-light-gray" to={section_id}>
                            {section_name}
                        </Link>
                    </div>
                    <ul className="list pt2 pl3 pb2" id={section_key}>
                        {getSubsectionRows(subsections)}
                    </ul>
                </li>
            )
        })
    }

    return (
        <ul id="section-list" className="list f5 pv3 overflow-y-auto">
            {Object.keys(sections).map(group_name => {
                return (
                    <li key={group_name} className=" mv0 pb2">
                        <div className="f6 ttu pa3 bb b--opteo-light-gray opteo-middle-gray">
                            {getGroupDisplayName(group_name)}
                        </div>
                        <ul className="list pt2 pb2" id={group_name}>
                            {getSectionRows(sections[group_name])}
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

SidebarSections.propTypes = {
    sections: PropTypes.object.isRequired,
    currentSection: PropTypes.string,
    search: PropTypes.string,
}

export default SidebarSections
