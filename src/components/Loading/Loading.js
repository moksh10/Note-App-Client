import React from 'react'
import './loading.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner } from '@fortawesome/free-solid-svg-icons' 
function Loading() {
    
    const loadingIcon = <FontAwesomeIcon icon={faSpinner} spin/>
    return (
        <div className="loading">{loadingIcon}</div>
    )
}

export default Loading
