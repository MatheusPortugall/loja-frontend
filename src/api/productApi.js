import request from './request';

const requestListProducts = () => request.get('/produtos');

export { requestListProducts };