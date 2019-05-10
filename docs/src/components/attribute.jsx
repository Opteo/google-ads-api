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
        const { data, name, enums, section, nestingDepth } = this.props

        const { _description } = data

        return (
            <div
                key={`${section}-${name}`}
                className={nestingDepth === 0 ? 'w-100 pv3 bt b--opteo-light-gray' : 'w-100 pa3 bt b--opteo-light-gray'}
            >
                <div className="mono mb2">
                    <span className="fw6 mv0 opteo-gray"> {name} </span>{' '}
                    {(() => {
                        if (data._type) {
                            return <span className="f6 fw5 mv0 opteo-middle-gray"> {data._type} </span>
                        } else {
                            return <span className="f6 fw5 mv0 opteo-middle-gray">object</span>
                        }
                    })()}
                </div>
                {enums && <Enums enums={enums} />}
                {(() => {
                    if (_description) {
                        return <div className="" dangerouslySetInnerHTML={{ __html: _description }} />
                    } else {
                        return (
                            <div className={this.state.child_shown ? 'ba b--opteo-light-gray br3 mt3' : null}>
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
                                    <AttributesTable data={data} section={section} nestingDepth={nestingDepth + 1} />
                                </div>
                            </div>
                        )
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
}

export default Attribute
