import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "../FlexGrid";
import Button from "../../ui/Button";
import Logo from "../../../assets/HelloFreshLogo.svg";
import styles from "./Header.module.scss";
import * as routes from "../../../routes/constant";
import { logoutUser } from "../../../store/Auth/actions";

const Header = ({ history }) => {
  const { auth } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = () => {
    history.push(routes.LOGIN_PAGE);
  };

  const logOut = () => {
    dispatch(logoutUser());
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Row customClass={styles.row}>
          <Col customClass={styles.logoCol} textAlign="left">
            <div className={styles.imgWrapper}>
              <Link to={auth ? routes.RECIPES_PAGE : routes.LOGIN_PAGE}>
                <img src={Logo} alt="HelloFresh" />
              </Link>
            </div>
          </Col>
          <Col customClass={styles.loginCol} textAlign="right">
            {auth ? (
              <Button onClick={logOut}>Log out</Button>
            ) : (
              <Button onClick={navigate}>Log In</Button>
            )}
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default withRouter(Header);
