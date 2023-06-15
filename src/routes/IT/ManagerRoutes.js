import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';

// render - dashboard
// import MemberDashboard = from 'pages/departments/IT/member/dashboard/index';
const ManagerDashboard = Loadable(lazy(() => import('pages/departments/IT/manager/dashboard/index')));

// ==============================|| IT MEMBER ROUTING ||============================== //

const itManagerRoutes = {
  path: '/dashboard',
  element: <MainLayout />,
  children: [
    {
      path: 'manager',
      element: <ManagerDashboard />
    }
  ]
};

export default itManagerRoutes;
