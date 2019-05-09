import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import SidebarSections from './sidebarSections'
import SidebarSearch from './sidebarSearch'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { search: '' }
    }

    componentWillReceiveProps(nextProp, prevProp) {
        if (nextProp.currentSection !== prevProp.currentSection) {
            const current_el = document.getElementById(`sidebar-${nextProp.currentSection}`)
            const sidebar_el = document.getElementById('section-list')

            if (current_el) {
                const margin = window.innerHeight / 3 + current_el.parentElement.offsetHeight
                sidebar_el.scrollTop = current_el.offsetTop - margin
            }
        }
    }

    handleSearch = event => {
        this.setState({ search: event.target.value })
    }

    render() {
        const { sections, currentSection } = this.props

        return (
            <div
                className="absolute top-0 h-100 flex flex-column fw4 bg-white fixed br b--opteo-light-gray"
                style={{ maxWidth: '280px' }}
            >
                <Link className="f3 tc pv3 opteo-gray hover-opteo-gray" to="/">
                    google-ads-api
                </Link>
                <SidebarSearch value={this.state.search} changeHandler={this.handleSearch} />
                <SidebarSections sections={sections} currentSection={currentSection} search={this.state.search} />
            </div>
        )
    }
}

Sidebar.propTypes = {
    sections: PropTypes.object.isRequired,
    currentSection: PropTypes.string,
}

export default Sidebar
