import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons' 
function Header() {
    const logoIcon = <FontAwesomeIcon icon={faPaperPlane} className="logo-icon"/>
    return (
        <div className="header" data-aos="fade-down">
            <div className="logo">{logoIcon}  Note Dusk</div>
            <div className="sign">
                <div className="sign-btn"><a href="/" >Log In</a></div>
            </div>
        </div>
    )
}

export default Header
