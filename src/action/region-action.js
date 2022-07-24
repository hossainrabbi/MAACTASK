import axios from 'axios';
import { regionAction } from '../store/region-slice';

export const createRegion = (regionData) => async (dispatch) => {
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
      regionAction.createRegion({
        loading: true,
      })
    );

    await axios.post(
      'https://staging-api.erpxbd.com/api/v1/region',
      regionData,
      config
    );

    dispatch(
      regionAction.createRegion({
        error: '',
        loading: false,
        isSubmit: true,
      })
    );
  } catch (err) {
    dispatch(
      regionAction.createRegion({
        error: err?.response?.data?.message,
        loading: false,
      })
    );
  }
};

export const findRegions = (showCount, searchRegion) => async (dispatch) => {
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
      `https://staging-api.erpxbd.com/api/v1/region/${showCount}/1?name=${searchRegion}`,
      config
    );

    dispatch(
      regionAction.findRegion({
        region: data.region,
        regionLength: data.length,
        error: '',
      })
    );
  } catch (err) {
    dispatch(
      regionAction.findRegion({
        error: err?.response?.data?.message,
      })
    );
  }
};
