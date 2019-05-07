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
                <li key={el.s} className="mb1">
                    <span>
                        {el.s} ({index})
                    </span>
                    : <span>{el.description}</span>
                </li>
            )
        })
        return (
            <div>
                <div
                    className="mb3"
                    onClick={() => {
                        this.toggleMenu()
                    }}
                >
                    <button className="f6 pa2 ba br2 b--opteo-light-gray opteo-link-blue">
                        {this.state.shown ? 'Hide Enums' : 'Show Enums'}
                    </button>
                </div>
                <ul style={{ display: this.state.shown ? 'block' : 'none' }} className="enum-container pa3 mb3 br2">
                    {rows}
                </ul>
            </div>
        )
    }
}

Enums.propTypes = {
    enums: PropTypes.array.isRequired,
}

export default Enums
