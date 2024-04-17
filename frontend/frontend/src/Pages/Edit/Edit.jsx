import React, { useEffect, useState } from 'react'
import styles from './Edit.module.css'

import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../Components/Spinner/Spinner';

const Edit = () => {

    const [CompanyTitle, setCompanyTitle] = useState('');
  const [Reviewer, setReviewer] = useState('');
  const [CompanyImg_URL, setCompanyImg_URL] = useState('');
  const [PlacementExp, setPlacementExp] = useState('');
  const [CompanyCTC, setCompanyCTC] = useState('');
  const [PlacementYear, setPalcementYear] = useState('');
  const {id} = useParams();

  const [Loading, setLoading] = useState(false);



  const Navigate = useNavigate()

  const { enqueueSnackbar } = useSnackbar();

  useEffect(()=>{

    setLoading(true);
    axios.get(`https://cupe-ritesh-biswas-projects.vercel.app/${id}`).then((res)=>{
        setCompanyTitle(res.data.CompanyTitle);
        setReviewer(res.data.Reviewer);
        setCompanyImg_URL(res.data.CompanyImg_URL);
        setPlacementExp(res.data.PlacementExp);
        setPalcementYear(res.data.PlacementYear);
        setCompanyCTC(res.data.CompanyCTC);
        setLoading(false);
    }).catch((error)=>{
        setLoading(false);
        console.log(error);
    })

  },[])

  const UpdateExp = ()=>{

    const data = {
        CompanyTitle, Reviewer, CompanyImg_URL, PlacementExp, CompanyCTC, PlacementYear
      }

      setLoading(true);
      axios.put(`https://cupe-ritesh-biswas-projects.vercel.app/${id}`,data).then(()=>{
        setLoading(false);
      enqueueSnackbar("Update Succesfully ", { variant: "success" })
      Navigate('/Experience')
      }).catch((error)=>{
        setLoading(false);
        console.log(error)
        enqueueSnackbar("Something went wrong ", { variant: "error" })
      })

  }

  return (
    <>

<section className={styles.AddYourExperience_Main}>
        <div className={styles.AddYourExperience_MainRow}>
          <h6>Update your Experience</h6>

          {Loading ? <Spinner/> : ('')}

          <input type="text" placeholder='Company Name' value={CompanyTitle} onChange={(e) => setCompanyTitle(e.target.value)} name='' id='' />

          <input type="text" placeholder='Reviewer Name' value={Reviewer} onChange={(e) => setReviewer(e.target.value)} name='' id='' />

          <input type="text" placeholder='Company Img URL' value={CompanyImg_URL} onChange={(e) => setCompanyImg_URL(e.target.value)} name='' id='' />

          <textarea type="text" placeholder='Placement Experience' value={PlacementExp} onChange={(e) => setPlacementExp(e.target.value)} name='' id='' />

          <input type="number" placeholder='Company CTC' value={CompanyCTC} onChange={(e) => setCompanyCTC(e.target.value)} name='' id='' />

          <input type="number" placeholder='Placement Year' value={PlacementYear} onChange={(e) => setPalcementYear(e.target.value)} name='' id='' />

          <button className={styles.btn} onClick={UpdateExp}>Update Experience</button>
        </div>
      </section>
    </>
  )
}

export default Edit
