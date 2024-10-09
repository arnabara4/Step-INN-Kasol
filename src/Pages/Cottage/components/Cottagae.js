import React, { useState } from "react";
import styles from "../styles/text.module.css";
import Pic1 from "../assets/cottagepic.jpeg";
import Interior2 from "./Interior2";
import Exterior from "./Exterior";

const Text = () => {
  const [more, setMore] = useState("Less");
  return (
    <div className={styles.container}>
      <div className={styles.txt1wrapper}>
        <img
          src={Pic1}
          alt="pic"
        />
        <div className={styles.txt1}>
          <span>WOODEN COTTAGES</span>
          <p>
            The wooden cottages at Stepinn Kasool offer a cozy retreat nestled
            amidst the serene beauty of nature. Built with rustic charm, each
            cottage combines comfort and warmth, providing guests with a
            peaceful stay. Surrounded by picturesque views, the cottages create
            a perfect blend of traditional design and modern amenities, making
            it an ideal escape for nature lovers and travelers seeking
            tranquility.
          </p>
          <div
            onClick={() => {
              more === "Less" ? setMore("More") : setMore("Less");
            }}>
            MORE INFO {more === "Less" ? "\u2193" : "\u2191"}
          </div>
        </div>
      </div>
      {more === "More" ? (
        <div>
          <Interior2 />
          <Exterior />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Text;
