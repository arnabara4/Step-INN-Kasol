import React from "react";
import styles from "../styles/header.module.css";
import separator from "../assets/Separator.png";
import gallery from "../assets/Img_margin.png";

const NamaGal = () => {
  return (
    <div className={styles.NameGal}>
      <img
        className={styles.Name}
        src={separator}
        alt="pic"
      />
      STEP INN, KASOL
      <div className={styles.Gallery}>
        <img
          src={gallery}
          alt="pic"
        />
        GALLERY
      </div>
    </div>
  );
};

export default NamaGal;
