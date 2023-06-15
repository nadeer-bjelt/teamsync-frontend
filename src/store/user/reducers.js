import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_REFRESH_REQUEST,
  USER_LOGIN_REFRESH_SUCCESS,
  USER_LOGIN_REFRESH_FAILURE,
  USER_LOGOUT
} from './constants';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return { ...state };
  }
};

// use refresh token to obtain new access token for the logged in user
export const userLoginRefreshReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REFRESH_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_REFRESH_SUCCESS:
      return { loading: false, tokenInfo: action.payload };
    case USER_LOGIN_REFRESH_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
