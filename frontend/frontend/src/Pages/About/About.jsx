import React from 'react';
import styles from './About.module.css'
import hero2 from '../../../public/assets/HeroImg/Final2.png';
//Importing Components
import Button from '../../Components/Button/Button';

const About = () => {
  return (
    <>
    <section className={styles.About}>
      <div>
        <h6>Stay Updated</h6>
        <h5>Perpare Everything, Be Confident</h5>
        <p>
        Dive deep into the technical round experiences shared by your peers, gaining invaluable insights and tips to excel in your own interviews.
        </p>

        <Button LinkText={"Read Now"} LinkTo={"/Experience"}/>
      </div>

      <div>
        <img src={hero2} alt="image" />
      </div>

    </section>
    </>
  )
}

export default About
