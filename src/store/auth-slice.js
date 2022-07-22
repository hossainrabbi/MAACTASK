import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: '',
    isSubmit: false,
    user: null,
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
      state.user = null;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice;
