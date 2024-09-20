import React from "react";
import styles from "../../styles/text.module.css";
import Pic1 from "../../assets/Pic1.webp";
const Text = () => {
  return (
    <div className={styles.txt1wrapper}>
      <div className={styles.txt1}>
        <span>- THE HEART OF HIMALAYAS</span>
        <p>
          Welcome to StepINN Kasool, your home away from home in the heart of
          the beautiful Parvati Valley. We offer a cozy, affordable stay with
          comfortable rooms and stunning views of the surrounding mountains.
          Whether you're a backpacker, trekker, or simply here to unwind, our
          warm hospitality and peaceful atmosphere provide the perfect retreat.
          Come relax, explore, and experience the natural beauty of Kasol with
          us!
        </p>
      </div>
      <img
        src={Pic1}
        alt="pic"
      />
    </div>
  );
};

export default Text;
