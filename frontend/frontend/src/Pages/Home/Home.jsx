/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Home.module.css';
import Hero1 from '/Users/riteshbiswas/Development/Personal/CUPE/frontend/frontend/public/assets/HeroImg/1.jpg'

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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe pariatur molestias repellendus necessitatibus modi nemo eos, eum, accusamus reprehenderit non iste earum vitae repellat tenetur quos! A fuga magni officiis?
            </p>
            <Button LinkText={'Get Insight'} LinkTo={'/'}/>
        </div>
        <div>
            <img src={Hero1} alt="" />
        </div>
    </section>
    </>
  )
}

export default Home
