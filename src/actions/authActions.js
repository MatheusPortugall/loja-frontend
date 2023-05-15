import * as types from './types';

export const authUser = user => ({
    type: types.LOGIN,
    payload: user
});

export const loginSuccess = () => ({
    type: types.LOGIN_SUCCESS,
  });

export const loginError = error => ({
    type: types.ERROR,
    payload: error
})

export const logout = user => ({
    type: types.LOGOUT,
    payload: user
});