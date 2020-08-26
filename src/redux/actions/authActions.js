import Axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
} from "../actions/types";
import { returnErrors } from "./errorActions";
const serverUrl = " http://localhost:4500/api";

export const registerUser = (data) => async (dispatch) => {
  try {
    console.log("In auth actions");
    dispatch({
      type: USER_LOADING,
    });
    console.log("body");
    const res = await Axios.post(`${serverUrl}/users/signup`, data);
    console.log("Signup successful");
    dispatch({
      type: USER_LOADED,
      payload: { user: res.data.newUser, status: res.status },
    });
  } catch (err) {
    console.log(err);
    dispatch(
      returnErrors(
        err.response.data.message,
        err.response.status,
        "REGISTER_FAIL"
      )
    );
    dispatch({ type: REGISTER_FAIL });
  }
};
export const loginUser = (user) => async (dispatch) => {
  try {
    console.log("Inside login action");
    //console.log(user);
    dispatch({
      type: USER_LOADING,
    });
    const res = await Axios.post(`${serverUrl}/users/signin`, user);
    console.log(res.data.data.user);
    const token = res.data.data.token;
    localStorage.setItem("token", token);
    const x = localStorage.getItem("token");
    console.log(x);
    dispatch({
      type: USER_LOADED,
      payload: { user: res.data.data.user, status: res.status },
    });
  } catch (err) {
    dispatch(
      returnErrors(
        err.response.data.message,
        err.response.status,
        "REGISTER_FAIL"
      )
    );
    dispatch({ type: REGISTER_FAIL });
  }
};
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};
