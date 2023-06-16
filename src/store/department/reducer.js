import { GET_DEPARTMENT_SUCCESS } from './constants';

const initialState = {
  departments: []
};
export default function departmentReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_DEPARTMENT_SUCCESS:
      return {
        ...state,
        departments: payload
      };
    default:
      return state;
  }
}
