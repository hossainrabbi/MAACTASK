import { createSlice } from '@reduxjs/toolkit';

const areaSlice = createSlice({
  name: 'area',
  initialState: {
    createLoading: false,
    createError: '',
    findLoading: false,
    findError: '',
    area: [],
    isSubmit: false,
  },
  reducers: {
    createArea(state, action) {
      state.createLoading = action.payload.loading;
      state.createError = action.payload.error;
      state.isSubmit = action.payload.isSubmit;
    },
    findArea(state, action) {
      state.findLoading = action.payload.loading;
      state.findError = action.payload.error;
      state.area = action.payload.area;
    },
  },
});

export const areaAction = areaSlice.actions;
export default areaSlice;
