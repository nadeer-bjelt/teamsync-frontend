import API from 'utils/Api';
import { GET_DEPARTMENT_REQUEST, GET_DEPARTMENT_SUCCESS, GET_DEPARTMENT_FAILURE } from './constants';

export const getAllDepartments = () => async (dispatch) => {
  try {
    dispatch({ type: GET_DEPARTMENT_REQUEST });
    const { data } = await API.get('/departments');
    console.log('data', data);
    dispatch({
      type: GET_DEPARTMENT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_DEPARTMENT_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
