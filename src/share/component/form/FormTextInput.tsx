import React, { ChangeEvent } from 'react';
import { Box, TextField } from '@mui/material';

type FormTextInputProps = {
  label?: string;
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  subLabel?: string;
}

const FormTextInput = (props: FormTextInputProps) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(evt);
  }

  return (
    <Box my={2}>
      <TextField
        label={props.label}
        value={props.value || ''}
        onChange={handleChange}
        fullWidth
        helperText={props.subLabel}
      />
    </Box>
  )
}

export default FormTextInput;