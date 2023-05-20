import * as types from './types';

export const listProducts = (products) => ({
    type: types.LIST_PRODUCTS,
    payload: products
});