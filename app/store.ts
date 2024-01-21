import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import homepageReducer from './slices/homeScreenSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    homepage: homepageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
