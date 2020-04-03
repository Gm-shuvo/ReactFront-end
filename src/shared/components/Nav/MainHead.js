import React from 'react'
import './MainHead.css'

const MainHead = props => {
    return (
        <header className= 'main-header'>
            {props.children}
        </header>
    )
}

export default MainHead