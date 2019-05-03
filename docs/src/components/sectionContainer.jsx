import React from 'react'
import handleViewport from 'react-in-viewport'

const SectionContainer = ({ id, children, forwardedRef }) => (
    <div id={id} ref={forwardedRef}>
        {children}
    </div>
)
export default handleViewport(SectionContainer)
