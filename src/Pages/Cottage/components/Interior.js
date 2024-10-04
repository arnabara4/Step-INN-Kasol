import React from "react";
import styles from "../styles/Interior.module.css";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.webp";
import pic4 from "../assets/pic4.webp";

const Interior = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>- 5 COTTAGES 11 CAMPS & VINTAGE TENTS</span>
      </div>
      <div className={styles.info}>
        <p>
          Kasol’s cottages, set amidst lush greenery and mountain views, offer a
          cozy, rustic escape into nature. With wooden interiors and large
          windows, they blend comfort with stunning views of the Himalayas.
          Perfect for relaxation or adventure, they provide a serene retreat for
          nature lovers and trekkers, making them the ideal getaway for peace or
          exploring nearby trails.
        </p>
        <div className={styles.img}>
          <img
            src={pic1}
            alt="pic"
          />
          <img
            src={pic2}
            alt="pic"
          />
          <img
            src={pic3}
            alt="pic"
          />
          <img
            src={pic4}
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Interior;
