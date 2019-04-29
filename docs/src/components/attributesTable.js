import PropTypes from 'prop-types'
import React from 'react'

import Attribute from './attribute'

const toggleOneOf = (others, id) => {
    const els = document.getElementsByClassName(others)
    for (let item of els) {
        item.style.display = 'none'
    }

    document.getElementById(id).style.display = 'block'
}

const AttributesTable = ({ data, title, section }) => {
    const getBasicRows = rows => {
        return Object.keys(rows).map(key => {
            const details = rows[key]
            if (typeof details !== 'object' || details._oneof) {
                return null
            }

            return <Attribute data={details} section={section} name={key} key={key} enums={details._enums} />
        })
    }

    const getOneOfRows = one_ofs => {
        return (
            Object.keys(one_ofs).map(oneof_type_key => {
                return (
                    <div>
                        {
                            Object.keys(one_ofs[oneof_type_key]).map((oneof_key, index) => {
                                const details = one_ofs[oneof_type_key][oneof_key]
                                if (typeof details !== 'object') {
                                    return null
                                }

                                return (
                                    <div style={ {display : index === 0 ? 'block' : 'none'} } className={['oneof' + section + oneof_type_key]} id={'oneof' + section + oneof_type_key + oneof_key }>
                                        <Attribute data={details} section={section} name={oneof_key} key={oneof_key} enums={details._enums} />
                                    </div>  
                                )
                            })
                        }

                        This field can also be replaced by: 
                        {
                            Object.keys(one_ofs[oneof_type_key]).map(oneof_key => {
                                return (
                                    <div className="opteo-blue" onClick={() => toggleOneOf('oneof' + section + oneof_type_key, 'oneof' + section + oneof_type_key + oneof_key)}> • {oneof_key.split('_').join(' ')}  </div>  
                                )
                            })
                        }
                        
                    </div>
                )
            })
         )
    }

    const oneOfs = {}

    Object.keys(data).forEach(key => {
        if(data[key]._oneof){
            if(!oneOfs[data[key]._oneof]){
                oneOfs[data[key]._oneof] = {}
            }

            oneOfs[data[key]._oneof][key] = data[key]
        }
    })

    return (
        <div className="f5 ba b--white  pr3" >
            
            <h4>{title || 'Fields'}</h4>
            <div>{getOneOfRows(oneOfs)}</div>
            <div>{getBasicRows(data)}</div>
        </div>
    )
}

AttributesTable.propTypes = {
    data: PropTypes.object.isRequired,
    section: PropTypes.string,
    title: PropTypes.string,
}

export default AttributesTable
