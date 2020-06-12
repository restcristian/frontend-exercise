import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "../../components/mod/FlexGrid";
import styles from "./Error404.module.scss";

const Error404 = () => {
  return (
    <div className={styles.errorPageContainer}>
      <Row>
        <Col xs={12} textAlign="center">
          <div className={styles.errorPageWrapper}>
            <h2 className={styles.errorHeader}>404</h2>
            <Link to="/" className={styles.errorLink}>
              Go to the App
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Error404;
