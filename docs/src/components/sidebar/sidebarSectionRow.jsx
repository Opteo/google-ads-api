import React from 'react'

import SidebarSubsectionRows from './sidebarSubsectionRows'

const SidebarSectionRow = ({ sectionKey, sectionId, sectionName, isActive, currentSection, subsections, jumpTo }) => {
    const subsection_id = sectionKey.toLowerCase()
    return (
        <li className="mv0 pb2">
            <div className="relative">
                <div
                    className={
                        'indicator absolute top-0 left-0 h-100  ' + (isActive ? 'bg-opteo-link-blue' : 'bg-transparent')
                    }
                />
                <div
                    id={subsection_id}
                    className={'entity pl3 pointer ' + (isActive ? 'active pt1 pb1 db' : '')}
                    onClick={() => jumpTo(sectionId)}
                >
                    {sectionName}
                </div>
            </div>
            <SidebarSubsectionRows subsections={subsections} currentSection={currentSection} jumpTo={jumpTo} />
        </li>
    )
}

export default SidebarSectionRow
