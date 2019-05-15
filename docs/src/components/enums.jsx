import PropTypes from 'prop-types'
import React from 'react'

class Enums extends React.Component {
    constructor(props) {
        super(props)
        this.state = { shown: false }
    }

    toggleMenu = () => {
        this.setState(prevState => {
            return { shown: !prevState.shown }
        })
    }

    render() {
        const { enums } = this.props

        const rows = enums.map((el, index) => {
            return (
                <li key={el.s} className="enum-table grid pv2 ph3 bt b--opteo-light-gray">
                    <div>
                        <span className="fw5 opteo-gray">{el.s}</span>
                        <span className="fw4 opteo-middle-gray"> ({index})</span>
                    </div>
                    <div>{el.description}</div>
                </li>
            )
        })
        return (
            <div>
                <div
                    className={this.state.shown ? 'ba b--opteo-light-gray br3 mt2' : null}
                    onClick={this.toggleMenu}
                >
                    <button className={this.state.shown ? 'opteo-link-blue' : 'opteo-link-blue btn-box-shadow mt2'}>
                        {this.state.shown ? 'Hide Enums -' : 'Show Enums +'}
                    </button>

                    <div style={{ display: this.state.shown ? 'block' : 'none' }}>
                        <ul className="enum-container br2">{rows}</ul>
                    </div>
                </div>
            </div>
        )
    }
}

Enums.propTypes = {
    enums: PropTypes.array.isRequired,
}

export default Enums
