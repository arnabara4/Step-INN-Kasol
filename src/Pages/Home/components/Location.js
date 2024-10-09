import React from "react";
import styles from "../styles/Location.module.css";

const Location = () => {
  return (
    <div id="sitemap" className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.title}>- LOCATION & DIRECTIONS</div>
          <div className={styles.info}>
            <span>GETTING HERE</span>
            <p>V. P. O. Kasol Tehsil District KULLU Himachal Pradesh 175105</p>
            <a href="https://www.google.com/maps/place/Step-In,+Kasol/@32.0090377,77.3072871,17z/data=!3m1!4b1!4m9!3m8!1s0x39045d68fbb80669:0x61e72d3410979567!5m2!4m1!1i2!8m2!3d32.0090377!4d77.309862!16s%2Fg%2F11vt1ywjky?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D">
              OPEN GOOGLE MAPS
            </a>
            <div className={styles.service}>
              <p>AIRPOT</p> <em>+</em>
            </div>
            <div className={styles.service}>
              <p>LOCAL TRANSPORT</p> <em>+</em>
            </div>
          </div>
        </div>

        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.2242876952537!2d77.30728707568156!3d32.0090376739941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39045d68fbb80669%3A0x61e72d3410979567!2sStep-In%2C%20Kasol!5e0!3m2!1sen!2sin!4v1727065923134!5m2!1sen!2sin"
          title="StepINN KASOOL"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Location;
