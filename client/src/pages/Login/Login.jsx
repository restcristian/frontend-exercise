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
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
  };
  return (
    <div className={styles.loginContainer}>
      <form action="POST">
        <Row>
          <Col xs={12}>
            <DefaultInput
              inputOnChange={(email) => setState({ ...state, email })}
              placeholder="Email*"
              value={state.email}
            />
          </Col>
          <Col xs={12}>
            <DefaultInput
              inputOnChange={(password) => setState({ ...state, password })}
              placeholder="Password*"
              password
              value={state.password}
            />
          </Col>

          <Col xs={12}>
            <Button primary full onClick={onSubmitHandler}>
              Log In
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Login;
