import { createSlice } from '@reduxjs/toolkit';

const regionSlice = createSlice({
  name: 'region',
  initialState: { loading: true, error: '', region: {} },
  reducers: {
    createRegion(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
  },
});

export const regionAction = regionSlice.actions;
export default regionSlice;
