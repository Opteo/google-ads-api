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

    viewport_sections = {}

    findCurrentSection(id, percent_visible){
        this.viewport_sections[id] = percent_visible

        if(id === this.state.current_section){
            return
        }

        let is_biggest = true

        const other_percentages = Object.values(this.viewport_sections)
        
        for(const other_percent of other_percentages){
            if(other_percent > percent_visible){
                is_biggest = false
                break
            }
        }
        
        if(is_biggest){
            this.setState({
                current_section : id
            })
        }
    }

    render() {
        const { edges } = this.props

        const section_ids = getIds(edges)
        const sections_data = getSectionsData(edges)

        const Sections = Object.keys(sections_data).map((key, index) => (
            <Section
                key={'section' + index}
                data={sections_data[key]}
                onSectionChange={(id, percent) => this.findCurrentSection(id, percent)}
            />
        ))

        return (
            <div className="w-100 items-start">
                <div className="" style={{ width: '280px' }}>
                    <Sidebar sectionGroups={section_ids} currentSection={this.state.current_section} />
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
