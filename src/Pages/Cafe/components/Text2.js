import React from "react";
import styles from "../styles/cafe.module.css";
import Carousel from "./Carousel/Carousel"

const Text2 = () => {
  return (
    <div className={styles.txt2Wrapper}>
      <div className={styles.txt2}>
        <span>CULINARY DELIGHTS</span>
      </div>
      <Carousel/>
    </div>
  );
};

export default Text2;
