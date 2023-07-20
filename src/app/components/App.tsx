"use client";
import {useMemo} from 'react';
import dynamic from 'next/dynamic';

const App = () => {

  const Map = useMemo(() => dynamic(
    () => import('@components/Map'),
    {
      loading: () => <p>Loading...</p>,
      ssr: false
    }
  ), []);

  return (
    <Map />
  )
}

export default App