import PropTypes from 'prop-types'
import React from 'react'

const SidebarSearch = ({ value, changeHandler }) => (
    <div className="pl3 pr3">
        <input
            className="w-100 pa1 br2 ba b--opteo-light-gray"
            type="text"
            placeholder="search"
            value={value}
            onChange={changeHandler}
        />
    </div>
)

SidebarSearch.propTypes = {
    value: PropTypes.string,
    changeHandler: PropTypes.func,
}

export default SidebarSearch
