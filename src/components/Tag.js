import React from "react";
import styles from "../styles/Tag.module.scss";
import { MdCancel } from "react-icons/md";

function Tag({ name, setVariable, variable, selectedVariable }) {
  return (
    <div className={styles.tagContainer}>
      <h3>{name}</h3>
      <MdCancel
        size={14}
        color="#FFFFFF"
        onClick={() => {
          selectedVariable.isSelected = false;
          setVariable([...variable]);
        }}
      />
    </div>
  );
}

export default Tag;
