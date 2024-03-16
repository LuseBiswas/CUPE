/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Button.module.css';

import { Link } from 'react-router-dom';

const Button = ({LinkTo, LinkText}) => {
  return (
    <>
    <Link className={styles.Btn} to={LinkTo}>{LinkText}</Link>
    </>
  )
}

export default Button
