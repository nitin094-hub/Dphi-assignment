import React from "react";
import styles from "../styles/Filter.module.scss";
import { BsChevronDown } from "react-icons/bs";

function Filter({ setFilterClicked, isFilterClicked }) {
  const status = [
    { name: "All", isSelected: false },
    { name: "Active", isSelected: false },
    { name: "Upcoming", isSelected: false },
    { name: "Past", isSelected: false },
    { name: "All", isSelected: false },
  ];
  const levels = [
    { name: "Easy", isSelected: false },
    { name: "Medium", isSelected: false },
    { name: "hard", isSelected: false },
  ];
  return (
    <>
      {!isFilterClicked && (
        <div
          className={styles.filterContainer}
          onClick={() => setFilterClicked(true)}
        >
          <h2>Filter</h2>
          <BsChevronDown />
        </div>
      )}
      {isFilterClicked && (
        <div
          className={styles.filterAfterClickContainer}
          onClick={() => setFilterClicked(false)}
        >
          <div className={styles.head}>
            <h2>Filter</h2>
            <BsChevronDown size={25} />
          </div>
          <div className={styles.line}></div>
          <div className={styles.statusContainer}>
            <h3>Status</h3>
            <div
              className={styles.statusSelectContainer}
              onClick={(e) => e.stopPropagation()}
            >
              {status.map((item, idx) => {
                return (
                  <div className={styles.statusSelect} key={`status${idx}`}>
                    <div
                      className={styles.selectionBox}
                      style={item.isSelected ? { background: "#317e31" } : {}}
                    ></div>
                    <h4>{item.name}</h4>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.line}></div>
          <div
            className={styles.statusContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Level</h3>
            <div className={styles.statusSelectContainer}>
              {levels.map((item, idx) => {
                return (
                  <div className={styles.statusSelect} key={`level${idx}`}>
                    <div
                      className={styles.selectionBox}
                      style={item.isSelected ? { background: "#317e31" } : {}}
                    ></div>
                    <h4>{item.name}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Filter;
