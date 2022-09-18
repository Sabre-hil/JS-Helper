import {
  QESTIONS,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case QESTIONS:
      return payload;
    default:
      return state;
  }
};
