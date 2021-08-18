import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons' 
import { useHistory, useRouteMatch } from 'react-router'
function Header() {
   const {path} = useRouteMatch()
   const history = useHistory()
   const btn = path==='/' || path==='/signup' ? "Log In" : path==='/login' ? "Sign Up" : "Log Out"
   const handleClick = ()=>{
       if(path==='/' || path==='/signup')
       {
           history.push('/login')
       }
       else if(path==='/login')
       {
           history.push('/signup')
       }
       else
       {
           
        history.push('/login')

       }

   }  
   const handleLogo = () =>{
       history.push('/')
   }
   
    const logoIcon = <FontAwesomeIcon icon={faPaperPlane} className="logo-icon" />
    return (
        <div className="header" data-aos="fade-down">
            <div className="logo" onClick={handleLogo}>{logoIcon} Note Dusk</div>
            <div className="sign">
                <div className="sign-btn" onClick={handleClick}>{btn}</div>
            </div>
        </div>
    )
}

export default Header
