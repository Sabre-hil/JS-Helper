/* eslint-disable default-param-last */

import {
  GET_POSTS, CREATE_POST,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return payload;

    case CREATE_POST:
      return [...state, payload];

    default:
      return state;
  }
};
