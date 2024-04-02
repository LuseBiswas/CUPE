/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Home.module.css';
import Hero1 from '../../../public/assets/HeroImg/Final.png';
//For Components
import Button from '../../Components/Button/Button';

const Home = () => {
  return (
    <>
    <section className={styles.Home}>
        <div>
            <h6>Placement Insigths</h6>
            <h5>Get experience of every Interview</h5>
            <p>
            Navigate college interviews and technical rounds with confidence. With a user-friendly interface and comprehensive features, we provide students with access to a curated list of upcoming company interviews happening on campus. 
            </p>
            <Button LinkText={'Get Insight'} LinkTo={'/Experience'}/>
        </div>
        <div>
            <img src={Hero1} alt="" />
        </div>
    </section>
    </>
  )
}

export default Home
