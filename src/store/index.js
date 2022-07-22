import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import regionSlice from './region-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    region: regionSlice.reducer,
  },
});

export default store;
