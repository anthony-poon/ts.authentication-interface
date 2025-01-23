import React from 'react';
import FormTextInput, { FormTextInputProps } from '@component/form/FormTextInput';

type FormNumberInputProps = FormTextInputProps;

const FormNumberInput = (props: FormNumberInputProps) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const val = evt.target.value;
    if (!/^\d+$/.test(val)) {
      return
    }
    props.onChange?.(evt);
  }

  return (
    <FormTextInput {...props} onChange={handleChange} />
  )
}

export default FormNumberInput;