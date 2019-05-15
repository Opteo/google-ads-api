import React from 'react'

import AttributesTable from './attributesTable'
import SectionContainer from './sectionContainer'

class Section extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    render() {
        const { data } = this.props

        const { code, description } = data

        const { id, meta, is_entity_index } = description

        const html_description = description.node.html || ''

        const is_not_core_resource = description.node.frontmatter.type === 'manual'

        if(is_not_core_resource){
            return (
                <SectionContainer sectionId={id} key={id} handler={this.props.onSectionChange}>
                    <div
                        className={'pv4'}
                    >
                        <div className="manual-content text-container" dangerouslySetInnerHTML={{ __html: html_description }} />
                    </div>
                </SectionContainer>
            )
        }

        if (!code) {
            return (
                <SectionContainer sectionId={id} key={id} handler={this.props.onSectionChange}>
                    <div className="text-container half-column">
                        <div className="content" dangerouslySetInnerHTML={{ __html: html_description }} />
                        <div>{meta ? <AttributesTable section={id} data={meta} nestingDepth={0} /> : null}</div>
                    </div>
                </SectionContainer>
            )
        }

        const html_code = code.node.html || ''

        return (
            <SectionContainer sectionId={id} key={id} handler={this.props.onSectionChange}>
                <div
                    className={
                        ' ' +
                        (is_entity_index
                            ? 'flex justify-between bb b--opteo-light-gray pv5'
                            : 'flex justify-between bb b--opteo-light-gray pv5')
                    }
                >
                    <div className="text-container half-column">
                        <div className="content" dangerouslySetInnerHTML={{ __html: html_description }} />
                        <div>{meta ? <AttributesTable section={id} data={meta} nestingDepth={0} /> : null}</div>
                    </div>
                    <div
                        className="sticky-code-block self-start half-column f6"
                        dangerouslySetInnerHTML={{ __html: html_code }}
                    />
                </div>
            </SectionContainer>
        )
    }
}

export default Section
