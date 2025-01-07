import { configureStore } from '@reduxjs/toolkit'
import authentication from './slice/authentication';

const store =  configureStore({
  reducer: {
    authentication
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;