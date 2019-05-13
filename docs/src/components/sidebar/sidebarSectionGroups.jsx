import PropTypes from 'prop-types'
import React from 'react'

import { getGroupDisplayName } from '../../utils'

import SidebarSectionRows from './sidebarSectionRows'

const SidebarSectionGroups = ({ sectionGroups, currentSection, search, jumpTo }) => (
    <ul id="section-list" className="list f5 pb3 overflow-y-auto">
        {Object.keys(sectionGroups).map(group_name => {
            return (
                <li key={group_name} className="mv0 pb2">
                    <div className="section-group-header ttu pt3 pl3 pr3 pb2 bb b--opteo-light-gray opteo-middle-gray">
                        {getGroupDisplayName(group_name)}
                    </div>
                    <ul className="list pt2 pb2" id={group_name}>
                        <SidebarSectionRows
                            groupSections={sectionGroups[group_name]}
                            currentSection={currentSection}
                            search={search}
                            jumpTo={jumpTo}
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
