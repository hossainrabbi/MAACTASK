import axios from 'axios';
import { authAction } from '../store/auth-slice';

export const registerUser = (registerData) => async (dispatch) => {
  try {
    dispatch(
      authAction.registerUser({
        loading: true,
      })
    );

    const { data } = await axios.post(
      'https://staging-api.erpxbd.com/api/v1/users/signup',
      registerData
    );

    localStorage.setItem('authToken', JSON.stringify(data));
    dispatch(
      authAction.registerUser({
        error: '',
        loading: false,
        isSubmit: true,
      })
    );
  } catch (err) {
    localStorage.removeItem('authToken');
    dispatch(
      authAction.registerUser({
        error: err.response.data.message,
        loading: false,
      })
    );
  }
};

export const loginUser = (loginData) => async (dispatch) => {
  try {
    dispatch(
      authAction.loginUser({
        loading: true,
      })
    );

    const { data } = await axios.post(
      'https://staging-api.erpxbd.com/api/v1/users/login',
      loginData
    );

    localStorage.setItem('authToken', JSON.stringify(data));
    dispatch(
      authAction.loginUser({
        error: '',
        loading: false,
        isSubmit: true,
      })
    );
  } catch (err) {
    localStorage.removeItem('authToken');
    dispatch(
      authAction.loginUser({
        error: err.response.data.message,
        loading: false,
      })
    );
  }
};
