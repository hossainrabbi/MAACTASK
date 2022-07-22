import axios from 'axios';
import { regionAction } from '../store/region-slice';

const config = {
  headers: {
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem('authToken')).token
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

export const findRegions = (showCount) => async (dispatch) => {
  try {
    dispatch(
      regionAction.findRegion({
        loading: true,
        region: [],
      })
    );

    const { data } = await axios.get(
      `https://staging-api.erpxbd.com/api/v1/region/${showCount}/1`,
      config
    );

    dispatch(
      regionAction.findRegion({
        region: data.region,
        error: '',
        loading: false,
      })
    );
  } catch (err) {
    dispatch(
      regionAction.findRegion({
        region: [],
        error: err?.response?.data?.message || err.message,
        loading: false,
      })
    );
  }
};
