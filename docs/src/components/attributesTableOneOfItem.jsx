import PropTypes from 'prop-types'
import React from 'react'

import Attribute from './attribute'

class AttributesTableOneOfItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    toggleOpen = () => {
        this.setState(prevState => {
            return { open: !prevState.open }
        })
    }

    render() {
        const { sectionKey, oneOfKey, details, nestingDepth, section } = this.props
        const unique_oneof_key = 'oneof' + sectionKey
        const unique_attribute_key = unique_oneof_key + oneOfKey
        const description = details._parent_description

        return (
            <li
                key={unique_attribute_key + 'selector'}
                className={`one-of-item-container pointer bb b--opteo-light-gray ${this.state.open ? 'active' : ''}`}
            >
                <div
                    className={`one-of-item-attribute ${
                        this.state.open ? 'active' : ''
                    } flex justify-between pointer relative`}
                    onClick={this.toggleOpen}
                >
                    <div>
                        <span className="mono fw6 mv0 opteo-gray">{oneOfKey} </span>
                        <span className="f7 fw5 mv0 opteo-middle-gray">{details._type ? details._type : 'object'}</span>
                    </div>

                    <div className="chevron-container">
                        <svg
                            className="chevron-arrow"
                            width="12px"
                            height="8px"
                            viewBox="0 0 12 8"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        >
                            <g stroke="none" strokeWidth="1" fillRule="evenodd">
                                <g transform="translate(-1051.000000, -380.000000)">
                                    <g>
                                        <g transform="translate(75.000000, 0.000000)">
                                            <g transform="translate(48.000000, 212.000000)">
                                                <g transform="translate(0.000000, 140.000000)">
                                                    <g transform="translate(855.000000, 14.000000)">
                                                        <g transform="translate(19.000000, 9.000000)">
                                                            <polygon points="55.41 5 60 9.77083333 64.59 5 66 6.46875 60 12.71875 54 6.46875" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className={`ml3 ${this.state.open ? 'mt2' : 'mb3'}`}  dangerouslySetInnerHTML={{ __html: description }} />
                {typeof details !== 'object' ? null : (
                    <div
                        style={{ display: this.state.open ? 'block' : 'none' }}
                        className={unique_oneof_key}
                        id={unique_attribute_key}
                        key={unique_attribute_key}
                    >
                        <Attribute
                            data={details}
                            section={section}
                            name={oneOfKey}
                            enums={details._enums}
                            nestingDepth={nestingDepth}
                            ofManyChild={true}
                        />
                    </div>
                )}
            </li>
        )
    }
}

AttributesTableOneOfItem.propTypes = {
    sectionKey: PropTypes.string,
    oneOfKey: PropTypes.string,
    details: PropTypes.object,
    nestingDepth: PropTypes.number,
    section: PropTypes.string,
}

export default AttributesTableOneOfItem
