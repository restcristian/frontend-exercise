import React from "react";
import { Row, Col } from "../FlexGrid";
import Logo from "../../../assets/HelloFreshLogo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Row customClass={styles.row}>
          <Col customClass={styles.logoCol} textAlign="left">
            <div className={styles.imgWrapper}>
              <a href="/">
                <img src={Logo} alt="HelloFresh" />
              </a>
            </div>
          </Col>
          <Col customClass={styles.loginCol} textAlign="right">
            <button>log in</button>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
