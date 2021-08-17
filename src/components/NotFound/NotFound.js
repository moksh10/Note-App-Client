import React from 'react'
import './notfound.css'
import {ReactComponent as ErrorBackground} from './Notfound.svg'
function NotFound() {
    return (
        <div className="not-found">
            <ErrorBackground className="not-found-bg" />
            </div>
    )
}

export default NotFound
