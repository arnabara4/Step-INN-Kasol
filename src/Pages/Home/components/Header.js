import React, { useState } from "react";
import styles from "../styles/header.module.css";
import NamaGal from "./NamaGal";
import Navbar from "./Navbar";
import BookBox from "./BookBox";

const Header = () => {
  const [view, setView] = useState("no");

  return (
    <div className={styles.headerWrapper}>
      <Navbar setView={setView} />
      {view === "yes" ? <BookBox setView={setView} /> : ""}
      <NamaGal />
    </div>
  );
};

export default Header;
