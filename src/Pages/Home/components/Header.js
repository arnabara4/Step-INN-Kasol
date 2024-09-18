import React from "react";
import styles from "../styles/header.module.css";
import Navbar from "./Navbar";
import NamaGal from "./NamaGal";
import Info from "./Info";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Navbar />
      <NamaGal />
      <Info/>
    </div>
  );
};

export default Header;
