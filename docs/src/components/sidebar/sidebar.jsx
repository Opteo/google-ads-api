import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import SidebarSectionGroups from './sidebarSectionGroups'
import SidebarSearch from './sidebarSearch'

import { jumpTo, centerSidebarToId } from '../../utils'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { search: '', jump_from_click: false }
    }

    shouldComponentUpdate(nextProps) {
        let should_update = false

        if (this.props.currentSection !== nextProps.currentSection) {
            const this_parent = this.props.currentSection.split('-')
            const this_parent_id = this_parent[this_parent.length - 1]

            const next_parent = nextProps.currentSection.split('-')
            const next_parent_id = next_parent[next_parent.length - 1]

            if (!this.state.jump_from_click && this_parent_id !== next_parent_id) {
                centerSidebarToId(next_parent_id)
            }
            this.setState({ jump_from_click: false })

            should_update = true
        }

        if (this.state.search.length > 0) {
            should_update = true
        }

        return should_update
    }

    componentDidMount() {
        const { hash } = window.location
        if (hash && hash.length > 0) {
            centerSidebarToId(hash.split('#')[1])
        }
    }

    handleSearch = event => {
        this.setState({ search: event.target.value })
    }

    handleJumpTo = id => {
        this.setState({ jump_from_click: true })
        jumpTo(`#${id}`)
    }

    render() {
        const { currentSection, sectionGroups } = this.props

        return (
            <div
                className="absolute top-0 h-100 flex flex-column fw4 bg-white fixed br b--opteo-light-gray"
                style={{ width: '280px' }}
            >
                <Link className="f3 tc pt3-5 pb2  opteo-gray hover-opteo-gray" to="/">
                    google-ads-api
                </Link>
                <div className="mono f7 tc opteo-middle-gray">v2.0.0</div>
                <SidebarSearch changeHandler={this.handleSearch} />
                <SidebarSectionGroups
                    sectionGroups={sectionGroups}
                    currentSection={currentSection}
                    search={this.state.search}
                    jumpTo={this.handleJumpTo}
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
