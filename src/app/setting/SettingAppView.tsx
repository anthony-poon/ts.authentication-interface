import ProfileForm from './component/ProfileForm';
import DefaultLayout from '../DefaultLayout';
import { GetProfileResponse, UpdateProfileRequest } from '@api/user/profile';
import Loader from '@component/Loader';
import { Container } from '@mui/material';

type SettingAppViewProps = {
  isLoading: boolean;
  profile: GetProfileResponse|null,
  isProfileSubmitting: boolean,
  onProfileSubmit: (formData: UpdateProfileRequest) => Promise<void>,
}

const SettingAppView = (props: SettingAppViewProps) => {
  return (
    <DefaultLayout maxWidth={"md"}>
      <Loader isLoading={props.isLoading}>
        <ProfileForm
          profile={props.profile}
          onSubmit={props.onProfileSubmit}
          isSubmitting={props.isProfileSubmitting}
        />
      </Loader>
    </DefaultLayout>
  )
}

export default SettingAppView;