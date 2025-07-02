import React, { ChangeEvent } from 'react';
import { Box, TextField } from '@mui/material';
import { useForm } from '@component/form/FormContainer';

export type FormTextInputProps = {
  label?: string;
  value?: string | null;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  subLabel?: string;
  length?: number;
  isRequired?: boolean;
  isDisabled?: boolean;
}

const FormTextInput = (props: FormTextInputProps) => {
  const form = useForm();
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (props.length && evt.target.value.length > props.length) {
      evt.target.value = evt.target.value.slice(0, props.length);
    }
    props.onChange?.(evt);
  };
  const isDisabled = props.isDisabled !== undefined ? props.isDisabled
    : form.isLoading ? true
      : form.isDisabled;
  return (
    <Box my={2}>
      <TextField
        size={form.compact ? 'small' : 'medium'}
        label={props.label}
        value={props.value || ''}
        onChange={handleChange}
        fullWidth
        helperText={props.subLabel}
        required={props.isRequired}
        disabled={isDisabled}
      />
    </Box>
  );
};

export default FormTextInput;