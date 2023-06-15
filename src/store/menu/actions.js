import { SET_MENU_ITEMS } from './constants';

export const setMenuItems = (menuItems) => (dispatch) => {
  console.log('setMenuItems', menuItems);
  dispatch({
    type: SET_MENU_ITEMS,
    payload: menuItems
  });
};
