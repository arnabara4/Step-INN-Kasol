import React from "react";
import styles from "../styles/Hotelinfo.module.css";
import Logo1 from "../assets/Logo1.png.png";
import Logo2 from "../assets/Logo2.png.png";
import Logo3 from "../assets/Logo3.png.png";
import Logo4 from "../assets/Logo4.png.png";
import Logo5 from "../assets/Logo5.png.png";
import Logo6 from "../assets/Logo6.png";
import Logo7 from "../assets/Logo7.svg.png";
import Logo8 from "../assets/Logo8.svg.png";

const HotelInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>- HOTEL INFORMATION</div>
      <div className={styles.info}>
        <div className={styles.column}>
          <div className={styles.comp}>
            <p className={styles.title2}>CHECK-IN CHECK-OUT </p>
            <div>
              <img
                src={Logo1}
                alt="pic"
              />
              <p>
                Check in from 2 pm <br />
                Checkout until noon
              </p>
            </div>
          </div>
          <div className={styles.comp}>
            <p className={styles.title2}>DINING</p>
            <div>
              <img
                src={Logo2}
                alt="pic"
              />
              <p>1 Restaurant and 1 Cafe</p>
            </div>
          </div>
          <div className={styles.comp}>
            <p className={styles.title2}>CURRENT TEMPERATURE</p>
            <div>
              <img
                src={Logo3}
                alt="pic"
              />
              <p>22°C</p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.comp}>
            <p className={styles.title2}>ROOMS</p>
            <div>
              <img
                src={Logo4}
                alt="pic"
              />
              <p>5 Cottages and 11 Camps</p>
            </div>
          </div>
          <div className={styles.comp}>
            <p className={styles.title2}>WELNESS</p>
            <div>
              <img
                src={Logo5}
                alt="pic"
              />
              <p>Healing of the soul with the best theraupist nature</p>
            </div>
          </div>
          <div className={styles.comp}>
            <p className={styles.title2}>NEWSLETTER</p>
            <div>
              <p>Subscribe to newsletter for daily updates</p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.comp}>
            <p className={styles.title2}>CONTACT</p>
            <div>
              <img
                src={Logo6}
                alt="pic"
              />
              <p>
                V. P. O. Kasol Tehsil District <br />
                KULLU Himachal Pradesh <br />
                175105
              </p>
            </div>
          </div>
          <div className={styles.comp}>
            <div>
              <img
                src={Logo7}
                alt="pic"
              />
              <p>gargk1275@gmail.com</p>
            </div>
          </div>
          <div className={styles.comp}>
            <div>
              <img
                src={Logo8}
                alt="pic"
              />
              <p>
                8960700009 <br />
                9600036667
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
