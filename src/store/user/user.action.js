/* eslint-disable import/prefer-default-export */
import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (user) => (
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

export const checkUserSession = () => (
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const googleSignInStart = () => (
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const emailSignInStart = (email, password) => (
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }));

export const signInSuccess = (user) => (
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCESS, user));

export const signInFailed = (error) => (
  createAction(USER_ACTION_TYPES.SIGN_IN_FAIED, error));

export const SignUpStart = (email, password, displayName) => (
  createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName }));

export const signUpSuccess = (user, addisionalDetails) => (
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, addisionalDetails }));

export const signUpFailed = (error) => (
  createAction(USER_ACTION_TYPES.SIGN_UP_FAIED, error));

export const signOutStart = () => (
  createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = () => (
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = (error) => (
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAIED, error));
