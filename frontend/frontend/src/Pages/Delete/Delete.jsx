import React, { useState } from 'react';
import styles from './Delete.module.css';
import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const Delete = () => {

    const [Loading,setLoading] = useState(false);
    const Navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();

    const DeleteExp = ()=>{

        setLoading(true);
        axios.delete(`https://cupe-ritesh-biswas-projects.vercel.app/cupes/${id}`).then(()=>{
            setLoading(false);
            enqueueSnackbar("Experience Deleted Successfully",{variant:'success'});
            Navigate("/")
        }).catch((error)=>{
            console.log(error);
            enqueueSnackbar("Something went wrong",{variant:'error'});

        })

    }
  return (
    <>
    <div className={styles.DeleteMain}>
        <h6>Are you sure you want to Delete</h6>
        <button className={styles.btn} onClick={DeleteExp}>Delete Now</button>

    </div>
    </>
  )
}

export default Delete
