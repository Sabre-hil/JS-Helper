/* eslint-disable no-unused-vars */
// import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import {
  LOGOUT, SET_AUTH,
} from '../types/types';
import { removeStorage } from './AsyncStorageFunc';

// const navigation = useNavigation();

export const login = (data) => ({ type: SET_AUTH, payload: data });
export const logout = () => ({ type: LOGOUT });

// export const REG_THUNK = (data) => async (dispatch) => {
//   // const cookie = { email: data.email, name: data.name };
//   fetch(
//     'https://js-helper.herokuapp.com/reg',
//     {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     },
//   ).then(async (res) => {
//     if (res.ok) {
//       dispatch(login(res.json()));
//       await AsyncStorage.setItem('session', res);
//       // navigation.navigate('General');
//     } else {
//       Alert.alert('Такой email или nickname уже занят');
//     }
//   });
//   // await AsyncStorage.setItem('session',JSON.stringify(cookie));
//   // dispatch(login(cookie));
// };

// export const LOGIN_THUNK = (data) => async (dispatch) => {
//   // const cookie = { email: data.email, name: data.name };
//   fetch(
//     'https://js-helper.herokuapp.com/login',
//     {
//       method: 'GET',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     },
//   ).then(async (res) => {
//     if (res.ok) {
//       await dispatch(login(res.json()));
//       await AsyncStorage.setItem('session', res);
//       // navigation.navigate('General');
//     } else {
//       Alert.alert('Пользователь не найден! Проверьте введенные данные');
//     }
//   });
//   // await AsyncStorage.setItem('session',JSON.stringify(cookie));
//   // dispatch(login(cookie));
// };
// export const SET_SESSION_THUNK = (data) => async (dispatch) => {
//   const cookie = { email: data.email, name: data.name };
//   await AsyncStorage.setItem('session', JSON.stringify(cookie));
//   dispatch(login(cookie));
// };

export const GET_SESSION_THUNK = () => async (dispatch) => {
  const cookie = await AsyncStorage.getItem('session');
  dispatch(login(JSON.parse(cookie)));
};

export const LOGOUT_SESSION_THUNK = () => async (dispatch) => {
  const cookie = await removeStorage('session');
  dispatch(logout());
};
