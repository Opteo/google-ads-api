import PropTypes from 'prop-types'
import React from 'react'
import { navigate } from '@reach/router';


import Collapsible from 'react-collapsible'
// import scrollToElement from 'scroll-to-element'
// const scrollToElement = require('scroll-to-element')
import _ from 'lodash'

const jumpToSection = id => {
    console.log('navigating!', id)
    navigate(id)
    // return
    // return scrollToElement(id, {
    //     offset: 0,
    //     duration: 100,
    // })
}

const Sidebar = ({ ids }) => {
    return (
        <div className="absolute top-0 h-100 bg-white fixed br b--opteo-light-gray" style={{ maxWidth: '280px' }}>
            <h3 className="tc pv3 bb b--opteo-light-gray" onClick={() => jumpToSection('#header')}>
                google-ads-api
            </h3>
            <h4 className="f6 pv2 opteo-blue pl4">CORE RESOURCES</h4>
            <ul className="h-100 list f5 ph0 overflow-y-scroll">
                {Object.keys(ids).map(entity => {
                    const subsections = ids[entity]
                    const key = `sidebar-${entity}`
                    const section_id = `#${subsections[1].id}`

                    return (
                        <li key={key} className="mv0 pb2">
                            <Collapsible
                                transitionTime={1}
                                trigger={entity}
                                triggerClassName="pointer fw6 f5"
                                triggerOpenedClassName="pointer fw6 f5"
                                onOpening={() => jumpToSection(section_id)}
                            >
                                <ul className="list">
                                    {Object.keys(subsections).map(index => {
                                        const sub_key = `${key}-${index}`
                                        const subpage = subsections[index]
                                        const subsection_id = `#${subpage.id}`

                                        return (
                                            <li
                                                className="pointer f6 fw5 mt1 mb0"
                                                key={sub_key}
                                            >
                                                <a href={subsection_id}>

                                                    {
                                                        subpage.type === 'object' 
                                                            ? `The ${subpage.entity} object`
                                                            : `${_.startCase(subpage.type)}`
                                                    }
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </Collapsible>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

Sidebar.propTypes = {
    ids: PropTypes.object.isRequired,
}

export default Sidebar
