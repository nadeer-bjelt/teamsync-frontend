import { GET_ALLPROJECT_SUCCESS } from './constants';

const initialState = {
  project: []
};

export default function projectsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALLPROJECT_SUCCESS:
      return {
        ...state,
        project: payload
      };
    default:
      return state;
  }
}
