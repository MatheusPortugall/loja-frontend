import { call, put, takeLatest } from 'redux-saga/effects';
import * as API from '../api/authApi';
import * as actions from '../actions/authActions';
import * as types from '../actions/types';
import { login as setLogin } from '../services/authService';

export function* login({ payload }) {
  try {
    const response = yield call(API.requestLogin, payload);
    console.log("TOKEN: ", response.data);
    setLogin(response.data);
    yield put(actions.loginSuccess())
  } catch (error) {
    console.log(error);
    yield put(actions.loginError(error))
  }
}

export function* logout(){

}

function* authSaga() {
  yield takeLatest(types.LOGIN, login);
  yield takeLatest(types.LOGOUT, logout);
}

export default authSaga;