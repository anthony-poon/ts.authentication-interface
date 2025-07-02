import React, { ChangeEvent, useState } from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from '@component/form/FormContainer';

type FormPasswordInputProps = {
  label?: string;
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  subLabel?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
}

type VisibilityIconProps = {
  isHidden: boolean,
  onToggle: () => void,
}

const VisibilityIcon = (props: VisibilityIconProps) => {
  return (
    <Box mr={1}>
      <InputAdornment position="end">
        <IconButton
          onClick={props.onToggle}
          edge="end"
        >
          {props.isHidden ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    </Box>
  );
};

const usePropsWithContext = (props: FormPasswordInputProps) => {
  const form = useForm();
  return {
    isDisabled: form.isLoading ? true
      : props.isDisabled !== undefined ? props.isDisabled
        : form.isDisabled
  };
};

const FormPasswordInput = (props: FormPasswordInputProps) => {
  const form = useForm();
  const [hidden, setHidden] = useState(true);
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => props.onChange?.(evt);
  const isDisabled = props.isDisabled !== undefined ? props.isDisabled
    : form.isLoading ? true
      : form.isDisabled;
  return (
    <Box my={2}>
      <TextField
        size={form.compact ? 'small' : 'medium'}
        type={hidden ? 'password' : 'text'}
        label={props.label}
        value={props.value || ''}
        onChange={handleChange}
        fullWidth
        helperText={props.subLabel}
        required={props.isRequired}
        disabled={isDisabled}
        slotProps={{
          input: {
            endAdornment: <VisibilityIcon isHidden={hidden} onToggle={() => setHidden(!hidden)} />
          }
        }}
      />
    </Box>
  );
};

export default FormPasswordInput;