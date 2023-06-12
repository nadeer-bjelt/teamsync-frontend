import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// project import
import Logo from './Logo';
import config from 'config';
// import { activeItem } from 'store/reducers/menu';
import { OPEN_ITEM } from 'store/menu/constants';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => {
  const { defaultId } = useSelector((state) => state?.menuReducer);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      component={Link}
      // onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
      onClick={() => dispatch({ type: OPEN_ITEM, payload: [defaultId] })}
      to={!to ? config.defaultPath : to}
      sx={sx}
    >
      <Logo />
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
