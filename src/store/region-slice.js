import { createSlice } from '@reduxjs/toolkit';

const regionSlice = createSlice({
  name: 'region',
  initialState: {
    createLoading: false,
    createError: '',
    findLoading: false,
    findError: '',
    region: [],
    isSubmit: false,
  },
  reducers: {
    createRegion(state, action) {
      state.createLoading = action.payload.loading;
      state.createError = action.payload.error;
      state.isSubmit = action.payload.isSubmit;
    },
    findRegion(state, action) {
      state.findLoading = action.payload.loading;
      state.findError = action.payload.error;
      state.region = action.payload.region;
    },
  },
});

export const regionAction = regionSlice.actions;
export default regionSlice;
