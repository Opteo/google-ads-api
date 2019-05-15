import PropTypes from 'prop-types'
import React from 'react'

import AttributesTableOneOfItem from './attributesTableOneOfItem'

class AttributesTableOneOfs extends React.Component {
    constructor(props) {
        super(props)
        this.state = { children_shown: [] }
    }

    toggleChild = (attribute) => {
        let updatedAttributeList = this.state.children_shown.concat(attribute);
        this.setState({children_shown: updatedAttributeList});
    }

    render() {
        const { oneOfs, nestingDepth, section } = this.props

        return Object.keys(oneOfs).map(oneof_type_key => {
            const one_of = oneOfs[oneof_type_key]
    
            const section_key = section + oneof_type_key
            const key = 'oneofcontainer' + section_key
    
            return (
                // <div className="table-heading pa3 opteo-middle-gray bb b--opteo-light-gray"><span className="fw7">ONE</span> of the following:</div>
                <div className={nestingDepth === 0 ? 'one-of-container' : 'one-of-container pa3'}>
                    <div 
                        key={key} 
                        className={
                            nestingDepth === 0 ? 'mb3 br3 ba b--opteo-light-gray' 
                            : 'br3 ba b--opteo-light-gray'
                        }
                    >
                        <div className="table-heading pa3 opteo-middle-gray bb b--opteo-light-gray"><span className="fw7">ONE</span> of the following:</div>
                        <ul className={nestingDepth === 0 ? '' : ''}>
                            {Object.keys(one_of).map((oneof_key, index) => {
                                return (
                                    <AttributesTableOneOfItem
                                        sectionKey={section_key}
                                        oneOfKey={oneof_key}
                                        details={one_of[oneof_key]}
                                        section={section}
                                        nestingDepth={nestingDepth}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        })
    }
}

AttributesTableOneOfs.propTypes = {
    rows: PropTypes.object,
    nestingDepth: PropTypes.number,
    section: PropTypes.string,
}

export default AttributesTableOneOfs
