// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import AttributesTable from './attributesTable'

const Section = ({ node, meta }) => {
    console.log({ node, meta })
    return (
        <div>
            <h2>{node.frontmatter.title}</h2>
            <AttributesTable meta={meta} />
        </div>
    )
}

Section.propTypes = {
    node: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
}

export default Section
