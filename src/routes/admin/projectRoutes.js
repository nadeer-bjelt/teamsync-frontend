import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';

// render - dashboard
// import MemberDashboard = from 'pages/departments/IT/member/dashboard/index';
const ProjectDashboard = Loadable(lazy(() => import('pages/admin/projects/index')));

// ==============================|| IT MEMBER ROUTING ||============================== //

const projectRoutes = {
  path: '/dashboard',
  element: <MainLayout />,
  children: [
    {
      path: 'projects',
      element: <ProjectDashboard />
    }
  ]
};
export default projectRoutes;
