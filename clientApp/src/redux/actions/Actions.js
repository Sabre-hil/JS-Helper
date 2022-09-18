import {
  SET_SIGNUP, SET_LOGIN, LOGOUT, SET_AUTH, QESTIONS,
} from '../types/types';

export const setSignup = (data) => ({ type: SET_SIGNUP, payload: data });
export const setLogin = (data) => ({ type: SET_LOGIN, payload: data });
export const logout = () => ({ type: LOGOUT });
export const CHECK_AUTH_THUNK = (data) => ({ type: SET_AUTH, payload: data });
