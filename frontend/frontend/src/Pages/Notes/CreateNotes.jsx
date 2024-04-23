import React from 'react'
import styles from '../Notes/CreateNotes.module.css';

const CreateNotes = ({inputText, setInputText, saveHandler}) => {
  //Implementing Charachter Left funtionality
  const char = 100;
  const charLimit = char - inputText.length;
  return (
    <>
    <div className={styles.note}>
      <textarea
        cols={10}
        rows={5}
        placeholder='Type...'
        //Now using the imported props
        value={inputText}
        onChange={(e)=> setInputText(e.target.value)}
        maxLength={100}
        >
        </textarea>
        
        <div className={styles.noteFooter}>
            <span className={styles.label}>{charLimit} Left</span>
            <button className={styles.noteSave} onClick={saveHandler}>Save</button>

        </div>

    </div>
    </>
  )
}

export default CreateNotes
