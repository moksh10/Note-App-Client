import React from 'react'
import './login.css'
import Header from '../Header/Header'
import Footer2 from '../Footer/Footer2'
import axios from 'axios'
function Login() {
    const submit=()=>{
        axios.post("http://localhost:5000/login",{
            email:"mokshteng@gmail.com",
            password:"Jammu@123"
        }).then((res)=>console.log(res))
    }
    return (
        <>
        <Header />
        <div className="login-main-box">
            <div className="login-container" data-aos="fade-up" onSubmit={submit()}>
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
