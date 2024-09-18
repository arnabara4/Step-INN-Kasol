import React from "react";
import styles from "../styles/header.module.css";
import logo from "../assets/Group.png";

const Navbar = () => {
  return (
    <div className={styles.NavWrapper}>
      <img
        className={styles.Navlogo}
        src={logo}
        alt="pic"
      />
      <ul className={styles.Nav}>
        <li>DESTINATIONS</li>
        <li>HOTELS</li>
        <li>DINING</li>
        <li>OFFERS</li>
        <li className={styles.membershipDD}>MEMBERSHIPS &#9662;</li>
        <li className={styles.moreDD}>MORE &#9662;</li>
      </ul>
      <div className={styles.navMisc}>
        <div className={styles.auth}>LOGIN/ JOIN</div>
        <button className={styles.navbtn}>BOOK A STAY</button>
      </div>
    </div>
  );
};

export default Navbar;
