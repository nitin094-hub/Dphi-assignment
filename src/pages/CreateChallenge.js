import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/CreateChallenge.module.scss";

function CreateChallenge() {
  return (
    <div className={styles.createChallengeContainer}>
      <Navbar />
      <div className={styles.createChallengeHeading}>
        <h2>Challenge Details</h2>
      </div>
      <form className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="challengeName">Challenge Name</label>
          <input type="text" id="challengeName" name="challengeName" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="datetime">Start Date</label>
          <input type="datetime-local" id="datetime" name="datetime" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="datetime">End Date</label>
          <input type="datetime-local" id="datetime" name="datetime" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description"></textarea>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="description">Description</label>
          <input type="image" />
        </div>
      </form>
    </div>
  );
}

export default CreateChallenge;
