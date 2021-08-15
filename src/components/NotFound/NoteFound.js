import React from 'react'
import './notfound.css'
import {ReactComponent as ErrorBackground} from './Notefound.svg'
function NoteFound() {
    return (
        <div className="not-found">
            <ErrorBackground className="not-found-bg" />
            </div>
    )
}

export default NoteFound
