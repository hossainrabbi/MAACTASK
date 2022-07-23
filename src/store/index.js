import { configureStore } from '@reduxjs/toolkit';
import areaSlice from './area-slice';
import authSlice from './auth-slice';
import regionSlice from './region-slice';
import persistStore from 'redux-persist/es/persistStore';

const store = configureStore({
  reducer: {
    auth: authSlice,
    region: regionSlice.reducer,
    area: areaSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.__persistor = persistStore(store);

export default store;
