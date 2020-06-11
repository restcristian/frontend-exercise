import { LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from "./types";

const initialState = {
  auth: false,
  token: "",
  errorMessage: "",
  loading: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
        auth: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: "",
        auth: false,
      };
    default:
      return state;
  }
};

export default reducers;
