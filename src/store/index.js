import { configureStore } from '@reduxjs/toolkit';
import areaSlice from './area-slice';
import authSlice from './auth-slice';
import regionSlice from './region-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    region: regionSlice.reducer,
    area: areaSlice.reducer,
  },
});

export default store;
