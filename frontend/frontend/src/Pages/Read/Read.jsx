import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './Read.module.css'

//For Icons
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Read = () => {
    const [Exp,setExp] = useState([])
    const [Loading,setLoading] = useState(false);
    const { id } = useParams()

    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:5555/cupes/${id}`).then((res)=>{
            setExp(res.data)
            document.title = `${res.data.CompanyTitle} - CUPE`;
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        })
        

    },[])
  return (
    <div>
      
      <section className={styles.ReadExp}>
        <div className={styles.ReadExp_Row}>

            <div>
                <img src={Exp.CompanyImg_URL} alt={Exp.CompnayTitle} />
                <div className={styles.Icons}>
                    
                    <Link to={`/Edit/${Exp._id}`} >
                        <FaEdit color='green'/>
                    </Link>

                    <Link to={`/Delete/${Exp._id}`} >
                        <MdDelete color='red'/>
                    </Link>
                </div>
            </div>

            <div className={styles.ReadExp_BoxContent}>
                <h4>Posted by: <span>{Exp.Reviewer}</span></h4>
                <h6>{Exp.CompanyTitle}</h6>
                <h3>Placement Year: <span>{Exp.PlacementYear}</span></h3>
                <h5>Company CTC: <span>{Exp.CompanyCTC}</span>LPA</h5>
                
                <p>
                    {Exp.PlacementExp}
                </p>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Read
