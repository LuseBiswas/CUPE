import React, { useEffect, useState } from 'react';
import styles from '../Notes/Notes.module.css';
import CreateNotes from './CreateNotes';
import {v4 as uuid} from 'uuid';
import Note from './Note';


const Notes = () => {
    //we want to track the data that write in text area
    const [inputText, setInputText] = useState('');
    //we want to store the text by clicking save button
    const [notes, setNotes] = useState([]);
    //making for edit function
    const [editToggle, setEditToggle] = useState(null);

    //creating function for Edit functionality
    const editHandler = (id, text) =>{
        setEditToggle(id);
        setInputText(text);
        
    }

    //createing delete functionality
    const deleteHandler = (id) =>{
        const newNotes = notes.filter(n => n.id !== id)//filterring all the records
        setNotes(newNotes);
    }

    //createing a function to implement the save funtion
    //This function is used to store it in loclastorage
    const saveHandler = () =>{
        if(editToggle){
            setNotes(notes.map((note)=> (
                note.id == editToggle ? 
                {...note, text: inputText}
                : note
            )))
        }else {

            setNotes((prevNotes) =>[
                ...prevNotes, {
                    id: uuid(),
                    text: inputText
                }
            ])
        }
        setInputText('');//clearing the textarea
        setEditToggle(null);
        
    }
    
    useEffect(()=>{
        //fetching data from the localstorage
        const data = JSON.parse(localStorage.getItem("Notes"))
        if (Array.isArray(data) && data.length > 0) {
            // Load notes from local storage if available
            setNotes(data);
        } else {
            // Fallback: Load notes from component state if local storage is empty
            const initialNotes = JSON.parse(localStorage.getItem("InitialNotes"));
            if (Array.isArray(initialNotes) && initialNotes.length > 0) {
                setNotes(initialNotes);
            }
        }
    },[])

//Below UseEffect is used to store the data
    useEffect(()=>{
        window.localStorage.setItem("Notes", JSON.stringify(notes));
    },[notes])

    useEffect(() => {
        // Backup notes to component state
        window.localStorage.setItem("InitialNotes", JSON.stringify(notes));
    }, []);

  return (
    <>
    <div className={styles.MainNotes}>
        <div className={styles.heading}>
            <h6>Notes</h6>
            <h5>Write your future here</h5>
            <p>
            Save your Ideas, Queries and Future here. As our seniors says whenever you got any idead just write anywhere, adn this is that place. Go for it. 
            </p>

        </div>

        <div className={styles.notes}>
        {
            notes.map((note)=>(
                editToggle === note.id ? 
                <CreateNotes inputText={inputText} setInputText={setInputText} saveHandler={saveHandler}/>
                :
                <Note key={note.id} id={note.id} text={note.text} editHandler={editHandler} deleteHandler={deleteHandler}>

                </Note>
            ))
        }
        {
            editToggle === null ? <CreateNotes inputText={inputText} setInputText={setInputText} saveHandler={saveHandler}/>
            : <></>
        }
        </div>
        
      
    </div>
    </>
  )
}

export default Notes

