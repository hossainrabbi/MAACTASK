import axios from 'axios';
import { areaAction } from '../store/area-slice';

const config = {
  headers: {
    Authorization: `Bearer ${
      JSON.parse(JSON.parse(localStorage.getItem('fieldX-login'))?.user)?.token
    }`,
  },
};

export const createArea = (areaData) => async (dispatch) => {
  try {
    dispatch(
      areaAction.createArea({
        loading: true,
      })
    );

    await axios.post(
      'https://staging-api.erpxbd.com/api/v1/area',
      areaData,
      config
    );

    dispatch(
      areaAction.createArea({
        error: '',
        loading: false,
        isSubmit: true,
      })
    );
  } catch (err) {
    dispatch(
      areaAction.createArea({
        error: err?.response?.data?.message,
        loading: false,
      })
    );
  }
};

export const findArea = (countArea, searchArea) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://staging-api.erpxbd.com/api/v1/area/All/${countArea}/1?name=${searchArea}`,
      config
    );

    dispatch(
      areaAction.findArea({
        area: data.area,
        areaLength: data.length,
        error: '',
      })
    );
  } catch (err) {
    dispatch(
      areaAction.findArea({
        error: err?.response?.data?.message,
      })
    );
  }
};
