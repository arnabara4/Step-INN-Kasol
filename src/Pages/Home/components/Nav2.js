import React from 'react'
import styles from '../styles/content.module.css'

const Nav2 = () => {
  return (
    <div className={styles.Nav2wrapper}>
        <ul>
            <li className={styles.un}>ROOMS</li>
            <li className={styles.selected}>OVERVIEW</li>
            <li className={styles.un}>OFFERS</li>
            <li className={styles.un}>DINING</li>
            <li className={styles.un}>VENUES</li>
            <li className={styles.un}>WELLNESS</li>
            <li className={styles.un}>EXPERIENCE</li>
            <li className={styles.un}>GALLERY</li>
            <li className={styles.un}>ATTRACTIONS</li>
        </ul>
    </div>
  )
}

export default Nav2