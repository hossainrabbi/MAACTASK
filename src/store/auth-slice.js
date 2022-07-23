import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: '',
    isSubmit: false,
    user: {},
  },
  reducers: {
    registerUser(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.isSubmit = action.payload.isSubmit;
      state.user = action.payload.user;
    },
    loginUser(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.isSubmit = action.payload.isSubmit;
      state.user = action.payload.user;
    },
    logoutUser(state) {
      state.user = {};
    },
  },
});

const persistConfig = {
  keyPrefix: 'fieldX-',
  key: 'login',
  storage,
};

export const authAction = authSlice.actions;

export default persistReducer(persistConfig, authSlice.reducer);
