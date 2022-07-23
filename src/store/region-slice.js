import { createSlice } from '@reduxjs/toolkit';

const regionSlice = createSlice({
  name: 'region',
  initialState: {
    loading: false,
    createError: '',
    findError: '',
    region: [],
    regionLength: 0,
    isSubmit: false,
  },
  reducers: {
    createRegion(state, action) {
      state.loading = action.payload.loading;
      state.createError = action.payload.error;
      state.isSubmit = action.payload.isSubmit;
    },
    findRegion(state, action) {
      state.findError = action.payload.error;
      state.region = action.payload.region;
      state.regionLength = action.payload.regionLength;
    },
  },
});

export const regionAction = regionSlice.actions;
export default regionSlice;
