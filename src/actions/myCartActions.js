import * as types from './types';

export const addProductMyCart = (product) => ({
    type: types.ADD_PRODUCT_MY_CART,
    payload: product
});

export { addProductMyCart };