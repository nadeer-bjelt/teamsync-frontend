import { OPEN_DRAWER, OPEN_ITEM } from './constants';

const initialState = {
  openItem: ['dashboard'],
  defaultId: 'dashboard',
  openComponent: 'buttons',
  drawerOpen: false,
  componentDrawerOpen: true
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
    default:
      return state;
  }
}
