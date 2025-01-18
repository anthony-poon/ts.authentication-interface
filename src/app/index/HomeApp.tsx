import { Button } from '@mui/material';
import env from '@env';
import { useDispatch } from 'react-redux';
import { setToast } from '@store/slice/notification';

const useAction = () => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    // const query = new URLSearchParams({
    //   redirect_uri: env.AUTHENTICATION_CALLBACK_ENDPOINT,
    //   client_id: env.AUTHENTICATION_CLIENT_ID,
    //   state: "some-state", // TODO
    //   scope: [].join(",")
    // }).toString();
    // window.location.href = `${env.AUTHENTICATION_AUTHORIZE_ENDPOINT}?${query}`
  }
  return { handleClick };
}

const HomeApp = () => {
  const { handleClick } = useAction();
  return (
    <div>
      <Button onClick={handleClick}>Login</Button>
    </div>
  )
}

export default HomeApp;