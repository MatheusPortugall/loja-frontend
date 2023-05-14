import request from './request';

const requestLogin = user => request.post('/login', user);

export { requestLogin };
