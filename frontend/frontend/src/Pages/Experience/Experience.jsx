import React, { useEffect, useState } from 'react'
import styles from './Experience.module.css'
import axios from 'axios'


const Experience = () => {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{

    setLoading(true);
    axios.get('http://localhost:5555/cupes').then(response =>{
    setReviews(response.data)
    }).catch((error)=>{
      console.log(error);
      setLoading(false);
    })
  },[])
  return (
    <>

    {
      loading ? ('Loading') : (
        <div className={styles.CupesMain}>
          <div className={styles.CupesMain_Row}>

            {
              reviews.map((Item)=>(
                <h6>{Item._id}</h6>
              ))
            }
          </div>
        </div>
      )
    }
    </>

    
  )
}

export default Experience
