import { QESTIONS, QESTION_CATEGORY } from '../types/types';
import { login } from './authAction';

export const getQestions = (data) => ({ type: QESTIONS, payload: data });
export const getQestionCategory = (data) => ({ type: QESTION_CATEGORY, payload: data });

export const GET_QESTION_THUNK = () => async (dispatch) => {
  const response = await fetch('https://js-helper.herokuapp.com/questions');
  const json = await response.json();
  dispatch(getQestions(json));
};

export const GET_QESTION_CATEGORY_THUNK = (category) => async (dispatch) => {
  const response = await fetch(`https://js-helper.herokuapp.com/question/${category}`);
  const json = await response.json();
  dispatch(getQestionCategory(json));
};

export const SENDING_SCORE_THUNK = (score, id) => async (dispatch) => {
  const response = await fetch(`https://js-helper.herokuapp.com/stat/${score}/${id}`);
  const json = await response.json();
  dispatch(login(json));
};
