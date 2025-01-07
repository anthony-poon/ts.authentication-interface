import React from "react";

type FormContainerProps = {
  onSubmit?: () => void;
}
const FormContainer = (props: React.PropsWithChildren<FormContainerProps>) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit?.();
  }
  return (
    <form onSubmit={handleSubmit}>
      { props.children }
    </form>
  )
}

export default FormContainer;