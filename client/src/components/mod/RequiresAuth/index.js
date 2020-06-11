import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import authReducer from "../../../store/Auth";
import * as routes from "../../../routes/constant";

const RequiresAuth = (WrappedComponent) => {
  const component = ({ auth, ...props }) => {
    return process.env.NODE_ENV === "test" || auth ? (
      <WrappedComponent {...props} />
    ) : (
      <Redirect to={routes.LOGIN_PAGE} />
    );
  };

  return connect(mapStateToProps, null)(component);
};

RequiresAuth.propTypes = {
  auth: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    auth: state[authReducer.NAME].auth,
  };
};

export default RequiresAuth;
