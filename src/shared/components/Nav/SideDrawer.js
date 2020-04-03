import React from 'react'
import './SideDrawer.css'
import ReactDom from 'react-dom'

const SideDrawer = props => {
    const content = <aside className= 'side-drawer'>
        {props.chindren}
    </aside>
    return ReactDom.createPortal(content, document.getElementById('drawer-hook'))
}

export default SideDrawer