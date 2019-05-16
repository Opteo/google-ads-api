import PropTypes from 'prop-types'
import React from 'react'

const SidebarSearch = ({ changeHandler }) => (
    <div className="pa3 bb b--opteo-light-gray">
        <input
            className="w-100 btn-box-shadow bw0 outline-0 pa1 br1"
            type="text"
            placeholder="search"
            onChange={changeHandler}
        />
    </div>
)

SidebarSearch.propTypes = {
    value: PropTypes.string,
    changeHandler: PropTypes.func,
}

export default SidebarSearch
