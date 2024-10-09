import React from "react";
import styles from "../styles/Interior2b.module.css";
import intpic1 from "../assets/tentint1.jpeg";
import intpic2 from "../assets/tentint3.jpeg";
import intpic3 from "../assets/tentint2.jpeg";

const Interior2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>-INTERIOR</span>
        <p>
          {" "}
          A harmonious blend of style and comfort, creating a warm and inviting
          atmosphere.
        </p>
      </div>
      <div className={styles.Wrapper}>
        <div className={styles.comp}>
          <img
            src={intpic1}
            alt="pic"
          />
          <div className={styles.compText}>
            <span>Cozy Rooms</span>
            <p>A warm and modern space, perfect for relaxing.</p>
          </div>
        </div>
        <div className={styles.comp}>
          <img
            src={intpic2}
            alt="pic"
          />
          <div className={styles.compText}>
            <span>Comfortable Rooms</span>
            <p>Enjoy restful sleep with soft bedding and a calm setting.</p>
          </div>
        </div>
        <div className={styles.comp}>
          <img
            src={intpic3}
            alt="pic"
          />
          <div className={styles.compText}>
            <span>Inviting Décor </span>
            <p>
              Thoughtfully designed interiors that create a welcoming and cozy
              vibe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interior2;
