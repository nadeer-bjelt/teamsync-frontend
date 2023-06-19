import { GET_DEPARTMENT_SUCCESS, GET_DEPARTMENT_REQUEST, GET_DEPARTMENT_FAILURE } from './constants';

// const initialState = {
//   departments: []
// };
// export default function departmentReducer(state = initialState, { type, payload }) {
//   switch (type) {
//     case GET_DEPARTMENT_SUCCESS:
//       return {
//         ...state,
//         departments: payload
//       };
//     default:
//       return state;
//   }
// }
export const departmentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DEPARTMENT_REQUEST:
      return { ...state, loading: true };
    case GET_DEPARTMENT_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case GET_DEPARTMENT_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
