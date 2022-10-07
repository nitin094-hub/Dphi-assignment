import React from "react";
import styles from "../styles/ChallengeBox.module.scss";

import { BsCheck2Circle } from "react-icons/bs";

function ChallengeBox({ name, image, status }) {
  return (
    <div className={styles.challengeContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt="" />
      </div>
      <div className={styles.contentContainer}>
        <div
          className={styles.tag}
          style={
            status === "Past"
              ? { background: "rgba(255, 60, 0, 0.170148)" }
              : { background: "rgba(242, 201, 76, 0.25)" }
          }
        >
          <p>{status}</p>
        </div>
        <h3 className={styles.contentHeading}>{name}</h3>
        <div className={styles.timerContainer}>
          <h4 className={styles.timerHeading}>Starts in</h4>
          <h2 className={styles.timer}>
            00 <span style={{ margin: "0 10px" }}>:</span> 15
            <span style={{ margin: "0 10px" }}>:</span> 00
          </h2>
          <h6 className={styles.timerUnits}>
            Days <span style={{ margin: "0 11px" }}></span> Hours
            <span style={{ margin: "0 11px" }}></span> Mins
          </h6>
        </div>
        <button className={styles.challengeButton}>
          <BsCheck2Circle size={23} color="white" />
          <h3>Participate Now</h3>
        </button>
      </div>
    </div>
  );
}

export default ChallengeBox;
