import axios from "axios";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "./types";

const loginRequest = async (username, password) => {
  const authData = await (
    await axios.post("/api/v1/auth", {
      username,
      password,
    })
  ).data;

  return authData;
};

const logoutRequest = async () => {
  const authData = await (await axios.post("/api/v1/auth/logout")).data;
  return authData;
};

export const loginUser = (username, password) => {
  return async (dispatch) => {
    await dispatch({
      type: LOGIN_START,
    });

    try {
      const payload = await loginRequest(username, password);
      if (payload.message) {
        dispatch({
          type: LOGIN_FAILED,
          payload: payload.message,
        });
      } else {
        await dispatch({
          type: LOGIN_SUCCESS,
          payload: payload.token,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILED,
      });
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};
