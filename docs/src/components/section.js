import PropTypes from 'prop-types'
import React from 'react'

import AttributesTable from './attributesTable'

const Section = ({ id, name, node, meta }) => {
    const { fields } = node
    return (
        <div id={id} key={name}>
            <h3>{node.frontmatter.title}</h3>
            <div>
                <div
                    style={{
                        width: '60%',
                        display: `inline-block`,
                        padding: `10px`,
                        maxWidth: '400px',
                    }}
                >
                    {fields.is_index ? <AttributesTable data={meta.object} /> : ''}
                </div>
                <div
                    style={{
                        width: '40%',
                        display: `inline-block`,
                        padding: `10px`,
                        verticalAlign: `top`,
                    }}
                >
                    <div dangerouslySetInnerHTML={{ __html: node.html }} />
                </div>
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
