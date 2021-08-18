import React from 'react'
import Header from '../Header/Header'
import Footer2 from '../Footer/Footer2'
import Alertbox from '../Alertbox/Alertbox'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router'
import API from '../../API/API'
import { isPasswordValid,confirmPassword } from '../../validators/validators'
function Account() {
    const history = useHistory()
    const [userInfo,setUserInfo] = useState({name:"",email:""})
    const [passwords,setPasswords] = useState({password:"",confirmPassword:""}) 
    const [isDisabled,setDisabled] = useState(true)
    const [alert,setAlert] = useState({type:"",message:""})
    const handleChange=(event)=>{ 

        setPasswords({...passwords, [event.target.name] :event.target.value})
        if(isPasswordValid(passwords.password)&&confirmPassword(passwords.password,passwords.confirmPassword))
          {
              setDisabled(false)
              return
          }
          setDisabled(true)
  
      }
      const updatePassword=()=>{
        API.put('/account',{newPassword:passwords.password},{ headers: { "Content-Type": "application/json" }})
        .then((res)=>{
            if(res.data.updated)
            {
                
            setAlert({type:"success",message:`Password updated`})
            setTimeout(()=>{setAlert({type:"",message:""})},3000)
            res=null
            return

            }
           
        })
        .catch(error=>{
            
            setAlert({type:"error",message:`${error.response?error.response.data.message:error}`})
            setTimeout(()=>{setAlert({type:"",message:""})
        },4000)
            return 
        })

          

      }
      const logoutUser = () =>{
        API.post('/account/logout',{ headers: { "Content-Type": "application/json" }})
        .then((res)=>{
            if(res.data.loggedOut)
            {
            
            res=null
            history.push('/login')
            return

            }
           
        })
        .catch(error=>{
            
            setAlert({type:"error",message:`${error.response?error.response.data.message:error}`})
            setTimeout(()=>{setAlert({type:"",message:""})
        },4000)
            return 
        })


      }
      useEffect(()=>{
        API.get('/account',{ headers: { "Content-Type": "application/json" }})
        .then((res)=>{
            setUserInfo(res.data)
            return 
           
        })
        .catch(error=>{
            
            setAlert({type:"error",message:`${error.response?error.response.data.message:error}`})
            setTimeout(()=>{setAlert({type:"",message:""})
        },4000)
            return 
        })

      },[])
  
    return (
        <>
        <Header logoutUser={logoutUser}/>
        <Alertbox alert={alert}/>
            <div className="register-main-box">
            <div className="register-container" data-aos="fade-up">
            <h1>Edit your info</h1>
                <div className="register-form" data-aos="fade-up">
                    <div>
                    <label>Username</label><br />
                    <input type="text" value={userInfo.name} style={{"background":"transparent"}} disabled={true}/>
                    </div>
                    <div>
                    <label>Email</label><br />
                    <input type="text" value={userInfo.email}  disabled style={{"background":"transparent"}}/><br />
                    </div>
                    <div><label>New Password </label><br />
                    <input type="password" name="password" value={passwords.password} placeholder="minimum 8 characters" onKeyUp={handleChange} onpaste={handleChange}  oncut={handleChange} oninput={handleChange} onChange={handleChange}/><br /></div>
                    <div>
                    <label>Confirm Password </label><br />
                    <input type="password" name="confirmPassword" value={passwords.confirmPassword} placeholder="minimum 8 characters" onKeyUp={handleChange} onpaste={handleChange}  oncut={handleChange} oninput={handleChange} onChange={handleChange}/><br />
                    </div>
                    <button className="register-submit" disabled={isDisabled} onClick={updatePassword}>UPDATE</button>
                </div>
          </div>
          </div>
        <Footer2 />
        
            
        </>
    )
}

export default Account
