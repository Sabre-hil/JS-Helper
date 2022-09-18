import {
  CREATE_COM, CREATE_POST, GET_COMS, GET_POSTS,
} from '../types/types';
import { loading } from './loadAction';

export const createPOST = (data) => ({ type: CREATE_POST, payload: data });
export const getPOSTS = (data) => ({ type: GET_POSTS, payload: data });
export const getCOMS = (data) => ({ type: GET_COMS, payload: data });
export const createCOM = (data) => ({ type: CREATE_COM, payload: data });

export const GET_POST_THUNK = () => (dispatch) => {
  fetch('https://js-helper.herokuapp.com/posts')
    .then((res) => res.json())
    .then((data) => {
      dispatch(getPOSTS(data));
      dispatch(loading());
    });
};

export const CREATE_POST_THUNK = (data, id) => (dispatch) => {
  fetch(
    `https://js-helper.herokuapp.com/posts/${id}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  ).then((res) => {
    if (res.ok) {
      res.json();
    }
  })
    .then((res) => dispatch(createPOST(res)));
};

export const GET_COMS_THUNK = (id) => (dispatch) => {
  fetch(`https://js-helper.herokuapp.com/com/${id}`)
    .then((res) => res.json())
    .then((data) => dispatch(getCOMS(data)));
};

export const CREATE_COM_THUNK = (input, postid, userid) => (dispatch) => {
  fetch(
    `https://js-helper.herokuapp.com/com/${postid}/${userid}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(input),
    },
  ).then((res) => {
    if (res.ok) {
      res.json();
    }
  })
    .then((res) => dispatch(createCOM(res)));
};
