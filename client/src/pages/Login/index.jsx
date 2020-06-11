import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "../../components/mod/FlexGrid";
import Button from "../../components/ui/Button";
import { DefaultInput } from "../../components/ui/Input";
import styles from "./Login.module.scss";
import * as regex from "../../utils/regex";
import * as routes from "../../routes/constant";
import { isEmpty } from "../../utils/utils";
import { loginUser } from "../../store/Auth/actions";

const Login = ({ history }) => {
  const initialState = {
    email: "",
    password: "",
    emailError: false,
    passwordError: false,
    errors: {},
  };
  const [state, setState] = useState(initialState);
  const { auth, errorMessage } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth) {
      history.push(routes.RECIPES_PAGE);
    }
  }, [history, auth]);

  const onSubmitHandler = (event) => {
    const { email, password } = state;
    const clonedState = { ...state };
    event.preventDefault();

    // Validates form before submitting
    let isValid = true;
    if (!regex.email().test(email)) {
      const currentErrors = {
        ...clonedState.errors,
        invalidEmail: { message: "Invalid email" },
      };
      clonedState.emailError = true;
      clonedState.errors = currentErrors;
      isValid = false;
    } else {
      delete clonedState.errors["invalidEmail"];
      clonedState.emailError = false;
    }
    if (isEmpty(email) || isEmpty(password)) {
      const currentErrors = {
        ...clonedState.errors,
        emptyFields: { message: "No empty fields" },
      };
      clonedState.emailError = isEmpty(email);
      clonedState.passwordError = isEmpty(password);
      clonedState.errors = currentErrors;
      isValid = false;
    } else {
      delete clonedState.errors["emptyFields"];
      clonedState.passwordError = false;
    }

    if (isValid) {
      dispatch(loginUser(state.email, state.password));
      resetState();
    } else {
      setState(clonedState);
    }
  };

  const resetState = () => {
    setState(initialState);
  };

  const renderErrorList = () => {
    const { errors } = state;
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0 || !isEmpty(errorMessage)) {
      return (
        <div className={styles.errorListContainer}>
          <span className={styles.errorListTitle}>
            Please fix the following errors:
          </span>
          <ul data-testid="login-error-list" className={styles.errorList}>
            {errorKeys.map((key) => (
              <li key={key}>{errors[key].message}</li>
            ))}
            {!isEmpty(errorMessage) && <li>{errorMessage}</li>}
          </ul>
        </div>
      );
    }

    return null;
  };
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.headerText}>Log in</h2>
      <form action="POST">
        <Row>
          <Col xs={12}>
            <DefaultInput
              testId="email"
              inputOnChange={(email) => setState({ ...state, email })}
              placeholder="Email*"
              value={state.email}
              hasError={state.emailError}
            />
          </Col>
          <Col xs={12}>
            <DefaultInput
              testId="password"
              inputOnChange={(password) => setState({ ...state, password })}
              placeholder="Password*"
              password
              value={state.password}
              hasError={state.passwordError}
            />
          </Col>
          <Col xs={12}>
            <Button testId="submit" primary full onClick={onSubmitHandler}>
              Log In
            </Button>
          </Col>
        </Row>
      </form>
      <Row>
        <Col>{renderErrorList()}</Col>
      </Row>
    </div>
  );
};

export default Login;
