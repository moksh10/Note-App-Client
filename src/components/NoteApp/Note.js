import React from 'react'
import './Note.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons' 
function Note() {
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />
    return (
        
        <div className="note-div">
        <div className="note-div-title">This is a heading</div>
        <div className="note-div-delete">{deleteIcon}</div>
         </div>
    )
}

export default Note
