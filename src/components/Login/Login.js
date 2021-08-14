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
                <form className="login-form">
                    <label data-aos="fade-left">Email</label><br />
                    <input data-aos="fade-left" type="text" /><br />
                    <label data-aos="fade-right">Password </label><br />
                    <input type="password" data-aos="fade-right" /><br />
                    <button className="login-submit" data-aos="fade-up">LOGIN</button>
                </form>
            </div>
            
        </div>
          <Footer2 />
        </>
    )
}

export default Login
