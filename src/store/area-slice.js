import { createSlice } from '@reduxjs/toolkit';

const areaSlice = createSlice({
  name: 'area',
  initialState: { loading: false, error: '', area: [] },
  reducers: {
    createArea(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
  },
});

export const areaAction = areaSlice.actions;
export default areaSlice;
