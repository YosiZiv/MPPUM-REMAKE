import { apiRequest } from "../actions/api";
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../actions/login";
import { setMessage } from "../actions/ui";
const userLogin = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === USER_LOGIN) {
    const URL = "public/login";
    console.log("function login user start work ", action.payload);
    dispatch(
      apiRequest(
        "POST",
        URL,
        action.payload,
        USER_LOGIN_SUCCESS,
        USER_LOGIN_FAIL
      )
    );
  }
};
const userLoginSuccess = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === USER_LOGIN_SUCCESS) {
    console.log(action.payload);

    // dispatch(redirectTo("login"));
  }
};
const userLoginFail = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === USER_LOGIN_FAIL) {
    console.log(action.payload);
    dispatch(setMessage(action.payload));
  }
};
export const loginMdl = [userLogin, userLoginSuccess, userLoginFail];