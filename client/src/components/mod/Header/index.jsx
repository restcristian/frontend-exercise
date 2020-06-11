import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "../FlexGrid";
import Button from "../../ui/Button";
import Logo from "../../../assets/HelloFreshLogo.svg";
import styles from "./Header.module.scss";
import * as routes from "../../../routes/constant";

const Header = ({ history }) => {
  const navigate = () => {
    history.push(routes.LOGIN_PAGE);
  };
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
            <Button onClick={navigate}>Log In</Button>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default withRouter(Header);
