import React from 'react'
import Footer2 from '../Footer/Footer2'
import Header from '../Header/Header'
import { useState } from 'react'
import './signup.css'
function SignUp() {
    const [ ds, setstate] = useState("")
    return (
        <>
        <Header />
        <div className="register-main-box">
            <div className="register-container" data-aos="fade-up">
            <h1>Register yourself!</h1>
                <form className="register-form" data-aos="fade-up">
                    <div>
                    <label>Name</label><br />
                    <input type="text" />
                    </div>
                    <div>
                    <label>Email</label><br />
                    <input type="text" /><br />
                    </div>
                    <div><label>Password </label><br />
                    <input type="password" /><br /></div>
                    <div>
                    <label>Confirm Password </label><br />
                    <input type="password"  /><br />
                    </div>
                    <button className="register-submit">SIGN UP</button>
                </form>
          </div>
          </div>      
        <Footer2 />
        
                    
                    
    </>
    )
}

export default SignUp
