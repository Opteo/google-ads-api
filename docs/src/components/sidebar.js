import PropTypes from 'prop-types'
import React from 'react'

const scrollToElement = require('scroll-to-element')

const Sidebar = ({ ids }) => {
    return (
        <div className="br ph1">
            <h2 class="tc">google-ads-api</h2>
            <ul className="list f6">
                {Object.keys(ids).map(entity => {
                    const subsections = ids[entity]
                    const key = `sidebar-${entity}`
                    const section_id = `#${subsections[1].id}`

                    return (
                        <li key={key}>
                            <strong onClick={() => scrollToElement(section_id)}>{entity}</strong>
                            <ul className="list">
                                {Object.keys(subsections).map(index => {
                                    const sub_key = `${key}-${index}`
                                    const subpage = subsections[index]
                                    const subsection_id = `#${subpage.id}`

                                    return (
                                        <li key={sub_key} onClick={() => scrollToElement(subsection_id)}>
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
