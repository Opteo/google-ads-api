import PropTypes from 'prop-types'
import React from 'react'

class Enums extends React.Component {
    // ... constructor and toggleMenu from above

    constructor(props) {
        super(props)
        this.state = { shown: false }
        
    }

    toggleMenu() {
        this.setState(prevState => {
            return { shown: !prevState.shown }
        })
        console.log('toggling')
    }

    render() {
        const { enums } = this.props

        const rows = enums.map((el, index) => {
            return (
                <div key={el.s}>
                    <span>
                        {el.s} ({index})
                    </span>
                    : <span>{el.description}</span>
                </div>
            )
        })
        return (
            <div>
                <div
                    className="opteo-blue pointer"
                    onClick={() => {
                        this.toggleMenu()
                    }}
                >
                    Show Enums
                </div>
                <div style={{ display: this.state.shown ? 'block' : 'none' }} className="pl2">
                    {rows}
                </div>
            </div>
        )
    }
}

Enums.propTypes = {
    enums: PropTypes.array.isRequired,
}

export default Enums
