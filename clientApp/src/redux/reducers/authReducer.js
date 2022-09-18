/* eslint-disable default-param-last */

import {
  LOGOUT, SET_AUTH,
} from '../types/types';

export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGOUT:
      return null;

    case SET_AUTH:
      return payload;

    default:
      return state;
  }
};
