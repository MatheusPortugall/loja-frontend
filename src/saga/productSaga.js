import { call, put, takeEvery } from 'redux-saga/effects';
import * as API from '../api/productApi';
import { listProducts, productError } from '../reducers/productSlice';
import * as types from '../actions/types';

export function* listAllProducts() {
  try {
    const response = yield call(API.requestListProducts);
    yield put(listProducts(response.data));
  } catch (error) {
    yield put(productError(error))
  }
}

function* productSaga() {
  yield takeEvery(types.LIST_PRODUCTS, listAllProducts);
}

export default productSaga;