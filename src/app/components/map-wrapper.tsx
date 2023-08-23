'use client';
import dynamic from 'next/dynamic';

import Loading from '@app/loading';

const MapWrapper = dynamic(() => import('@components/map-component'), {
  loading: () => <Loading />,
  ssr: false,
});

export default MapWrapper;
