import React, { useState } from "react";
import { Row, Col } from "../../components/mod/FlexGrid";
import Button from "../../components/ui/Button";
import { DefaultInput } from "../../components/ui/Input";
import styles from "./Login.module.scss";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  return (
    <div className={styles.loginContainer}>
      <form action="POST">
        <Row>
          <Col>
            <DefaultInput
              inputOnChange={(email) => setState({ ...state, email })}
              placeholder="Email*"
              value={state.email}
            />
            <DefaultInput
              inputOnChange={(password) => setState({ ...state, password })}
              placeholder="Password*"
              password
              value={state.password}
            />
          </Col>
          <Button primary full>
            Log In
          </Button>
        </Row>
      </form>
    </div>
  );
};

export default Login;
