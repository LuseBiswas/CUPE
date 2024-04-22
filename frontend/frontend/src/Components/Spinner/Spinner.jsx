import React from 'react'
import styles from './Spinner.module.css';
const Spinner = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.loadingspinner}>
        <div className={styles.square1}></div>
        <div className={styles.square2}></div>
        <div className={styles.square3}></div>
        <div className={styles.square4}></div>
        <div className={styles.square5}></div>

      </div>

    </div>
    {/*<div className={styles.SpinnerParent}>
        <div className={styles.Spinner}></div>
  </div>*/}
    </>
  )
}

export default Spinner
