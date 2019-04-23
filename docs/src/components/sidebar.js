import PropTypes from 'prop-types'
import React from 'react'

const scrollToElement = require('scroll-to-element')

const Sidebar = ({ ids }) => {
    return (
        <div>
            <h2>google-ads-api</h2>
            <ul>
                {Object.keys(ids).map(id => {
                    const title = ids[id]
                    const element_id = `div#${id}`
                    const key = `sidebar-${id}`
                    return (
                        <li key={key} onClick={() => scrollToElement(element_id)}>
                            {title}
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
