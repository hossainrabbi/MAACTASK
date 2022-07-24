import axios from 'axios';
import { areaAction } from '../store/area-slice';

export const createArea = (areaData) => async (dispatch) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${
    JSON.parse(localStorage.getItem('authToken'))?.token
  }`;

  const config = {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem('authToken'))?.token
      }`,
    },
  };

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
  axios.defaults.headers.common['Authorization'] = `Bearer ${
    JSON.parse(localStorage.getItem('authToken'))?.token
  }`;

  const config = {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem('authToken'))?.token
      }`,
    },
  };

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
