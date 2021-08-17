import React from 'react'
import API from '../API/API'
import NoteApp from '../components/NoteApp/NoteApp'
import { useState,useEffect } from 'react'
import { Redirect } from 'react-router'
export default function NoteAuth() {
  const [ notePrivateRoute, setPrivate] = useState(<></>)
  useEffect(() => {
    API.get('/auth')
    .then((res)=>{
        if(res.status===200)
        {
            setPrivate(<NoteApp />)
        }
    })
    .catch((error)=>{
         if(error.response.data)
         {
             setPrivate(<Redirect to="/login"/>)
         }
    })
  }, [])
  
  return notePrivateRoute

       
}

