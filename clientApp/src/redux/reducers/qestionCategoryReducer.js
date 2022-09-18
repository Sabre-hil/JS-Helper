import {
  QESTION_CATEGORY,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case QESTION_CATEGORY:
      return payload;
    default:
      return state;
  }
};
