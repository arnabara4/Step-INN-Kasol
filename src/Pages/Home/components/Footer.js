import React from "react";
import styles from "../styles/foooter.module.css";
import logo from "../assets/Group.png";
const Footer = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src={logo}
        alt="pic"
      />
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <div className={styles.compform}>
            <span className={styles.title}>SUBSCRIBE FOR LATEST UPDATES</span>
            <form>
              {" "}
              <input
                type="text"
                placeholder="Enter your email Address"
              />
              <button>SUBSCRIBE</button>
            </form>
          </div>
          <div className={styles.comp}>
            <span className={styles.title}>FOR BOOKING CONTACT</span>
            <div><p>8960700009 / 9600036667</p> <em>stepinnkasol@gmail.com</em></div>
          </div>
          <div className={styles.comp}>
            <span className={styles.title}> CUSTOMER SUPPORT
            </span>
            <div><p>stepinn.support@gmail.com</p> <em>stepinnkasol@gmail.com</em></div>
          </div>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>QUICK LINKS</span>
          <ul>
            <li>HOTELS</li>
            <li>COTTAGES</li>
            <li>CAFE</li>
            <li>WELLNESS</li>
            <li>GALLERY</li>
            <li>SITEMAP</li>
            <li>OFFERS</li>
            <li>ABOUT</li>
          </ul>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>CONNECT WITH US</span>
          <div className={styles.links}>
            <a href="https://www.instagram.com/stepinnkasol/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/people/Step-inn-kasol/61555524963288/?sfnsn=wiwspwa&mibextid=RUbZ1f">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
      <p className={styles.misc}>POWERED BY MIK 2024</p>
    </div>
  );
};

export default Footer;
