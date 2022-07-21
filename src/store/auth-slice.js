import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { loading: false, error: '', isSubmit: false, isLogout: false },
  reducers: {
    registerUser(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.isSubmit = action.payload.isSubmit;
      return state;
    },
    loginUser(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.isSubmit = action.payload.isSubmit;
      return state;
    },
    logoutUser(state) {
      state.isLogout = true;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice;
