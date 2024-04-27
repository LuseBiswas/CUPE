import React from 'react';
import styles from '../Footer/Footer.module.css';
import { Link } from 'react-router-dom';

import git from '../../../public/assets/IconPng/github.png';
import linkdein from '../../../public/assets/IconPng/linkedin.png';
import instagram from '../../../public/assets/IconPng/instagram.png';
const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
        <div className={styles.sbFooter}>
            <div className={styles.se}>

            </div>
            <div className={`${styles.sbFooterLinks} ${styles.sectionPadding}`}>
                <div className={styles.sbFooterLinksDiv}>
                    <h4>Quick Links</h4>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/About'}>About</Link>
                    <Link to={'/Experience'}>Experience</Link>
                    <Link to={'/Notes'}>Notes</Link>
                    <Link to={'/DSAQ'}>PYQs</Link>
                </div>
                
                <div className={styles.sbFooterLinksDiv}>
                    <h4>In Collaboration</h4>
                    <a href="https://www.cuchd.in/"> Chandigarh University</a>
                </div>
                

                <div className={styles.sbFooterLinksDiv}>
                    <h4>Let's Connect</h4>
                    <div className={styles.socialmedia}>

                    <p><a href="https://github.com/LuseBiswas" target='_blank'><img src={git} alt="" /></a></p>
                    <p><a href="https://www.linkedin.com/in/ritesh-biswas-810640224/" target='_blank'><img src={linkdein} alt="" /></a></p>
                    <p><a href="https://www.instagram.com/luse_biswas_/" target='_blank'><img src={instagram} alt="" /></a></p>

                    </div>
                </div>
            </div>
        </div>

        <hr></hr>

        <div className={styles.sbFooterBelow}>
            <div className={styles.sbFooterCopyright}>
                <p>
                    @{new Date().getFullYear()} Ritesh Biswas. All right reserved.
                </p>
            </div>
            <div className={styles.sbFooterBelowLinks}>
                <a href="#"><div><p>Terms & Conditions</p></div></a>
                <a href="#"><div><p>Privacy</p></div></a>
                <a href="#"><div><p>Security</p></div></a>
                <a href="#"><div><p>Cookies and Declaration</p></div></a>

            </div>

        </div>

    </div>
    </>
  )
}

export default Footer
