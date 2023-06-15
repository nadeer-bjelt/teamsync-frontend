import { OPEN_DRAWER, OPEN_ITEM, SET_MENU_ITEMS } from './constants';

const initialState = {
  openItem: ['dashboard'],
  defaultId: 'dashboard',
  openComponent: 'buttons',
  drawerOpen: false,
  componentDrawerOpen: true,
  menuItems: []
};

export default function menuReducer(state = initialState, { type, payload }) {
  console.log(type);
  console.log(payload);
  switch (type) {
    case OPEN_ITEM:
      return {
        ...state,
        openItem: payload
      };
    case OPEN_DRAWER:
      return {
        ...state,
        drawerOpen: payload
      };
    case SET_MENU_ITEMS:
      return {
        ...state,
        menuItems: payload
      };
    default:
      return state;
  }
}
