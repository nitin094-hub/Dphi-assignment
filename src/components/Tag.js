import React from "react";
import styles from "../styles/Tag.module.scss";
import { MdCancel } from "react-icons/md";

function Tag() {
  return (
    <div className={styles.tagContainer}>
      <h3>Upcoming</h3>
      <MdCancel size={14} color="#FFFFFF" />
    </div>
  );
}

export default Tag;
