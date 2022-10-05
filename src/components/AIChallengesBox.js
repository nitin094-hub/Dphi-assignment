import React from "react";
import styles from "../styles/AIChallengesBox.module.scss";
import aiChallenge from "../assets/aiChallenge1.svg";

function AIChallengesBox({ aiChallengeImg, firstHeading, secondHeading }) {
  return (
    <div className={styles.aiChallengeBox}>
      <div className={styles.aiChallengeBoxImg}>
        <img src={aiChallengeImg} alt="" />
      </div>
      <h2>{firstHeading}</h2>
      <h4>{secondHeading}</h4>
    </div>
  );
}

export default AIChallengesBox;
