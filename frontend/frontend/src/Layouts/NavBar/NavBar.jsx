/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/CUPEF.png';
import { CgMenu, CgClose } from 'react-icons/cg'

const NavLink = [
    {
        LinkText: "Home",
        LinkTo: "/",
    },
    {
        LinkText: "About",
        LinkTo: "/About",
    },
    {
        LinkText: "Experience",
        LinkTo: "/Experience",
    },
]



const NavBar = () => {

    const [openMenue, setOpenMenue] = useState(false)
    return (
        <>
            <nav className={styles.NavbarMain}>
                <Link to={'/'}>
                    <img src={Logo} alt="Logo" />
                </Link>

                <div className={styles.menue} onClick={() => {
                    setOpenMenue(!openMenue);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={openMenue ? styles.open : ""}>
                    <li>
                        {
                            NavLink.map((Item, index) => (
                                <Link key={index} to={Item.LinkTo}>{Item.LinkText}</Link>
                            ))
                        }
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default NavBar
