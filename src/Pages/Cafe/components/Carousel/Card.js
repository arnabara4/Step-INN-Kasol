import React from "react";
import styles from "../../styles/Carousel.module.css";

const Card = ({ review, img, name, profession }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="pic"/>
    </div>
  ); 
};

export default Card;
