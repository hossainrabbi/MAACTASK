import { createSlice } from '@reduxjs/toolkit';

const regionSlice = createSlice({
  name: 'region',
  initialState: { loading: false, error: '', region: [] },
  reducers: {
    createRegion(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
    findRegion(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.region = action.payload.region;
    },
  },
});

export const regionAction = regionSlice.actions;
export default regionSlice;
