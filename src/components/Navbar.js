import React from "react";
import styles from "../styles/Navbar.module.scss";
import logo from "../assets/companyLogo.svg";

function Navbar() {
  return (
    <div className={styles.navBarcontainer}>
      <div className={styles.imageContainer}>
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
