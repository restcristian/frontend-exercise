import axios from "axios";
import { LOGIN_START } from "./types";

const login = (username, password) => {
  return async (dispatch) => {
    await dispatch({
      type: LOGIN_START,
    });

    try {
    } catch (error) {}
  };
};
