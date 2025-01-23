import { configureStore } from '@reduxjs/toolkit';
import authentication from './slice/authentication';
import notification from './slice/notification';

const VERSION_ID = 1;

const saveState = (state: {[key: string]: any}) => {
  try {
    const json = JSON.stringify(state);
    window.localStorage.setItem(`redux-state:version:${VERSION_ID}`, json);
  } catch (e) {
    console.error("Error persisting state", e);
  }
}

const loadState = () => {
  try {
    const json = window.localStorage.getItem(`redux-state:version:${VERSION_ID}`);
    const state = json ? JSON.parse(json) : null;
    if (!state) {
      return undefined;
    }
    return {
      authentication: state.authentication,
      notification: state.notification
    }
    // return json ? JSON.parse(json) : undefined;
  } catch (e) {
    console.error("Error loading state", e);
  }
}


const store = configureStore({
  reducer: {
    authentication: authentication.reducer,
    notification: notification.reducer
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;