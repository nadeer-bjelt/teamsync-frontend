import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';

// render - dashboard
// import MemberDashboard = from 'pages/departments/IT/member/dashboard/index';
const AdminDashboard = Loadable(lazy(() => import('pages/admin/dashboard/index')));
const AdminDepartments = Loadable(lazy(() => import('pages/admin/department/index')));

const ProjectDashboard = Loadable(lazy(() => import('pages/admin/projects/index')));
// ==============================|| IT MEMBER ROUTING ||============================== //

const adminRoutes = {
  path: '/dashboard',
  element: <MainLayout />,
  children: [
    {
      path: 'admin',
      element: <AdminDashboard />
    },
    {
      path: 'department',
      element: <AdminDepartments />
    },
    {
      path: 'projects',
      element: <ProjectDashboard />
    }
  ]
};

export default adminRoutes;
