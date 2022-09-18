/* eslint-disable default-param-last */

import {
  LOADING,
} from '../types/types';

export default (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOADING:
      return !state;


    default:
      return state;
  }
};
