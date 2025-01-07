import React from "react";
import { Box, Button } from '@mui/material';

type FormSubmitButtonProps = {
  text?: string;
}
const FormSubmitButton = (props: FormSubmitButtonProps) => {
  return (
    <Box mt={4}>
      <Button
        variant="contained"
        type={"submit"}
        fullWidth
      >
        { props.text || 'Submit' }
      </Button>
    </Box>
  )
}

export default FormSubmitButton;