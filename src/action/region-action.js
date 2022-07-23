import axios from 'axios';
import { regionAction } from '../store/region-slice';

const config = {
  headers: {
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem('authToken'))?.token
    }`,
  },
};

export const createRegion = (regionData) => async (dispatch) => {
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
        error: err?.response?.data?.message || err.message,
        loading: false,
      })
    );
  }
};

export const findRegions = (showCount, searchRegion) => async (dispatch) => {
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
        error: err?.response?.data?.message || err.message,
      })
    );
  }
};
