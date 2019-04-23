import PropTypes from 'prop-types'
import React from 'react'

const Enums = ({ enums }) => {
    const rows = enums.map(el => {
        return (
            <div key={el.s}>
                <span>{el.s}</span>: <span>{el.description}</span>
            </div>
        )
    })
    return <div>{rows}</div>
}

Enums.propTypes = {
    enums: PropTypes.array.isRequired,
}

export default Enums
