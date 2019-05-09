import PropTypes from 'prop-types'
import React from 'react'

class Enums extends React.Component {
    constructor(props) {
        super(props)
        this.state = { shown: false }
    }

    toggleMenu() {
        this.setState(prevState => {
            return { shown: !prevState.shown }
        })
    }

    render() {
        const { enums } = this.props

        const rows = enums.map((el, index) => {
            return (
                <li key={el.s} className="enum-table grid pa2 bb b--opteo-light-gray">
                    <div>
                        <span className="fw5 opteo-gray">{el.s}</span>
                        <span> ({index})</span>
                    </div>
                    <div>{el.description}</div>
                </li>
            )
        })
        return (
            <div>
                <div
                    className={this.state.shown ? 'ba b--opteo-light-gray pt3 pl3 pr3 br3 mb3' : null}
                    onClick={() => {
                        this.toggleMenu()
                    }}
                >
                    <button className={this.state.shown ? 'opteo-link-blue mb3' : 'opteo-link-blue mt2 mb3'}>
                        {this.state.shown ? 'Hide Enums -' : 'Show Enums +'}
                    </button>
                    <ul
                        style={{ display: this.state.shown ? 'block' : 'none' }}
                        className="enum-container ba b--opteo-light-gray mb3 br2"
                    >
                        {rows}
                    </ul>
                </div>
            </div>
        )
    }
}

Enums.propTypes = {
    enums: PropTypes.array.isRequired,
}

export default Enums
