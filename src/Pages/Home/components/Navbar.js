import styles from "../styles/header.module.css";
import logo from "../assets/Group.png";
import logo2 from "../assets/Screenshot_2024-10-01_at_9.15.44_PM-removebg-preview.png";

const Navbar = ({ setView }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.NavWrapper}>
      <img
        className={styles.Navlogo}
        src={logo}
        alt="pic"
        onClick={scrollToTop}
      />
      <img
        className={styles.Navlogo2}
        src={logo2}
        alt="pic"
        onClick={scrollToTop}
      />
      {/* <ul className={styles.Nav}> */}
      {/* <li>DESTINATIONS</li>
      <li>HOTELS</li>
      <li>DINING</li>
      <li>OFFERS</li>
      <li className={styles.membershipDD}>MEMBERSHIPS &#9662;</li>
      <li className={styles.moreDD}>MORE &#9662;</li>
    </ul>
    <div className={styles.navMisc}>
      <div className={styles.auth}>LOGIN/ JOIN</div> */}
      <button
        className={styles.navbtn}
        onClick={() => setView("yes")}>
        BOOK A STAY
      </button>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
