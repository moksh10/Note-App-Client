import React from 'react'
import API from '../API/API'
import Account from '../components/Account/Account'
import { useState,useEffect } from 'react'
import { Redirect } from 'react-router'
export default function AccountAuth() {
  const [ accountPrivateRoute, setPrivate] = useState(<></>)
  useEffect(() => {
    API.get('/auth')
    .then((res)=>{
        if(res.status===200)
        {
            setPrivate(<Account />)
        }
    })
    .catch((error)=>{
        setPrivate(<Redirect to="/login" />)
         
    })
  }, [])
  
  return accountPrivateRoute

       
}

