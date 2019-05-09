import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import SidebarSectionGroups from './sidebarSectionGroups'
import SidebarSearch from './sidebarSearch'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { search: '' }
    }

    componentDidUpdate(prevProp) {
        // return false
        // if (this.props.currentSection !== prevProp.currentSection) {
        //     const current_el = document.getElementById(`sidebar-${this.props.currentSection}`)
        //     const sidebar_el = document.getElementById('section-list')

        //     if (current_el) {
        //         const margin = window.innerHeight / 3 + current_el.parentElement.offsetHeight
        //         sidebar_el.scrollTop = current_el.offsetTop - margin
        //     }
        //     else {
        //     }
        // }
    }

    handleSearch = event => {
        this.setState({ search: event.target.value })
    }

    render() {
        const { currentSection, sectionGroups } = this.props

        return (
            <div
                className="absolute top-0 h-100 flex flex-column fw4 bg-white fixed br b--opteo-light-gray"
                style={{ maxWidth: '280px' }}
            >
                <Link className="f3 tc pt3-5 pb2  opteo-gray hover-opteo-gray" to="/">
                    google-ads-api
                </Link>
                <SidebarSearch value={this.state.search} changeHandler={this.handleSearch} />
                <SidebarSectionGroups
                    sectionGroups={sectionGroups}
                    currentSection={currentSection}
                    search={this.state.search}
                />
            </div>
        )
    }
}

Sidebar.propTypes = {
    sectionGroups: PropTypes.object,
    currentSection: PropTypes.string,
}

export default Sidebar
