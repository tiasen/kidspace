import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({});
const middleware = [...getDefaultMiddleware()];

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middleware.push(require('redux-logger').createLogger());
}

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
