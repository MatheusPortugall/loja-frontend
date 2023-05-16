import { call, put, takeEvery } from 'redux-saga/effects';
import * as API from '../api/authApi';
import { loginSuccess, loginError } from '../reducers/userSlice';
import * as types from '../actions/types';
import { login as setLogin } from '../services/authService';

export function* login({ payload }) {
  try {
    const response = yield call(API.requestLogin, payload);
    setLogin(response.data);
    yield put(loginSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(loginError(error))
  }
}

export function* logout(){

}

function* authSaga() {
  yield takeEvery(types.LOGIN, login);
  yield takeEvery(types.LOGOUT, logout);
}

export default authSaga;