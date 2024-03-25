import React, { useState } from 'react'
import styles from './AddYourExperience.module.css';
const AddYourExperience = () => {
    const [CompanyTitle, setCompanyTitle] = useState('');
    const [Reviewer, setReviewer] = useState('');
    const [CompanyImg_URL, setCompanyImg_URL] = useState('');
    const [PlacementExp, setPlacementExp] = useState('');
    const [CompanyCTC, setCompanyCTC] = useState('');
    const [PlacementYear, setPalcementYear] = useState('');
    
    const SaveExp = () =>{};

  return (
    <>
    <section className={styles.AddYourExperience_Main}>
        <div className={styles.AddYourExperience_Row}>
            <h6>Add your Experience</h6>

            <input type="text" placeholder='Company Name' value={CompanyTitle} onChange={(e)=> setCompanyTitle(e.target.value)} name='' id='' />
            
            <input type="text" placeholder='Reviewer Name' value={Reviewer} onChange={(e)=> setReviewer(e.target.value)} name='' id='' />
            
            <input type="text" placeholder='Company Img URL' value={CompanyImg_URL} onChange={(e)=> setCompanyImg_URL(e.target.value)} name='' id='' />

            <input type="text" placeholder='Placement Experience' value={PlacementExp} onChange={(e)=>setPlacementExp(e.target.value)} name='' id='' />

            <input type="text" placeholder='Company CTC' value={CompanyCTC} onChange={(e)=>setCompanyCTC(e.target.value)} name='' id='' />
            
            <input type="text" placeholder='Placement Year' value={PlacementYear} onChange={(e)=>setPalcementYear(e.target.value)} name='' id='' />

            <button className={styles.btn} onClick={SaveExp}>Save Experience</button>
        </div>
    </section>
    </>
  )
}

export default AddYourExperience
