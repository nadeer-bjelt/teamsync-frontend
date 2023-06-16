// assets
import { HomeOutlined } from '@ant-design/icons';

// icons
const icons = {
  HomeOutlined
};

// ==============================|| MENU ITEMS ||============================== //

export const roles = {
  IT_MEMBER: 'itMember',
  IT_MANAGER: 'itManager'
};

export const menuItems = {
  itMember: [
    {
      id: 'group-home',
      type: 'group',
      children: [
        {
          id: 'home',
          title: 'Home',
          type: 'item',
          url: '/dashboard/member',
          icon: icons.HomeOutlined,
          breadcrumbs: false
        }
      ]
    }
  ],
  itManager: [
    {
      id: 'group-home',
      type: 'group',
      children: [
        {
          id: 'home',
          title: 'Manger Home',
          type: 'item',
          url: '/dashboard/manager',
          icon: icons.HomeOutlined,
          breadcrumbs: false
        }
      ]
    }
  ],
  admin: [
    {
      id: 'group-home',
      type: 'group',
      children: [
        {
          id: 'home',
          title: 'Admin Home',
          type: 'item',
          url: '/dashboard/admin',
          icon: icons.HomeOutlined,
          breadcrumbs: true
        }
      ]
    },
    {
      id: 'group-home',
      type: 'group',
      children: [
        {
          id: 'home',
          title: 'Departments',
          type: 'item',
          url: '/dashboard/department',
          icon: icons.HomeOutlined,
          breadcrumbs: true
        }
      ]
    }
  ]
};
