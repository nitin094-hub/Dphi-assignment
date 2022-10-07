import React from "react";
import styles from "../styles/SearchBar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchIcon}>
        <AiOutlineSearch color="black" size={25} />
      </div>
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
