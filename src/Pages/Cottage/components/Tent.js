import React, { useState } from "react";
import styles from "../styles/text2.module.css";
import Pic1 from "../assets/tentpic.jpeg";
import Interior2b from "./Interior2b";
import Exteriorb from "./Exteriorb";

const Text = () => {
  const [more, setMore] = useState("Less");
  return (
    <div className={styles.container}>
      <div className={styles.txt1wrapper}>
        <div className={styles.txt1}>
          <span>SWISS TENTS</span>
          <p>
            The Swiss tents at Stepinn Kasool offer a unique blend of comfort
            and adventure, set amidst the tranquil beauty of nature. Each tent
            is spacious, well-furnished, and designed to provide guests with a
            cozy yet rustic experience. Surrounded by scenic views, these tents
            allow you to enjoy the serenity of the outdoors while still enjoying
            modern amenities, making it a perfect getaway for nature enthusiasts
            and adventure seekers.
          </p>
          <div
            onClick={() => {
              more === "Less" ? setMore("More") : setMore("Less");
            }}>
            MORE INFO {more === "Less" ? "\u2193" : "\u2191"}
          </div>
        </div>
        <img
          src={Pic1}
          alt="pic"
        />
      </div>
      {more === "More" ? (
        <div>
          <Interior2b />
          <Exteriorb />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Text;
