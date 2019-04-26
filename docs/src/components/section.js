import PropTypes from 'prop-types'
import React from 'react'

import AttributesTable from './attributesTable'

const Section = ({ data }) => {
    const { id, node, meta, is_index } = data
    const { html } = node

    return (
        <div id={id} key={id} className={`  ` + (is_index ? 'bb b--opteo-light-gray pt6 pb4' : 'pv4')} >

            <div className="w-100 fl v-top">
                <div className="f6 content v-top" dangerouslySetInnerHTML={{ __html: html }} />
                <div className="w-50">
                    {meta ? <AttributesTable section={id} data={meta} /> : null}

                </div>
            </div>

            <div className="cf"></div>
        </div>
    )
}

Section.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Section
