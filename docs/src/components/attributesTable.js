import PropTypes from 'prop-types'
import React from 'react'
import sortBy from 'lodash.sortby'

import Attribute from './attribute'

const AttributesTable = ({ data, title, section }) => {
    const getRows = rows => {
        return sortBy(Object.keys(rows), key => {
            return key + rows[key]._oneof
        }).map(key => {
            const details = rows[key]
            if (typeof details !== 'object') {
                return null
            }

            return <Attribute data={details} section={section} name={key} key={key} enums={details._enums} />
        })
    }

    return (
        <div className="f5 ba b--white  pr3" >
            
            <h4>{title || 'Fields'}</h4>
                
            <div>{getRows(data)}</div>
        </div>
    )
}

AttributesTable.propTypes = {
    data: PropTypes.object.isRequired,
    section: PropTypes.string,
    title: PropTypes.string,
}

export default AttributesTable
