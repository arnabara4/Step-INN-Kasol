import React from "react";
import styles from "../../styles/text.module.css";
import Carousel from "../Carousel/Carousel"

const Text2 = () => {
  return (
    <div className={styles.txt2Wrapper}>
      <div className={styles.txt2}>
        <span>- HIGHLIGHTS</span>
        <p>
          Cozy rooms, stunning mountain views, warm hospitality, and a perfect
          base to explore Parvati Valley. Ideal for budget travelers and nature
          lovers.
        </p>
      </div>
      <Carousel/>
    </div>
  );
};

export default Text2;
