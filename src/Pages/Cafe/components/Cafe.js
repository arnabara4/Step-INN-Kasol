import React from "react";
import styles from "../styles/Cafe2.module.css";
import pic1 from "../assets/cafepic.webp";
import pic2 from "../assets/riversidecafe.webp";

const Cafe = () => {
  return (
    <div
      id="cafe"
      className={styles.container}>
      <span>- CAFE EXPERIENCE</span>
      <div className={styles.info}>
        <div className={styles.comp}>
          <div className={styles.txt}>
            <h1>KASOL CAFE</h1>
            <p>
              Kasol Cafe is a cozy spot in the heart of Kasol, known for its
              warm atmosphere and stunning mountain views. It offers a
              delightful menu of local and international cuisine, from freshly
              brewed coffee to hearty meals. With its laid-back vibe and
              friendly service, it’s the perfect place to relax and enjoy the
              beauty of the Parvati Valley.
            </p>
          </div>

          <img
            src={pic1}
            alt="pic"
          />
        </div>
        <div className={styles.comp}>
          <img
            src={pic2}
            alt="pic"
          />
          <div className={styles.txt}>
            <h1>RIVER SIDE CAFE</h1>
            <p>
              The Riverside Cafe in Kasol provides a unique dining experience by
              the flowing river, creating a serene setting. Guests can enjoy
              local delicacies and refreshing beverages while taking in
              breathtaking views. With its relaxed atmosphere, it’s an ideal
              spot for casual meals and leisurely hangouts amidst nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafe;
