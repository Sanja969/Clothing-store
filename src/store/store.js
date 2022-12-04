/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['card'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);
// const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const composedEnhancers = composeEnhancer(middleWares);
export const store = configureStore({ reducer: persistedReducer, middleware: middleWares });

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
