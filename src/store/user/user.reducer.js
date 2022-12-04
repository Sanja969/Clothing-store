/* eslint-disable import/prefer-default-export */
import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TYPES.SIGN_OUT_FAIED:
    case USER_ACTION_TYPES.SIGN_UP_FAIED:
    case USER_ACTION_TYPES.SIGN_IN_FAIED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
