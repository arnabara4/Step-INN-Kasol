import React from "react";
import styles from "./styles/experience.module.css";

const Experience = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>SHARE YOUR EXPERIENCE</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.name}>
          <div>
            <label htmlFor="text">First Name</label>
            <input
              type="email"
              className={styles.mail}
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="text">Last Name</label>
            <input
              type="email"
              className={styles.mail}
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className={styles.mail}
          placeholder="Enter your email"
        />
        <label htmlFor="text">Experience</label>
        <textarea
          className={styles.textarea}
          name="experience"
          rows="5"
          placeholder="Tell us about your experience..."
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Experience;
