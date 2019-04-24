import PropTypes from 'prop-types'
import React from 'react'

import AttributesTable from './attributesTable'

const copyToClipboard = section_id => {
    const base = window.location.origin.toString()
    const id = `#${section_id}`
    window.prompt('Copy to clipboard: Ctrl+C, Enter', `${base}/${id}`)
}

const Section = ({ id, name, node, meta }) => {
    const { fields, html } = node
    return (
        <div key={name} className="mv3 bb b--opteo-light-gray">
            <div className="mb3">
                <span id={id} className="fw6 f4">
                    {node.frontmatter.title}
                </span>
                <span className="black-70 f7 pl2 pointer" onClick={() => copyToClipboard(id)}>
                    copy link
                </span>
            </div>
            <div className="w-100 fl">
                <div className="f6" dangerouslySetInnerHTML={{ __html: html }} />
                {fields.is_index ? <AttributesTable data={meta.object} /> : ''}
            </div>
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
