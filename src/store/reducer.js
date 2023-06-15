import { combineReducers } from 'redux';
import exampleReducer from './example/reducer';
import menuReducer from './menu/reducer';
import { userLoginReducer, userLoginRefreshReducer } from './user/reducers';

const reducer = combineReducers({
  exampleReducer,
  menuReducer,
  userLogin: userLoginReducer,
  userLoginRefresh: userLoginRefreshReducer
});

export default reducer;
