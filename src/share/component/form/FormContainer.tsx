import React, { createContext, useContext, useState } from 'react';
import { useLoader } from '@hook/use-loader';

type FormContextProps = {
  compact: boolean
  isLoading: boolean
  isDisabled: boolean
}

export const FormContext = createContext<FormContextProps>({
  compact: true,
  isLoading: false,
  isDisabled: false,
});


type FormContainerProps = {
  compact?: boolean;
  onSubmit?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const useAction = (props: FormContainerProps) => {
  const { isLoading, setLoading } = useLoader(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    try {
      props.onSubmit?.();
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, handleSubmit }
}


const FormContainer = (props: React.PropsWithChildren<FormContainerProps>) => {
  const { isLoading, handleSubmit } = useAction(props);
  return (
    <FormContext.Provider value={{
      compact: props.compact ?? true,
      isLoading: props.isLoading !== undefined ? props.isLoading : isLoading,
      isDisabled: !!props.isDisabled,
    }}>
      <form onSubmit={handleSubmit}>
        { props.children }
      </form>
    </FormContext.Provider>
  )
}

export const useForm = () => {
  return useContext(FormContext);
}

export default FormContainer;