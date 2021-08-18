import React from 'react'
import './Note.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons' 
function Note(props) {
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />
    const hide = props.hide
    const select=props.select
    return (
        
        // eslint-disable-next-line no-useless-concat
        <div className={"note-div"+`${hide?" note-div-hide":""}`+`${select?" note-div-select":""}`}>
        <div className="note-div-title" onClick={()=>{props.selectNote(props.index)}}>{props.value.heading}</div>
        <div className="note-div-delete" onClick={()=>{props.deleteNote(props.index)}}>{deleteIcon}</div>
         </div>
    )
}

export default Note
