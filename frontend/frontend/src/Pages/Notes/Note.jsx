import React from 'react'
import styles from '../Notes/Note.module.css';

const Note = ({id, text, editHandler, deleteHandler}) => {
  return (
    <>
    <div className={styles.note}>
        <div className='noteBody'>
            {text}
        </div>
        <div className={styles.noteFooter}>
        <button className={styles.noteSave} onClick={() => deleteHandler(id)} >Delete</button> &nbsp;
        <button className={styles.noteSave} onClick={() => editHandler(id, text)}>Edit</button>
        </div>

    </div>
    </>
  )
}

export default Note
