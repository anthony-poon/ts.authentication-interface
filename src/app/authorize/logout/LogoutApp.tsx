import LogoutAppView from './LogoutAppView';
import { useDispatch } from 'react-redux';
import { setLogout } from '@store/slice/authentication';
import { useNavigate } from 'react-router';
import URLs from '@url';

const LogoutApp = () => {
  return (
    <LogoutAppView/>
  )
}

export default LogoutApp;