import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';

// render - dashboard
// import MemberDashboard = from 'pages/departments/IT/member/dashboard/index';
const MemberDashboard = Loadable(lazy(() => import('pages/departments/IT/member/dashboard')));

// ==============================|| IT MEMBER ROUTING ||============================== //

const itMemberRoutes = {
  path: '/dashboard',
  element: <MainLayout />,
  children: [
    {
      path: 'member',
      element: <MemberDashboard />
    }
  ]
};

export default itMemberRoutes;
