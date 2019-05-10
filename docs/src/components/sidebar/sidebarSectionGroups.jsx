import PropTypes from 'prop-types'
import React from 'react'

import { getGroupDisplayName } from '../../utils'

import SidebarSectionRows from './sidebarSectionRows'

const SidebarSectionGroups = ({ sectionGroups, currentSection, search }) => (
    <ul id="section-list" className="list f5 pv3 overflow-y-auto">
        {Object.keys(sectionGroups).map(group_name => {
            return (
                <li key={group_name} className=" mv0 pb2">
                    <div className="f6 ttu pa3 bb b--opteo-light-gray opteo-middle-gray">
                        {getGroupDisplayName(group_name)}
                    </div>
                    <ul className="list pt2 pb2" id={group_name}>
                        <SidebarSectionRows
                            groupSections={sectionGroups[group_name]}
                            currentSection={currentSection}
                            search={search}
                        />
                    </ul>
                </li>
            )
        })}
    </ul>
)

SidebarSectionGroups.propTypes = {
    sectionGroups: PropTypes.object,
    currentSection: PropTypes.string,
    search: PropTypes.string,
}

export default SidebarSectionGroups
