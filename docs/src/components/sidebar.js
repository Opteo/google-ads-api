import PropTypes from 'prop-types'
import React from 'react'

const scrollToElement = require('scroll-to-element')
const jumpToSection = id =>
    scrollToElement(id, {
        offset: -10,
        ease: '',
        duration: 700,
    })

const Sidebar = ({ ids }) => {
    return (
        <div className="ph1 br b--opteo-light-gray">
            <h2 class="tc pv3">google-ads-api</h2>
            <ul className="list f6">
                {Object.keys(ids).map(entity => {
                    const subsections = ids[entity]
                    const key = `sidebar-${entity}`
                    const section_id = `#${subsections[1].id}`

                    return (
                        <li key={key}>
                            <strong className="pointer f6" onClick={() => jumpToSection(section_id)}>
                                {entity}
                            </strong>
                            <ul className="list">
                                {Object.keys(subsections).map(index => {
                                    const sub_key = `${key}-${index}`
                                    const subpage = subsections[index]
                                    const subsection_id = `#${subpage.id}`

                                    return (
                                        <li
                                            className="pointer f7 fw5"
                                            key={sub_key}
                                            onClick={() => jumpToSection(subsection_id)}
                                        >
                                            {subpage.title}
                                        </li>
                                    )
                                })}
                            </ul>
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
