import React, { useEffect, useState } from 'react';
import Loader from '@component/Loader';

type MountLoaderProps = {
  onMount: () => Promise<unknown> | (() => unknown);
  children: React.ReactNode;
  fullscreen?: boolean;
};


const MountLoader = (props: MountLoaderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      await props.onMount();
      setIsLoading(false);
    })();
  }, []);
  return (
    <Loader isLoading={isLoading}>
      { props.children }
    </Loader>
  )
}

export default MountLoader;