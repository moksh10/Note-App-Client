import React from 'react'
import './NoteApp.css'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faUser,faPlus} from '@fortawesome/free-solid-svg-icons' 
import API from '../../API/API'
import Alertbox from '../Alertbox/Alertbox'
import Note from './Note'
function NoteApp() {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const plusIcon = <FontAwesomeIcon icon={faPlus} />
    useEffect(() => {
       API.get('/noteapp',{ headers: { "Content-Type": "application/json" }})
        .then((res)=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error.response)
        })
    }, [])
    return (
        <>
        <div className="note-app">
            <div className="header1">
                All Notes
            </div>
            <div className="header2">
                <div>{plusIcon} Add new note</div>
                <div>{userIcon}</div>
            </div>
            <div className="sidebar">
                <div className="sidebar-search">
                    <input type="text" placeholder="Search all notes"/> <div>{searchIcon}</div> 
                </div>
            
            
            </div>
            <div className="note-main">
                <div className="note-main-title">
                    <input type="text" placeholder="Enter note title" />
                    <button className="save-btn" >Save</button>
                </div>
                <div className="note-main-body">
                <textarea type="text" placeholder="Enter text" />
                </div>
            </div>
        </div>
            
        </>
    )
}

export default NoteApp
