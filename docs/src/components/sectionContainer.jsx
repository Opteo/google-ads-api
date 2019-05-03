import React from 'react'
import handleViewport from 'react-in-viewport'

const SidebarContainer = ({ id, children, forwardedRef }) => (
    <div id={id} ref={forwardedRef}>
        {children}
    </div>
)
export default handleViewport(SidebarContainer)
