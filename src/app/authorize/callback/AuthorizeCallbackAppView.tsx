import React, { useEffect } from 'react';

type AuthorizeCallbackAppViewProps = {
  onMount: () => void
}

const AuthorizeCallbackAppView = ({ onMount }: AuthorizeCallbackAppViewProps) => {
  useEffect(() => {
    onMount();
  }, []);

  return (
    <>
      loading
    </>
  )
}

export default AuthorizeCallbackAppView;