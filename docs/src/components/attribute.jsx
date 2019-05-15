import PropTypes from 'prop-types'
import React from 'react'

import AttributesTable from './attributesTable'
import Enums from './enums'

class Attribute extends React.Component {
    constructor(props) {
        super(props)
        this.state = { child_shown: false }
    }

    toggleChild = () => {
        this.setState(prevState => {
            return { child_shown: !prevState.child_shown }
        })
    }

    render() {
        const { data, name, enums, section, nestingDepth, ofManyChild } = this.props

        const { _description } = data

        return (
            <div
                key={`${section}-${name}`}
                className={
                    ofManyChild && enums ? 'w-100 pl3 pr3 pb3'
                    : ofManyChild && nestingDepth === 0 ? 'w-100 pb3 ph3'
                    : nestingDepth === 0 ? 'w-100 pv3 bt b--opteo-light-gray'
                    : ofManyChild ? 'w-100 pa3'
                    : 'w-100 pa3 bt b--opteo-light-gray'}
            >
                { !ofManyChild && (
                <div>
                    <span className="mono fw6 mv0 opteo-gray">{name}</span>
                    {(() => {
                        if (data._type) {
                            return <span className="f7 fw5 mv0 opteo-middle-gray"> {data._type}</span>
                        } else {
                            return <span className="f7 fw5 mv0 opteo-middle-gray"> object</span>
                        }
                    })()}
                </div>
                )}
                {enums && <Enums enums={enums} />}
                {(() => {
                    if (_description) {
                        return <div className="mt2" dangerouslySetInnerHTML={{ __html: _description }} />
                    } else {
                        if (ofManyChild) {
                            return (
                                <div 
                                    style={{ display: this.state.child_shown || ofManyChild ? 'block' : 'none' }}
                                    className="br3 ba b--opteo-light-gray"
                                >
                                    <div className="table-heading opteo-middle-gray">Child Fields</div>
                                    <AttributesTable data={data} section={section} nestingDepth={nestingDepth + 1} />
                                </div>
                            )
                        } else {
                            return (
                                <div className={this.state.child_shown ? 'ba b--opteo-light-gray br3 mt2' : null}>
                                    <button
                                        className={
                                            this.state.child_shown
                                                ? 'opteo-link-blue'
                                                : 'opteo-link-blue btn-box-shadow mt2'
                                        }
                                        onClick={this.toggleChild}
                                    >
                                        {this.state.child_shown ? 'Hide Child Fields -' : 'Show Child Fields +'}
                                    </button>
                                    <div style={{ display: this.state.child_shown ? 'block' : 'none' }}>
                                        <AttributesTable data={data} section={section} nestingDepth={nestingDepth + 1}/>
                                    </div>
                                </div>
                            )
                        }
                    }
                })()}
            </div>
        )
    }
}

Attribute.propTypes = {
    data: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    enums: PropTypes.array,
    section: PropTypes.string,
    ofManyChild: PropTypes.bool,
}

export default Attribute
