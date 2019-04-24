import PropTypes from 'prop-types'
import React from 'react'

import Collapsible from 'react-collapsible'
import scrollToElement from 'scroll-to-element'
// const scrollToElement = require('scroll-to-element')

const jumpToSection = id => {
    return scrollToElement(id, {
        offset: 0,
        duration: 600,
    })
}

const Sidebar = ({ ids }) => {
    return (
        <div className="absolute top-0 h-100 bg-white fixed br b--opteo-light-gray" style={{ maxWidth: '280px' }}>
            <h3 class="tc pv3 bb b--opteo-light-gray" onClick={() => jumpToSection('#header')}>
                google-ads-api
            </h3>
            <ul className="h-100 list f6 ph0 overflow-y-scroll">
                {Object.keys(ids).map(entity => {
                    const subsections = ids[entity]
                    const key = `sidebar-${entity}`
                    const section_id = `#${subsections[1].id}`

                    return (
                        <li key={key} className="mv0">
                            <Collapsible
                                trigger={entity}
                                triggerClassName="pointer fw6 f7"
                                triggerOpenedClassName="pointer fw6 f7"
                                onOpening={() => jumpToSection(section_id)}
                            >
                                <ul className="list">
                                    {Object.keys(subsections).map(index => {
                                        const sub_key = `${key}-${index}`
                                        const subpage = subsections[index]
                                        const subsection_id = `#${subpage.id}`

                                        return (
                                            <li
                                                className="pointer f7 fw5 mt1 mb0"
                                                key={sub_key}
                                                onClick={() => jumpToSection(subsection_id)}
                                            >
                                                {subpage.title}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </Collapsible>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

Sidebar.propTypes = {
    ids: PropTypes.object.isRequired,
}

export default Sidebar
