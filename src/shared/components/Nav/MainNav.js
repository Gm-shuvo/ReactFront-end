import React,{useState} from 'react'
import './MainNav.css'
import MainHead from './MainHead'
import { Link } from 'react-router-dom'
import NavLinks from './NavLink'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'


const MainNav = props => {
    const [drawerIsOpen, setdrawerIsOpen] = useState( false )
    
    const openDrawer = () => {
        setdrawerIsOpen (true)
    }

    const closeDrawer = () => {
        setdrawerIsOpen (false)
    }

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawer}/> }
            {drawerIsOpen && <SideDrawer>
                <nav className='main-navigation__drawer-nav'>
                    <NavLinks />
                </nav>
            </SideDrawer>}

            <MainHead>
                <button className = 'main-navigation__menu-btn' onClick = {openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>

                <h1 className='main-navigation__title'>
                    <Link to ='/'>Your places</Link> 
                </h1>

                <nav className = 'main-navigation__header-nav'>
                 <NavLinks/>
                </nav>
            </MainHead>
    
         </React.Fragment>
    )
        
    
}
 
export default MainNav