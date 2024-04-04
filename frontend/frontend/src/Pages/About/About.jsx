import React from 'react';
import styles from './About.module.css'
import hero2 from '/assets/HeroImg/Final2.png';
import founderImg from '/assets/founderImg.jpeg';
import { Link } from 'react-router-dom';
//Importing Components
import Button from '../../Components/Button/Button';
//Importing Icons
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const About = () => {
  return (
    <>
    <section className={styles.About}>
      <div>
        <h6>What is CUPE ?</h6>
        <h5><span>C</span>handigarh <span>U</span>niversity<br/><span>P</span>lacement <span>E</span>xperience</h5>
        <p>
        CUPE gives you a every On Campus placement interview experience through your beloved Seniors. By learning from their mistakes, pioneer yourself more than before and Be confident.
        </p>

        <Button LinkText={"Read Now"} LinkTo={"/Experience"}/>
      </div>

      <div>
        <img src={hero2} alt="image" />
      </div>
    </section>

    <hr className={styles.solid} />
    <div className={styles.Founder}>
       <div>
        <h6>Message from Creator</h6>
        <p>The development of this website has required a lot of efforts and has costed me a whole semester of my college life. The constant improvement and efforts are even more tough to carry on with. If you are getting benefitted by this platform in some way then follow me on other Social Media handles. It encourges me alot. And thsnka to choose this website over anyother website. Website will get better day-by-day but its need time to do. ~&nbsp;<span>Ritesh Biswas</span></p>
        <div className={styles.SocialMedia}>
        <a href="https://www.instagram.com/luse_biswas_/" target='_blank'><FaInstagram className={styles.Insta}/></a>
        <a href="https://github.com/LuseBiswas" target='_blank'><FaGithub className={styles.Github}/></a>
        <a href="https://www.linkedin.com/in/ritesh-biswas-810640224/" target='_blank'><FaLinkedin className={styles.lninkdein}/></a>
        </div>
        
       </div>

       <div>
        <img src={founderImg} alt="image" />
      </div>
      </div>
      <hr className={styles.solid2} />

      <div className={styles.TechStack}>
       <div>
        <h6>Tech Stack</h6>
        <p>So when I choose this prject to start with I was fixed to used MERN Satck, so that I can polish my existing skills and face new challenges and problem. And it all comes true and through this project, I actually learned alot and still its going on.<br/>
        <li><span>Front-End Development</span>:- NextJS, CSS </li>
        <li><span>State Management</span>:- React</li>
        <li><span>Back-End Development</span>:- ExpressJS, NodeJS</li>
        <li><span>Database</span>:- MongoDB</li>
        <li><span>State Management</span>:- React</li>
        <li><span>React Hooks</span>:- UseState, UseEffect, Link etc </li>
        <li><span>Desgining</span>:- Figma</li></p>
        
       </div>

      </div>
    </>
  )
}

export default About
