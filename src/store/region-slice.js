import { createSlice } from '@reduxjs/toolkit';

const regionSlice = createSlice({
  name: 'region',
  initialState: {
    loading: false,
    error: '',
    region: [],
    regionLength: 0,
    isSubmit: false,
  },
  reducers: {
    createRegion(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.isSubmit = action.payload.isSubmit;
    },
    findRegion(state, action) {
      state.error = action.payload.error;
      state.region = action.payload.region;
      state.regionLength = action.payload.regionLength;
      state.isSubmit = false;
    },
  },
});

export const regionAction = regionSlice.actions;
export default regionSlice;
