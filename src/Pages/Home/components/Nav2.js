import React from "react";
import styles from "../styles/content.module.css";

const Nav2 = ({ setSec, sec }) => {
  console.log(setSec);
  return (
    <div className={styles.Nav2wrapper}>
      <ul>
        <li
          onClick={() => setSec("rooms")}
          className={sec === "rooms" ? styles.selected : styles.un}>
          ROOMS
        </li>
        <li
          onClick={() => setSec("overview")}
          className={sec === "overview" ? styles.selected : styles.un}>
          OVERVIEW
        </li>
        <li
          // onClick={() => setSec("offers")}
          className={sec === "offers" ? styles.selected : styles.un}>
          OFFERS
        </li>
        <li
          onClick={() => setSec("dining")}
          className={sec === "dining" ? styles.selected : styles.un}>
          DINING
        </li>
        <li
          // onClick={() => setSec("venues")}
          className={sec === "venues" ? styles.selected : styles.un}>
          VENUES
        </li>
        <li
          // onClick={() => setSec("wellness")}
          className={sec === "wellness" ? styles.selected : styles.un}>
          WELLNESS
        </li>
        <li
          // onClick={() => setSec("experience")}
          className={sec === "experience" ? styles.selected : styles.un}>
          EXPERIENCE
        </li>
        <li
          // onClick={() => setSec("gallery")}
          className={sec === "gallery" ? styles.selected : styles.un}>
          GALLERY
        </li>
        <li
          // onClick={() => setSec("attractions")}
          className={sec === "attractions" ? styles.selected : styles.un}>
          ATTRACTIONS
        </li>
      </ul>
    </div>
  );
};

export default Nav2;
