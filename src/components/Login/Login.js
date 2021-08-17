import React from 'react'
import './login.css'
import Header from '../Header/Header'
import Footer2 from '../Footer/Footer2'
import { useState } from 'react'
import API from '../../API/API'
import { isEmail } from '../../validators/validators'
import Alertbox from '../Alertbox/Alertbox'
import { useHistory } from 'react-router'
function Login() {
    const history = useHistory()
    const [userInfo,setUserInfo] = useState({email:"",password:""})
    const [isDisabled,setDisabled] = useState(true) 
    const [alert,setAlert] = useState({type:"",message:""})
    const handleChange = (event) =>{ 

        setUserInfo({...userInfo, [event.target.name] :event.target.value})
        if(isEmail(userInfo.email))
          {
              setDisabled(false)
              return
          }
          setDisabled(true)
  
  
      }
      const handleSubmit = () =>{
          API.post('/login',userInfo,{ headers: { "Content-Type": "application/json" } })
          .then((res)=>{
              history.push('/noteapp')
              return
          })
          .catch((error)=>{
            setAlert({type:"error",message:`${error.response.data.message}`})
            setTimeout(()=>setAlert({type:"",message:``}),10000)
            return
          
            })
      }
    



      
    
    return (
        <>
        <Header />
        <Alertbox alert={alert}/>
        <div className="login-main-box">
            <div className="login-container" data-aos="fade-up">
                <h1>Here you can Login</h1>
                <p>Let's join us :)</p>
                <div className="login-form" data-aos="fade-up">
                    <label>Email</label><br />
                    <input type="text" name="email" placeholder="Enter email" value={userInfo.email} onKeyUp={handleChange} onpaste={handleChange}  oncut={handleChange} oninput={handleChange}  onChange={handleChange}/><br />
                    <label>Password </label><br />
                    <input type="password"  name="password" placeholder="Enter password" value={userInfo.password} onKeyUp={handleChange} onpaste={handleChange}  oncut={handleChange} oninput={handleChange}  onChange={handleChange}/><br />
                    <button className="login-submit" disabled={isDisabled} onClick={handleSubmit}> LOGIN</button>
                </div>
            </div>
            
        </div>
          <Footer2 />
        </>
    )
}

export default Login
