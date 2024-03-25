import React, { useEffect, useState } from 'react'
import styles from './Experience.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

import testImage from '/Users/riteshbiswas/Development/Personal/CUPE/frontend/frontend/public/assets/logo_copy.png';
import Spinner from '../../Components/Spinner/Spinner';


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
      loading ? (<Spinner/>) : (
        <div className={styles.CupesMain}>
          
          <Link to={"/AddYourExperience"} className={styles.AddyourExp}>Add your Experience</Link>


          <div className={styles.CupesMain_Row}>

            {
              reviews.map((Item)=>(
                <div className={styles.CupesBox}>
                   <img src={Item.CompanyImg_URL} alt={Item.CompnayTitle}/>

                   <div className={styles.CupesBoxContent}>
                   <h6>{Item.CompnayTitle}</h6>
                   <p>{Item.PlacementExp}</p>
                   <Link className={styles.Btn} to={"/"}>Reead More</Link>

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
