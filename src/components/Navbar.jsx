import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import './styles/Navbar.css'
function Navbar(props){
    
    return(
        <header>
            <nav className={`${props.mode} navbar`}>
                <h3 className="question">
                    Where in the world?
                </h3>
                <div onClick={props.handleMode} className='mode'>
                    <FontAwesomeIcon icon={faMoon} className='moon-icon'/>
                    <div>
                        {props.isDarkMode ? 'Light' : 'Dark'} Mode
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar