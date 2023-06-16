import API from 'utils/Api';
import { GET_ALLPROJECT_FAILURE, GET_ALLPROJECT_REQUEST, GET_ALLPROJECT_SUCCESS } from './constants';

export const getProjects = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALLPROJECT_REQUEST });
    const { data } = await API.get('/projects');
    dispatch({
      type: GET_ALLPROJECT_SUCCESS,
      payload: data
    });
    console.log(data);
  } catch (error) {
    dispatch({ type: GET_ALLPROJECT_FAILURE });
  }
};
