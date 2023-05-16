import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './saga';
import userReducer from './reducers/userSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
  }, middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
