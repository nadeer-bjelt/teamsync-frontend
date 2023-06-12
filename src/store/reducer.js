import { combineReducers } from 'redux';
import exampleReducer from './example/reducer';
import menuReducer from './menu/reducer';

const reducer = combineReducers({
  exampleReducer,
  menuReducer
});

export default reducer;
