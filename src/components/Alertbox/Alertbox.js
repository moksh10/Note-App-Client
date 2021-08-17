import React from 'react'
import './alertbox.css'
export default function Alertbox(props) { 
    var className = "hide"
    var message = ""
    if(props.alert)
    {
    if(props.alert!=="")
    {
        message = props.alert.message
        className = props.alert.type==="error"?"alertbox-error":"alertbox-success"
    }
    }


    return (
        <div className={message!==""?className:"hide"}>{message}</div>
       
    )
}
