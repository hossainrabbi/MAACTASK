import { createSlice } from '@reduxjs/toolkit';

const areaSlice = createSlice({
  name: 'area',
  initialState: {
    loading: false,
    error: '',
    area: [],
    areaLength: 0,
    isSubmit: false,
  },
  reducers: {
    createArea(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.isSubmit = action.payload.isSubmit;
    },
    findArea(state, action) {
      state.findError = action.payload.error;
      state.area = action.payload.area;
      state.areaLength = action.payload.areaLength;
      state.isSubmit = false;
    },
  },
});

export const areaAction = areaSlice.actions;
export default areaSlice;
