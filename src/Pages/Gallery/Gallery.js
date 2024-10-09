import React from "react";
import styles from "./styles/Gallery.module.css";
import imgs from "../Gallery/assets/gallery.json";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Gallery = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div
      id="gallery"
      className={styles.container}>
      <div className={styles.header}>
        <span>- GALLERY</span>
        <p>
          "Step into a visual journey through our stunning property. From scenic
          views to cozy interiors, our gallery showcases the beauty and
          tranquility of Stepinn Kasol. Each image captures the essence of your
          perfect getaway, offering a glimpse of the comfort, charm, and
          adventure that awaits."
        </p>
      </div>
      <div className={styles.content}>
        {imgs.gallery.map((img, index) => (
          <img
            src={img.imagePath}
            key={index}
            alt="pic"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
