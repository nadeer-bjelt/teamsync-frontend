import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REFRESH_REQUEST,
  USER_LOGIN_REFRESH_SUCCESS,
  USER_LOGIN_REFRESH_FAILURE
} from './constants';
import API from '../../utils/Api';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await API.post('/auth/login', { email, password });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    dispatch({
      type: USER_LOGIN_REFRESH_SUCCESS,
      payload: data.refreshToken
    });

    localStorage.setItem('refreshToken', data.tokens.access.token);
    localStorage.setItem('userInfo', JSON.stringify(data));
    // remove the variable that helps prompt the user that email is not verified, each time they login
    localStorage.removeItem('promptEmailVerification');
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const refreshLogin = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOGIN_REFRESH_REQUEST });
    const {
      userLogin: { userInfo }
    } = getState();
    const { data } = await API.post('/auth/refresh-tokens', { refreshToken: localStorage.getItem('refreshToken') });

    if (data.success) {
      dispatch({ type: USER_LOGIN_REFRESH_SUCCESS, payload: data });
      const updatedUser = {
        ...userInfo,
        accessToken: data.tokens.access.token,
        refreshToken: data.tokens.refresh.token
      };
      // update the local storage
      localStorage.setItem('userInfo', JSON.stringify(updatedUser));
      dispatch({ type: USER_LOGIN_SUCCESS, payload: updatedUser });
    } else if (!data.success) {
      // set a variable in local storage which redirects to login page, if this refresh thing fails
      localStorage.removeItem('userInfo');
      localStorage.setItem('redirectLogin', 'true'); // after refresh token also expires, redirect to login page after loggin out the user
      dispatch({ type: USER_LOGOUT });
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_REFRESH_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
