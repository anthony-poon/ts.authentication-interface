import React, { ChangeEvent } from 'react';
import { Box, TextField } from '@mui/material';

export type FormTextInputProps = {
  label?: string;
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  subLabel?: string;
  length?: number;
  required?: boolean;
}

const FormTextInput = (props: FormTextInputProps) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (props.length && evt.target.value.length > props.length) {
      evt.target.value = evt.target.value.slice(0, props.length);
    }
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
        required={props.required}
      />
    </Box>
  )
}

export default FormTextInput;