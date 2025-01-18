import { configureStore } from '@reduxjs/toolkit'
import authentication from './slice/authentication';
import notification from './slice/notification';

const store =  configureStore({
  reducer: {
    authentication,
    notification
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;