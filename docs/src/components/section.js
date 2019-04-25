import PropTypes from 'prop-types'
import React from 'react'

import AttributesTable from './attributesTable'

const copyToClipboard = section_id => {
    const base = window.location.origin.toString()
    const id = `#${section_id}`
    window.prompt('Copy to clipboard: Ctrl+C, Enter', `${base}/${id}`)
}

const Section = ({ data }) => {
    const { id, node, meta } = data
    const { html } = node
    return (
        <div key={id} className="mv3 bb b--opteo-light-gray">
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
                {meta ? <AttributesTable section={id} data={meta} /> : null}
            </div>
        </div>
    )
}

Section.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Section
