import PropTypes from 'prop-types'
import React from 'react'

import AttributesTable from './attributesTable'

const Section = ({ id, name, node, meta }) => {
    const { fields, html } = node
    return (
        <div id={id} key={name}>
            <h3>{node.frontmatter.title}</h3>
            <div className="w-100 flex items-start">
                <div className="w-60">{fields.is_index ? <AttributesTable data={meta.object} /> : ''}</div>
                <div className="w-40" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <hr />
        </div>
    )
}

Section.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    node: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
}

export default Section
