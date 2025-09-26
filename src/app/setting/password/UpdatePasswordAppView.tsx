import React from 'react';
import { makeFormData } from '@hook/use-form-data';
import { useDispatch } from 'react-redux';
import { setToastError } from '@store/slice/notification';
import FormContainer from '@component/form/FormContainer';
import FormTitle from '@component/form/FormTitle';
import FormPasswordInput from '@component/form/FormPasswordInput';
import FormSubmitButton from '@component/form/FormSubmitButton';
import DefaultLayout from '../../DefaultLayout';
import { Profile } from '@api/user/profile';

const useFormData = makeFormData({
  oldPassword: "",
  newPassword: "",
  repeatPassword: "",
})

type UpdatePasswordFormProps = {
  profile: typeof Profile;
}

const useAction = (props: UpdatePasswordFormProps) => {
  const dispatch = useDispatch();
  const { formData, makeFormChange } = useFormData();
  const handleSubmit = async () => {
    if (formData.newPassword !== formData.repeatPassword) {
      dispatch(setToastError("Password doesn't match"));
      return;
    }
    await props.profile.updatePassword({
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
    })
  };

  return { formData, handleSubmit, makeFormChange };
}

export const UpdatePasswordAppView = (props: UpdatePasswordFormProps) => {
  const { formData, handleSubmit, makeFormChange } = useAction(props);
  return (
    <DefaultLayout maxWidth={"sm"}>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Change Password</FormTitle>
        <FormPasswordInput
          label={"Old Password"}
          value={formData.oldPassword}
          onChange={makeFormChange("oldPassword")}
        />
        <FormPasswordInput
          label={"New Password"}
          value={formData.newPassword}
          onChange={makeFormChange("newPassword")}
        />
        <FormPasswordInput
          label={"Repeat Password"}
          value={formData.repeatPassword}
          onChange={makeFormChange("repeatPassword")}
        />
        <FormSubmitButton
          fullWidth={false}
          text={"Update password"}
        />
      </FormContainer>
    </DefaultLayout>
  )
}