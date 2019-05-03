import PropTypes from 'prop-types'
import React from 'react'

import Section from '../components/section'
import Sidebar from '../components/sidebar'

import { getIds, getSectionsData } from '../utils'

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = { current_section: '' }
    }

    render() {
        const { edges } = this.props

        const section_ids = getIds(edges)
        const sections_data = getSectionsData(edges)

        const Sections = Object.keys(sections_data).map((key, index) => (
            <Section
                key={'section' + index}
                data={sections_data[key]}
                onSectionChange={section => this.setState({ current_section: section })}
            />
        ))

        return (
            <div className="w-100 items-start">
                <div className="" style={{ width: '280px' }}>
                    <Sidebar sections={section_ids} currentSection={this.state.current_section} />
                </div>
                <div className="pa4 mt3" style={{ marginLeft: '280px', width: 'calc(100% - 280px)' }}>
                    {Sections}
                </div>
            </div>
        )
    }
}

Container.propTypes = {
    edges: PropTypes.array.isRequired,
}

export default Container
