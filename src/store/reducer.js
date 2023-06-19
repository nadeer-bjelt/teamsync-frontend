import { combineReducers } from 'redux';
import exampleReducer from './example/reducer';
import menuReducer from './menu/reducer';
import { userLoginReducer, userLoginRefreshReducer } from './user/reducers';
// import departmentReducer from './department/reducer';
import { departmentReducer } from './department/reducer';

import projectsReducer from './project/reducer';
const reducer = combineReducers({
  exampleReducer,
  menuReducer,
  userLogin: userLoginReducer,
  userLoginRefresh: userLoginRefreshReducer,
  department: departmentReducer,
  projects: projectsReducer
});

export default reducer;
