import React from "react";
import styles from "../styles/AiContentBox.module.scss";

function AIContentBox({ aiImage, firstText, secondText }) {
  return (
    <div className={styles.aiContentBoxContainer}>
      <div className={styles.aiImage}>
        <img src={aiImage} alt="" />
      </div>
      <div className={styles.aiContentBoxText}>
        <h2>{firstText}</h2>
        <h4>{secondText}</h4>
      </div>
    </div>
  );
}

export default AIContentBox;
