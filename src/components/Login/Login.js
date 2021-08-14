import React from 'react'
import './login.css'
import Header from '../Header/Header'
import Footer2 from '../Footer/Footer2'
function Login() {
    return (
        <>
        <Header />
        <div className="login-main-box">
            <div className="login-container" data-aos="fade-up">
                <h1>Here you can Login</h1>
                <p>Let's join us :)</p>
                <form className="login-form" data-aos="fade-up">
                    <label>Email</label><br />
                    <input type="text" /><br />
                    <label>Password </label><br />
                    <input type="password"  /><br />
                    <button className="login-submit">LOGIN</button>
                </form>
            </div>
            
        </div>
          <Footer2 />
        </>
    )
}

export default Login
