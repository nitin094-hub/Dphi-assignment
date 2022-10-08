import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/CreateChallenge.module.scss";
import { IoMdCloudUpload } from "react-icons/io";

function CreateChallenge() {
  const [preview, setPreview] = useState(null);
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
          <label htmlFor="img">Image</label>
          <input
            type="file"
            name="img"
            accept="image/png, image/gif, image/jpeg"
            className={styles.fileInput}
            onChange={(e) => {
              setPreview(URL.createObjectURL(e.target.files[0]));
            }}
          />
          {!preview && (
            <div className={styles.fileInputContainer}>
              <h3>Upload</h3>
              <IoMdCloudUpload size={23} />
            </div>
          )}
          {preview && (
            <div className={styles.filePreview}>
              <img src={preview} alt="" />
            </div>
          )}
        </div>
        <button className={styles.createChallengeBtn}>
          <h3>Participate Now</h3>
        </button>
      </form>
    </div>
  );
}

export default CreateChallenge;
