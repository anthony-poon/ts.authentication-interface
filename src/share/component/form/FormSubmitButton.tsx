import React from "react";
import { Box, Button } from '@mui/material';
import { LoadingIndicator } from '@component/form/component/indicator';

type FormSubmitButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  text?: string;
  onClick: () => void;
}
const FormSubmitButton = (props: FormSubmitButtonProps) => {
  return (
    <Box mt={4}>
      <Button
        disabled={props.disabled || props.loading}
        variant="contained"
        type={"submit"}
        fullWidth
        onClick={props.onClick}
      >
        { props.loading ? <LoadingIndicator/> : null }
        { props.text || 'Submit' }
      </Button>
    </Box>
  )
}

export default FormSubmitButton;