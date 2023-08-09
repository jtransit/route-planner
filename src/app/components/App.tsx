'use client';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';

import { useAppContext } from '@contexts/AppContext';
import { Loader } from '@components/Loader';

const App = () => {
  const { isLoading } = useAppContext();

  const Map = useMemo(
    () =>
      dynamic(() => import('@components/Map'), {
        loading: () => <Loader />,
        ssr: false,
      }),
    []
  );

  return (
    <>
      {isLoading && <Loader />}
      <Map />
    </>
  );
};

export default App;
