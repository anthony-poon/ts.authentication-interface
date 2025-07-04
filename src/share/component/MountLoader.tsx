import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import Loader from '@component/Loader';

type MountLoaderProps = {
  onMount: () => Promise<unknown> | (() => unknown);
  children: React.ReactNode;
  fullscreen?: boolean;
};

export type MountLoaderHandle = {
  reload: () => void;
};

const MountLoader = forwardRef<MountLoaderHandle, MountLoaderProps>((props, ref) => {
  const [isLoading, setIsLoading] = useState(true);

  const load = async () => {
    setIsLoading(true);
    await props.onMount();
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => await load())();
  }, []);

  useImperativeHandle(ref, () => ({
    reload: load
  }));

  return (
    <Loader isLoading={isLoading}>
      {props.children}
    </Loader>
  );
});

export default MountLoader;