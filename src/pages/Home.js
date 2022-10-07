import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";
import rocket from "../assets/rocketLogo.svg";
import AIContentBox from "../components/AIContentBox";
import ai1 from "../assets/ai1.svg";
import ai2 from "../assets/ai2.svg";
import ai3 from "../assets/ai3.svg";
import AIChallengesBox from "../components/AIChallengesBox";
import aiChallenge1 from "../assets/aiChallenge1.svg";
import aiChallenge2 from "../assets/aiChallenge2.svg";
import aiChallenge3 from "../assets/aiChallenge3.svg";
import aiChallenge4 from "../assets/aiChallenge4.svg";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Tag from "../components/Tag";
import ChallengeBox from "../components/ChallengeBox";
import CoverBackground from "../components/CoverBackground";
import challengesArray from "../dataSets/challengesArray";

function Home() {
  const [isFilterClicked, setFilterClicked] = useState(false);
  return (
    <>
      {isFilterClicked && <CoverBackground />}
      <div className={styles.homeContainer}>
        <Navbar />
        <div className={styles.bannerContainer}>
          <div className={styles.bar}></div>
          <div className={styles.bannerContent}>
            <div className={styles.bannerLeftContainer}>
              <h1>Accelerate Innovation with Global AI Challenges</h1>
              <h2>
                AI Challenges at DPhi simulate real-world problems. It is a
                great place to put your AI/Data Science skills to test on
                diverse datasets allowing you to foster learning through
                competitions.
              </h2>
              <button>
                <h4>Create Challenge</h4>
              </button>
            </div>
            <div className={styles.bannerRightContainer}>
              <img src={rocket} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.aiDataContainer}>
          <div className={styles.aiDataContent}>
            <AIContentBox
              aiImage={ai1}
              firstText="100K+"
              secondText="AI model submissions"
            />
            <AIContentBox
              aiImage={ai3}
              firstText="50K+"
              secondText="Data Scientists"
            />
            <AIContentBox
              aiImage={ai2}
              firstText="100+"
              secondText="AI Challenges hosted"
            />
          </div>
        </div>
        <div className={styles.aiChallenge}>
          <h2 className={styles.heading}>
            Why Participate in{" "}
            <span style={{ color: "#44924C" }}>AI Challenges?</span>
          </h2>
          <div className={styles.aiChallenges}>
            <AIChallengesBox
              aiChallengeImg={aiChallenge1}
              firstHeading="Prove your skills"
              secondHeading="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
            />
            <AIChallengesBox
              aiChallengeImg={aiChallenge3}
              firstHeading="Learn from community"
              secondHeading="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
            />
            <AIChallengesBox
              aiChallengeImg={aiChallenge4}
              firstHeading="Challenge yourself"
              secondHeading="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
            />
            <AIChallengesBox
              aiChallengeImg={aiChallenge2}
              firstHeading="Earn recognition"
              secondHeading="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
            />
          </div>
        </div>
        <div className={styles.challengesContainer}>
          <h2 className={styles.heading}>Explore Challenges</h2>
          <div className={styles.challengeContent}>
            <SearchBar />
            <Filter
              setFilterClicked={setFilterClicked}
              isFilterClicked={isFilterClicked}
            />
          </div>
          <div className={styles.challengesTagContainer}>
            <Tag />
          </div>
          <div
            className={styles.allChallengesContainer}
            style={{ background: "#003145" }}
          >
            <div className={styles.allChallengesSubContainer}>
              {challengesArray.map((item, idx) => {
                return (
                  <ChallengeBox
                    name={item.name}
                    image={item.image}
                    status={item.status}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
