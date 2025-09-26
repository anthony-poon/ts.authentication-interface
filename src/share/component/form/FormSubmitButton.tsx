import React, { JSX } from 'react';
import { Box, Button } from '@mui/material';
import { LoadingIndicator } from '@component/form/component/indicator';
import { useForm } from '@component/form/FormContainer';

type FormSubmitButtonProps = {
  isDisabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  text?: string;
  children?: JSX.Element;
}

const usePropsWithContext = (props: FormSubmitButtonProps) => {
  const form = useForm();
  return {
    isDisabled: props.isDisabled !== undefined ? props.isDisabled : form.isDisabled,
    isLoading: props.isLoading !== undefined ? props.isLoading : form.isLoading,
  }
}

const FormSubmitButton = (props: FormSubmitButtonProps) => {
  const resolved = usePropsWithContext(props);
  return (
    <Box mt={2}>
      <Button
        disabled={resolved.isDisabled || resolved.isLoading}
        variant="contained"
        type={"submit"}
        fullWidth={props.fullWidth ?? true}
        sx={{textTransform: 'none'}}
      >
        { resolved.isLoading ? <LoadingIndicator/> : null }
        { props.text || props.children || 'Submit' }
      </Button>
    </Box>
  )
}

export default FormSubmitButton;