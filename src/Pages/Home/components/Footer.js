import React from "react";
import styles from "../styles/foooter.module.css";
import logo from "../assets/Group.png";
import logo2 from "../assets/Screenshot_2024-10-01_at_9.15.44_PM-removebg-preview.png";

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
            <div>
              <p>8448320407 / 9600036667</p>
            </div>
          </div>
          <div className={styles.comp}>
            <span className={styles.title}> CUSTOMER SUPPORT</span>
            <div>
              <p>gargk1275@gmail.com {"  "}</p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>QUICK LINKS</span>
          <ul>
            <li>Cottages</li>
            <li>Cafe</li>
            <li>Welness</li>
            <li>Gallery</li>
            <li>Sitemap</li>
            <li>About</li>
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
        <img
          className={styles.column}
          src={logo2}
          alt="pic"
        />
      </div>
      <p className={styles.misc}>POWERED BY MIK 2024</p>
    </div>
  );
};

export default Footer;
