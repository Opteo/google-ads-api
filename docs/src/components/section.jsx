import React from 'react'

import AttributesTable from './attributesTable'
import SectionContainer from './SectionContainer'

class Section extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    render() {
        const { data } = this.props

        const { code, description } = data
        const { id, entity, meta, is_index } = description

        const html_description = description.node.html || ''
        const html_code = code.node.html || ''

        return (
            <SectionContainer
                id={id}
                key={id}
                className={`  ` + (is_index ? 'bb b--opteo-light-gray pt6 pb4' : 'bb b--opteo-light-gray pv4')}
                onEnterViewport={() => this.props.onSectionChange(entity)}
            >
                <div className="w-100 fl v-top">
                    <div className="f6 content v-top" dangerouslySetInnerHTML={{ __html: html_description }} />
                    <div className="w-50">{meta ? <AttributesTable section={id} data={meta} /> : null}</div>
                </div>
                <div className="f6 content v-top" dangerouslySetInnerHTML={{ __html: html_code }} />
                <div className="cf" />
            </SectionContainer>
        )
    }
}

export default Section
