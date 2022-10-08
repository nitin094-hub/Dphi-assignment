import React, { useState } from "react";
import styles from "../styles/Filter.module.scss";
import { BsChevronDown } from "react-icons/bs";

function Filter({
  setFilterClicked,
  isFilterClicked,
  status,
  setStatus,
  levels,
  setLevels,
}) {
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
                      onClick={() => {
                        if (item.name === "All") {
                          status.map((item) => {
                            item.isSelected = !item.isSelected;
                          });
                        } else {
                          item.isSelected = !item.isSelected;
                        }
                        setStatus([...status]);
                      }}
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
                      onClick={() => {
                        item.isSelected = !item.isSelected;
                        setLevels([...levels]);
                      }}
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
