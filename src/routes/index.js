import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import itMemberRoutes from './IT/MemberRoutes';
import itManagerRoutes from './IT/ManagerRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  console.log('MainRoutes', MainRoutes);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const role = userInfo?.user?.role;
  const department = userInfo?.user?.department?.name;

  const getRoutes = () => {
    if (role === 'itMember' && department === 'IT') {
      return itMemberRoutes; // Wrap MainRoutes inside an array
    } else if (role === 'itManager' && department === 'IT') {
      return itManagerRoutes;
    } else {
      return LoginRoutes; // Wrap LoginRoutes inside an array
    }
  };

  return useRoutes([getRoutes()]);
}
