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

    const { data } = await axios.post(
      'https://staging-api.erpxbd.com/api/v1/region',
      regionData,
      config
    );

    console.log(data);

    dispatch(
      regionAction.createRegion({
        error: '',
        loading: false,
      })
    );
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(
      regionAction.createRegion({
        error: err.response.data.message,
        loading: false,
      })
    );
  }
};
