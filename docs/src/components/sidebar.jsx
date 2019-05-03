import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import { getSubsectionTitle } from '../utils'
class Sidebar extends React.Component {
    render() {
        const { sections, currentSection } = this.props

        const getSubsectionRows = subsections => {
            return Object.keys(subsections).map(index => {
                const subsection = subsections[index]

                const subsection_key = subsection.id
                const subsection_id = `#${subsection_key}`

                if (subsection.id === currentSection) {
                    return (
                        <li className="entity-child pointer f5-5 pt1 pb1 bg-opteo-light-gray" key={subsection_key}>
                            <Link to={'/' + subsection_id}>{getSubsectionTitle(subsection)}</Link>
                        </li>
                    )
                }

                return (
                    <li className="entity-child pointer f5-5 pt1 pb1" key={subsection_key}>
                        <Link to={'/' + subsection_id}>{getSubsectionTitle(subsection)}</Link>
                    </li>
                )
            })
        }

        const SectionRows = Object.keys(sections).map(section => {
            const subsections = sections[section]
            const section_key = `sidebar-${section}`
            const section_id = `/#${section.toLowerCase()}`

            const subsection_ids = Object.keys(subsections).map(index => subsections[index].id)

            if (!subsection_ids.includes(currentSection)) {
                return (
                    <li key={section_key} className="mv0 pb2-5">
                        <Link className="entity pointer" to={section_id}>
                            {section}
                        </Link>
                    </li>
                )
            }

            return (
                <li key={section_key} className="mv0 pb2-5">
                    <Link className="entity pointer bg-opteo-light-gray" to={section_id}>
                        {section}
                    </Link>
                    <ul className="list pt2 pl3" id={section_key}>
                        {getSubsectionRows(subsections)}
                    </ul>
                </li>
            )
        })

        return (
            <div
                className="absolute top-0 h-100 flex flex-column bg-white fixed br b--opteo-light-gray"
                style={{ maxWidth: '280px' }}
            >
                <Link className="f3 tc pv3 bb b--opteo-light-gray opteo-gray hover-opteo-gray" to="/">
                    google-ads-api
                </Link>
                <div className="f6 pa3 bb b--opteo-light-gray opteo-middle-gray">CORE RESOURCES</div>
                <ul className="list f5 pv3 pl3 overflow-y-auto">{SectionRows}</ul>
            </div>
        )
    }
}

Sidebar.propTypes = {
    sections: PropTypes.object.isRequired,
    currentSection: PropTypes.string,
}

export default Sidebar
