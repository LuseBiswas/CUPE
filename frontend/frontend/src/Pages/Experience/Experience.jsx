import React, { useEffect, useState } from 'react'
import styles from './Experience.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


import Spinner from '../../Components/Spinner/Spinner';


const Experience = () => {
  document.title = 'Experience - CUPE';

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [SearchinputValue, setSearchInputValue] = useState("");

  useEffect(() => {

    setLoading(true);
    axios.get('https://cupe-ritesh-biswas-projects.vercel.app/cupes').then(res => {
      setReviews(res.data.data)
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    })
  }, [])

  //Filter Experience

  const fillterData = reviews.filter((items) => {
    return items.CompanyTitle.toLowerCase().includes(SearchinputValue.toLowerCase());
  })
  return (
    <>

      {
        loading ? (<Spinner />) : (

          <div className={styles.CupesMain}>

            <div className={styles.mainSearchBox}>


              <div className={styles.searchContainer}>
                <input type="text" placeholder='Search Company' value={SearchinputValue} autoComplete='off' onChange={(e) => { setSearchInputValue(e.target.value) }} />
              </div>
            </div>

            <div className={styles.AddyourExp}>

            <Link to={"/AddYourExperience"} className={styles.AddyourExp2}>Add your Experience</Link>

            </div>




            <div className={styles.CupesMain_Row}>


              {
                fillterData.map((Item) => (
                  <div className={styles.CupesBox}>
                    <img src={Item.CompanyImg_URL} alt={Item.CompnayTitle} />

                    <div className={styles.CupesBoxContent}>
                      <h6>{Item.CompnayTitle}</h6>
                      <p>{Item.PlacementExp}</p>
                      <Link className={styles.Btn} to={`/Read/${Item._id}`}>Reead More</Link>

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
