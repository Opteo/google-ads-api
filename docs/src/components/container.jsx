import PropTypes from 'prop-types'
import React from 'react'

import Section from '../components/section'
import Sidebar from '../components/sidebar'

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = { current_section: '' }
    }

    render() {
        const { ids, sectionsData } = this.props

        const Sections = Object.keys(sectionsData).map((key, index) => (
            <Section
                key={'section' + index}
                data={sectionsData[key]}
                onSectionChange={section => this.setState({ current_section: section })}
            />
        ))

        return (
            <div className="w-100 items-start">
                <div className="" style={{ width: '280px' }}>
                    <Sidebar ids={ids} currentSection={this.state.current_section} />
                </div>
                <div className="pa4 mt3" style={{ marginLeft: '280px', width: 'calc(100% - 280px)' }}>
                    {Sections}
                </div>
            </div>
        )
    }
}

Container.propTypes = {
    ids: PropTypes.object.isRequired,
    sectionsData: PropTypes.object.isRequired,
}

export default Container
