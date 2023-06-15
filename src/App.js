import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { menuItems } from 'menu-items/index';
import { setMenuItems } from 'store/menu/actions';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const role = userInfo?.user?.role;
  const department = userInfo?.user?.department?.name;
  useEffect(() => {
    if (role === 'itMember' && department === 'IT') {
      navigate('/dashboard/member');
    } else if (role === 'itManager' && department === 'IT') {
      navigate('/dashboard/manager');
    } else if (role === 'admin') {
      navigate('/dashboard/admin');
    }
  }, []);

  useEffect(() => {
    if (role === 'itMember' && department === 'IT') {
      dispatch(setMenuItems(menuItems.itMember));
    } else if (role === 'itManager' && department === 'IT') {
      dispatch(setMenuItems(menuItems.itManager));
    } else if (role === 'admin') {
      dispatch(setMenuItems(menuItems.admin));
    }
  }, []);

  return (
    <ThemeCustomization>
      <ScrollTop>
        <Routes />
      </ScrollTop>
    </ThemeCustomization>
  );
};

export default App;
