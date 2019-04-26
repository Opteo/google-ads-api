import PropTypes from 'prop-types'
import React from 'react'

const Enums = ({ enums }) => {
    const rows = enums.map((el, index) => {
        return (
            <div key={el.s}>
                <span>{el.s} ({index})</span>: <span>{el.description}</span>
            </div>
        )
    })
    return <div className="pl2">{rows}</div>
}

Enums.propTypes = {
    enums: PropTypes.array.isRequired,
}

export default Enums
