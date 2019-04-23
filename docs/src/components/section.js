import PropTypes from 'prop-types'
import React from 'react'

import AttributesTable from './attributesTable'

const Section = ({ id, key, node, meta }) => {
    return (
        <div id={id} key={key}>
            <h3>{node.frontmatter.title}</h3>
            <div>
                <div
                    style={{
                        width: '50%',
                        display: `inline-block`,
                        padding: `10px`,
                    }}
                >
                    <AttributesTable meta={meta} />
                </div>
                <div
                    style={{
                        width: '50%',
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
    key: PropTypes.string.isRequired,
    node: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
}

export default Section
