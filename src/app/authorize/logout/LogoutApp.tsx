import LogoutAppView from './LogoutAppView';
import { useDispatch } from 'react-redux';
import { setLogout } from '@store/slice/authentication';
import { useNavigate } from 'react-router';
import URLs from '@url';

const useOnMount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMount = () => {
    dispatch(setLogout());
    navigate(URLs.authorize.login);
  }

  return { handleMount }
}

const LogoutApp = () => {
  const { handleMount } = useOnMount();
  return (
    <LogoutAppView onMount={handleMount}/>
  )
}

export default LogoutApp;