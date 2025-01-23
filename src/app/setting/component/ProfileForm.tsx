import FormContainer from '@component/form/FormContainer';
import { makeFormData } from '@hook/use-form-data';
import { useEffect } from 'react';
import FormTextInput from '@component/form/FormTextInput';
import FormSubmitButton from '@component/form/FormSubmitButton';
import { Title } from '@component/text';
import { Box } from '@mui/material';
import FormTitle from '@component/form/FormTitle';

const useFormData = makeFormData({
  displayName: "",
  email: "",
})

type ProfileFormData = {
  displayName: string;
  email: string;
}

type ProfileFormProps = {
  isSubmitting: boolean;
  profile: ProfileFormData|null;
  onSubmit: (data: ProfileFormData) => Promise<void>;
}

const useOnMount = (props: ProfileFormProps) => {
  const { formData, setFormData, makeFormChange } = useFormData();
  useEffect(() => {
    if (props.profile == null) {
      return;
    }
    setFormData(props.profile);
  }, [props.profile]);

  const handleSubmit = async () => await props.onSubmit(formData);

  return { formData, handleSubmit, makeFormChange };
}

const ProfileForm = (props: ProfileFormProps) => {
  const { formData, handleSubmit, makeFormChange } = useOnMount(props);
  return (
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
      <FormSubmitButton onClick={handleSubmit} loading={props.isSubmitting}/>
    </FormContainer>
  )
}

export default ProfileForm;