/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Home.module.css';
import Marquee from 'react-fast-marquee';
//Importing Images
import img1 from '../../../public/assets/UpComingFeatures/Image1.png';
import img2 from '../../../public/assets/UpComingFeatures/Image2.png';
import img3 from '../../../public/assets/UpComingFeatures/Image3.png';
import img4 from '../../../public/assets/UpComingFeatures/Image4.png';
import img5 from '../../../public/assets/UpComingFeatures/Image5.png';
import Hero1 from '../../../public/assets/HeroImg/Final.png';
//For Components
import Button from '../../Components/Button/Button';

const Home = () => {
  document.title = 'Home - CUPE';
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
    <div className={styles.Features}>
          <h6>Upcoming Features</h6>
          <div>
            <Marquee delay={2} loop={20} speed={120} autoFill={true}>
              <div className={styles.imageWrapper}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />

                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                
              </div>
            </Marquee>
          </div>

        </div>
    </>
  )
}

export default Home
