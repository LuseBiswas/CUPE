/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
import Logo from 'C:/Users/DELL/Desktop/CUPE/frontend/frontend/public/assets/Logo.png';

const NavLink = [
    {
        LinkText:"Home",
        LinkTo:"/",
    },
    {
        LinkText:"About",
        LinkTo:"/",
    },
    {
        LinkText:"Experience",
        LinkTo:"/",
    },
]

const NavBar = () => {
  return (
    <>
    <nav className={styles.NavbarMain}>
        <Link to={'/'}>
            <img src={Logo} alt="Logo" />
        </Link>


        <div className={styles.NavLinks}>
            {
                NavLink.map((Item, index) =>(
                    <Link key={index} to={Item.LinkTo}>{Item.LinkText}</Link>
                ))
            }
        </div>
    </nav>
    </>
  )
}

export default NavBar
