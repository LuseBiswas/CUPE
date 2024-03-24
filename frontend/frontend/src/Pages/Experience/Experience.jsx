import React, { useEffect, useState } from 'react'
import styles from './Experience.module.css'
import axios from 'axios'

import testImage from '/Users/riteshbiswas/Development/Personal/CUPE/frontend/frontend/public/assets/logo_copy.png';


const Experience = () => {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{

    setLoading(true);
    axios.get('http://localhost:5555/cupes').then(res =>{
    setReviews(res.data.data)
    setLoading(false);
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
                <div className={styles.CupesBox}>
                   <img src={testImage} alt=""/>

                   <div className={styles.CupesBoxContent}>
                   <h6>{Item.CompnayTitle}</h6>
                  <h5>Author: <span>{Item.Reviewer}</span></h5>

                  <p>Placement Year: {Item.PlacementYear}</p>

                   </div>
                </div>
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
