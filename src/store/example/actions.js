import axios from 'axios';
import { GET_EXAMPLE_DATA } from './constants';

export const getExample = () => async (dispatch) => {
  try {
    const { data } = await axios.get('https://api.publicapis.org/entries');
    console.log(data);
    dispatch({
      type: GET_EXAMPLE_DATA,
      payload: data.entries
    });
  } catch (error) {
    return error;
  }
};
