import React from "react";
import styles from "../styles/exterior.module.css";
import pic from "../assets/extpic.webp";

const Exterior = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>-EXTERIOR</span>
        <p>
          A beautiful facade that blends with its surroundings, inviting comfort
          and tranquility.
        </p>
      </div>

      <div className={styles.info}>
        <p>
          The hotel's exterior combines modern architecture with natural beauty,
          featuring elegant stonework and large windows that blend into the lush
          surroundings. With well-kept gardens and spacious balconies, it offers
          a serene and inviting atmosphere, perfect for a peaceful retreat.
        </p>
        <img
          src={pic}
          alt="pic"
        />
      </div>
    </div>
  );
};

export default Exterior;
