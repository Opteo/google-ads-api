import PropTypes from 'prop-types'
import React from 'react'

import SidebarSubsectionRows from './sidebarSubsectionRows'

const SidebarSectionRow = ({ sectionKey, sectionId, sectionName, isActive, currentSection, subsections, jumpTo }) => {
    const subsection_id = sectionKey.toLowerCase()
    const smallest_subsction_key = Math.min.apply(null, Object.keys(subsections).map(k => +k))
    const first_subsection_id = subsections[`${smallest_subsction_key}`].id

    return (
        <li className="mv0 ">
            <div className="relative">
                <div
                    className={
                        'indicator absolute top-0 left-0 h-100  ' + (isActive ? 'bg-opteo-link-blue' : 'bg-transparent')
                    }
                />
                <div
                    id={subsection_id}
                    className={'entity pointer pl3 pv1 db ' + (isActive ? 'active  ' : '')}
                    onClick={() => jumpTo(first_subsection_id)}
                >
                    {sectionName}
                </div>
            </div>
            <SidebarSubsectionRows subsections={subsections} currentSection={currentSection} jumpTo={jumpTo} />
        </li>
    )
}

SidebarSectionRow.propTypes = {
    sectionKey: PropTypes.string,
    sectionId: PropTypes.string,
    sectionName: PropTypes.string,
    isActive: PropTypes.bool,
    currentSection: PropTypes.string,
    jumpTo: PropTypes.func,
    subsections: PropTypes.object,
}

export default SidebarSectionRow
