import React from 'react'
import './NoteApp.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faUser,faPlus, faSpinner} from '@fortawesome/free-solid-svg-icons' 
import API from '../../API/API'
import { isInputValid, isHeadingValid,isContentValid } from '../../validators/validators'
import Alertbox from '../Alertbox/Alertbox'
import Note from './Note'
import { useHistory } from 'react-router'
export default function NoteApp() {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const plusIcon = <FontAwesomeIcon icon={faPlus} />
    const loadingIcon = <FontAwesomeIcon icon={faSpinner} spin color="blue" />
    const history = useHistory()
    const [notes, setNotes] = useState([])
    const [query,setQuery] = useState("") 
    const [heading,setHeading] = useState("")
    const [content,setContent] = useState("")
    const [isDisabled,setDisabled] = useState(true)
    const [selectedNote,setSelectedNote] = useState(null)
    const [loading,setLoading] = useState(false)
    const [alert,setAlert] = useState({type:"",message:""})

    const handleQuery = (event)=>{
        setQuery(event.target.value)
        setAlert({type:"",message:""})

    }
    const handleHeading = (event) =>{
        setHeading(event.target.value)
        if(heading==="")
        {
            
        setDisabled(true)
        return

        }
        if(!isHeadingValid(heading))
        {
            
            setAlert({type:"error",message:"Heading word limit exceeded"})
            setTimeout(()=>{setAlert({type:"",message:""})},2500)

            
        }
        
        if(heading!==""&&content!=="")
        {
            setDisabled(false)
            return
        }
        
        
        


    }
    const handleContent = (event) =>{
        setContent(event.target.value)
        if(content==="")
        {
            
        setDisabled(true)
        return

        }
        if(!isContentValid(content))
        {
            
            setAlert({type:"error",message:"Content word limit exceeded"})
            setTimeout(()=>{setAlert({type:"",message:""})},2500)
           
        }
        
        if(heading!==""&&content!=="")
        {
            setDisabled(false)
            return
        }

    }
    function selectNote (idx)  {
        if(idx===null)
        {
            
           setSelectedNote(null)
            return
        }
        setDisabled(true)
        setSelectedNote(idx)
        setHeading(notes[idx].heading)
        setContent(notes[idx].content)
        setAlert({type:"",message:""})

    }
    function addNewNote()
    {    
        setSelectedNote(null)
        setHeading("")
        setContent("")
        setDisabled(true)
        setAlert({type:"",message:""})
        document.querySelector(".note-main>.note-main-title>input").focus();

    }
    const saveNote = () =>{
        if(isDisabled)
        {
            setAlert({type:"error",message:"Heading and content can't be empty"})
            setTimeout(()=>{setAlert({type:"",message:""})},4000)
            return

        }
        if(!isHeadingValid(heading))
        {
            
            setAlert({type:"error",message:"Heading word limit exceeded"})
            setTimeout(()=>{setAlert({type:"",message:""})},4000)
            return
        }
        if(!isContentValid(content))
        {
            
            setAlert({type:"error",message:"Content word limit exceeded"})
            setTimeout(()=>{setAlert({type:"",message:""})},4000)
            return
        }
        setLoading(true)
        if(selectedNote===null)
        {
            // eslint-disable-next-line dot-location
            API.post('/noteapp',{heading:heading,content:content},{headers:{"Content-Type":"application/json"}}).
            then((res)=>{
                if(res.data.created)
                {
                    
                    setAlert({type:"success",message:`Note saved`})
                    setTimeout(()=>{setAlert({type:"",message:""})},2800)
                    getNotes()
                    setHeading("")
                   setContent("")
                   setSelectedNote(null)
                    setDisabled(true)
                    setLoading(false)
        
                }
            })
            .catch((error)=>{
                setAlert({type:"error",message:`${error.response?error.response.data.message:error}`})
                setLoading(false)
                setTimeout(()=>{setAlert({type:"",message:""})
            },5000)
                return
           

            })
        }
        else
        {
            // eslint-disable-next-line dot-location
            API.put('/noteapp',{idx:selectedNote,heading:heading,content:content},{headers:{"Content-Type":"application/json"}}).
            then((res)=>{
                if(res.data.updated)
                {
                    
                    setAlert({type:"success",message:`Note updated`})
                    setTimeout(()=>{setAlert({type:"",message:""})},2500)
                    getNotes()
                    setHeading("")
                    setContent("")
                    setSelectedNote(null)
                    setDisabled(true)
                    setLoading(false)
        
                }
            })
            .catch((error)=>{
                setAlert({type:"error",message:`${error.response?error.response.data.message:error}`})
                setLoading(false)
                setTimeout(()=>{setAlert({type:"",message:""})
            },5000)
                return
           

            })

        }
        

        
        

    }
    function deleteNote(idx){
         if(idx===null)
        {
            return
        }
        
         // eslint-disable-next-line dot-location
         setLoading(true)
        API.delete('/noteapp',{data:{idx:idx}},{headers:{"Content-Type":"application/json"}}).
            then((res)=>{
                if(res.data.deleted)
                {
                    
                    setAlert({type:"success",message:`Note deleted`})
                    setTimeout(()=>{setAlert({type:"",message:""})},2000)
                    getNotes()
                    setHeading("")
                   setContent("")
                   setSelectedNote(null)
                    setDisabled(true)
                    setLoading(false)
                }
            })
            .catch((error)=>{
                setLoading(false)
                setAlert({type:"error",message:`${error.response?error.response.data.message:error}`})
                setTimeout(()=>{setAlert({type:"",message:""})
            },5000)
                return
           

            })
        


    }
    function accountRedirect()
    {
        setAlert({type:"",message:""})
        history.push('/account')
        return
    }
    const noteElements = notes.map((value,index)=>{
        const title = JSON.stringify(value.heading)
         if(!isInputValid(query))
         {
           return <Note select={index===selectedNote} selectNote={selectNote} deleteNote={deleteNote} hide={false} value={value} index={index}/>
         }  
        return <Note select={index===selectedNote} selectNote={selectNote} deleteNote={deleteNote} hide={!title.includes(query)} value={value} index={index}/>
    })
    const getNotes= () => {
        setLoading(true)
        API.get('/noteapp',{ headers: { "Content-Type": "application/json" }})
        .then((res)=>{
            setNotes([...res.data.notes])
            setSelectedNote(null)
            setLoading(false)
            return 
           
        })
        .catch(error=>{
            
            setAlert({type:"error",message:`${error.response?error.response.data.message:error}`})
            setLoading(false)
            setTimeout(()=>{setAlert({type:"",message:""})
        },5000)
            return 
        })

    }
    useEffect(() => {
        getNotes()
    }, [])
    return (
        <>
        <Alertbox alert={alert}/> 
        {loading?<div className="loading">{loadingIcon}</div>:<></>}
        <div className="note-app">
            <div className="header1">
                All Notes
            </div>
            <div className="header2">
                <div onClick={addNewNote}>{plusIcon} Add new note</div>
                <div onClick={accountRedirect}>{userIcon}</div>
            </div>
            <div className="sidebar">
                <div className="sidebar-search">
                    <div>{searchIcon}</div>
                    <input type="text" placeholder="Search notes" value={query} onKeyUp={handleQuery} onpaste={handleQuery}  oncut={handleQuery} oninput={handleQuery}onChange={handleQuery}/> 
                     
                </div>
            {noteElements.length!==0?noteElements:<div>dsa</div>}
            </div>
            <div className="note-main">
                <div className="note-main-title">
                    <input type="text" placeholder="Enter note title" value={heading}  onKeyUp={handleHeading} onpaste={handleHeading}  oncut={handleHeading} oninput={handleHeading}onChange={handleHeading} />
                    <button className="save-btn" onClick={saveNote}disabled={isDisabled}>Save</button>
                </div>
                <div className="note-main-body">
                <textarea type="text" placeholder="Enter text" value={content} onKeyUp={handleContent} onpaste={handleContent}  oncut={handleContent} oninput={handleContent} onChange={handleContent}/>
                </div>
            </div>
        </div>
        </>
    )

}
