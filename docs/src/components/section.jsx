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
        const { id, meta, is_index } = description

        const html_description = description.node.html || ''
        const html_code = code.node.html || ''

        return (
            <SectionContainer id={id} key={id} onEnterViewport={() => this.props.onSectionChange(id)}>
                <div
                    className={
                        ' ' +
                        (is_index
                            ? 'flex justify-between bb b--opteo-light-gray pv5'
                            : 'flex justify-between bb b--opteo-light-gray pv5')
                    }
                >
                    <div className="text-container w-48">
                        <div className="content" dangerouslySetInnerHTML={{ __html: html_description }} />
                        <div>{meta ? <AttributesTable section={id} data={meta} /> : null}</div>
                    </div>
                    <div
                        className="sticky-code-block self-start w-48 f6"
                        dangerouslySetInnerHTML={{ __html: html_code }}
                    />
                </div>
            </SectionContainer>
        )
    }
}

export default Section
