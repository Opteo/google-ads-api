import PropTypes from 'prop-types'
import React from 'react'

import AttributesTable from './attributesTable'

const Section = ({ node, meta }) => {
    // console.log({ node, meta })
    return (
        <div>
            <h2>{node.frontmatter.title}</h2>
            <div
                style={{
                    width: '100%',
                }}
            >
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
    node: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
}

export default Section
