import React from "react";
import styles from "../styles/MoreAboutChallenge.module.scss";
import Navbar from "../components/Navbar";
import { AiFillClockCircle } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";

function MoreAboutChallenge() {
  return (
    <>
      <Navbar />
      <div className={styles.moreAboutChallengeContainer}>
        <div className={styles.head}>
          <div className={styles.startDateContainer}>
            <AiFillClockCircle size={23} />
            <h4>Starts on 17th Jun'22 09:00 PM (India Standard Time)</h4>
          </div>
          <h1 className={styles.heading}>
            Data Sprint 72 - Butterfly Identification
          </h1>
          <h3 className={styles.subHeading}>
            Identify the class to which each butterfly belongs to
          </h3>
          <div className={styles.difficultyContainer}>
            <BsBarChart size={23} color="003145" />
            <p>Easy</p>
          </div>
        </div>
        <div className={styles.overviewHead}>
          <button style={{ background: "#44924C" }}>
            <h3 style={{ color: "#ffff" }}>Edit</h3>
          </button>
          <button
            style={{ border: "2px solid #DC1414", background: "inherit" }}
          >
            <h3 style={{ color: "#DC1414" }}>Delete</h3>
          </button>
          <h3 className={styles.heading}>Overview</h3>
        </div>
        <div className={styles.about}>
          <h3>
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows
          </h3>
          <h3>
            An agency of the Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model.
          </h3>
          <h3>
            Your Task is to build an Image Classification Model using CNN that
            classifies to which class of weather each image belongs to.
          </h3>
        </div>
      </div>
    </>
  );
}

export default MoreAboutChallenge;
