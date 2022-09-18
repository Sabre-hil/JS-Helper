/* eslint-disable default-param-last */

import {
  GET_COMS, CREATE_COM,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COMS:
      return payload;

    case CREATE_COM:
      return [...state, payload];

    default:
      return state;
  }
};
