import { Lazy } from 'react-is';
import MainLayout from 'layout/MainLayout/index';
import Loadable from 'components/Loadable';
import { lazy } from 'react';

const AdminDepartments = Loadable(lazy(() => import('pages/admin/department/index')));

const adminDepartmentRoutes = {
  path: '/dashboard',
  element: <MainLayout />,
  children: [
    {
      path: 'department',
      element: <AdminDepartments />
    }
  ]
};

export default adminDepartmentRoutes;
