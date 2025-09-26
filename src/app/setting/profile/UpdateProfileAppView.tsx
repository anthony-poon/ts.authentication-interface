import React, { useEffect } from 'react';
import { makeFormData } from '@hook/use-form-data';
import { Profile, UpdateProfileRequest } from '@api/user/profile';
import FormContainer from '@component/form/FormContainer';
import FormTitle from '@component/form/FormTitle';
import FormTextInput from '@component/form/FormTextInput';
import FormSubmitButton from '@component/form/FormSubmitButton';
import { useDispatch } from 'react-redux';
import { setToast } from '@store/slice/notification';
import MountLoader from '@component/MountLoader';
import DefaultLayout from '../../DefaultLayout';

const useFormData = makeFormData({
  displayName: "",
  email: "",
})

type UpdateProfileAppViewProps = {
  profile: typeof Profile;
}

const useOnMount = (props: UpdateProfileAppViewProps) => {
  const dispatch = useDispatch();
  const { formData, setFormData, makeFormChange } = useFormData();

  const handleMount = async () => {
    try {
      const profile = await props.profile.getOne();
      setFormData(profile);
    } catch (e) {
      dispatch(setToast(e));
    }
  }
  const handleSubmit = async () => await props.profile.updateOne(formData);

  return { formData, handleSubmit, handleMount, makeFormChange };
}

export const UpdateProfileAppView = (props: UpdateProfileAppViewProps) => {
  const { formData, handleSubmit, handleMount, makeFormChange } = useOnMount(props);
  return (
    <DefaultLayout maxWidth={"sm"}>
      <MountLoader onMount={handleMount}>
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>Profile</FormTitle>
          <FormTextInput
            label="Display Name"
            value={formData.displayName}
            onChange={makeFormChange("displayName")}
          />
          <FormTextInput
            label="Email"
            value={formData.email}
            onChange={makeFormChange("email")}
          />
          <FormSubmitButton
            fullWidth={false}
            text={"Update profile"}
          />
        </FormContainer>
      </MountLoader>
    </DefaultLayout>

  )
}