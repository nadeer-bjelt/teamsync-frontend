import { GET_EXAMPLE_DATA } from './constants';

const initialState = {
  exampledata: []
};
export default function exampleReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_EXAMPLE_DATA:
      return {
        ...state,
        exampledata: payload
      };
    default:
      return state;
  }
}
