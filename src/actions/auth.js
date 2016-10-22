import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import * as types from './actionTypes';

// const url = "https://pure-crag-60488.herokuapp.com/api/auth";
const url = "http://localhost:3002/api";

export function login(data) {
  return dispatch => {
    return axios.post(`${url}/auth`, data).then(res => {
      const token = res.data.token;
      localStorage.setItem("jwtToken", token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    });
  };
}

export function signup(data) {
  return dispatch => {
    return axios.post(`${url}/users`, { user: data });
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
};

export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    user
  };
}
