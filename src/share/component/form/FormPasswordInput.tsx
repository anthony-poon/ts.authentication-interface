import React, { ChangeEvent, useState } from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type FormTextInputProps = {
  label?: string;
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  subLabel?: string;
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
  )
}

const FormPasswordInput = (props: FormTextInputProps) => {
  const [hidden, setHidden] = useState(true);
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(evt);
  }

  return (
    <Box my={2}>
      <TextField
        type={hidden ? 'password' : 'text'}
        label={props.label}
        value={props.value || ''}
        onChange={handleChange}
        fullWidth
        helperText={props.subLabel}
        slotProps={{
          input: {
            endAdornment: <VisibilityIcon isHidden={hidden} onToggle={() => setHidden(!hidden)}/>
          }
        }}
      />
    </Box>
  )
}

export default FormPasswordInput;