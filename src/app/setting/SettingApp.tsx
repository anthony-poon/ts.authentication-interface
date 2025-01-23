import DefaultLayout from '../DefaultLayout';
import ProfileForm from './component/ProfileForm';
import { setToast } from '@store/slice/notification';
import { useDispatch } from 'react-redux';
import API from '@api/index';
import { useEffect, useState } from 'react';
import { GetProfileResponse, UpdateProfileRequest } from '@api/user/profile';
import { useLoader } from '@hook/use-loader';
import SettingAppView from './SettingAppView';
import { useNavigate } from 'react-router';


const useOnMount = () => {
  const dispatch = useDispatch();
  const { isLoading, setLoading } = useLoader(true);
  const { isLoading: isProfileSubmitting, setLoading: setProfileSubmitting } = useLoader(false);
  const [profile, setProfile] = useState<GetProfileResponse|null>(null);
  useEffect(() => {
    const refresh = async () => {
      try {
        const responses = await Promise.all([
          API.User.Profile.getOne(),
        ])
        setProfile(responses[0]);
      } catch (e) {
        dispatch(setToast(e));
      }
    }
    refresh().finally(() => setLoading(false));
  }, []);

  const handleProfileSubmit = async (formData: UpdateProfileRequest) => {
    try {
      setProfileSubmitting(true);
      await API.User.Profile.updateOne(formData);
      dispatch(setToast("Profile updated successfully."));
    } catch (e) {
      dispatch(setToast(e));
    } finally {
      setProfileSubmitting(false);
    }
  }

  return { isLoading, isProfileSubmitting, profile, handleProfileSubmit }
}

const SettingApp = () => {
  const { isLoading, isProfileSubmitting, profile, handleProfileSubmit } = useOnMount();
  return (
    <SettingAppView
      isLoading={isLoading}
      isProfileSubmitting={isProfileSubmitting}
      profile={profile}
      onProfileSubmit={handleProfileSubmit}
    />
  )
}

export default SettingApp;