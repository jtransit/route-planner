import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import '@components/assets/maps.css';
import { MapContextProvider } from '@contexts/MapContext';
import { Markers } from '@components/map/Markers';
import { Menu } from '@components/contextMenu/Menu';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconAnchor: [0, 51],
  popupAnchor: [0, -51],
});

const Map = () => {
  return (
    <MapContainer
      center={[10.323267, 123.905601]} // Cebu City
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '100vh', width: '100wh' }}
    >
      <MapContextProvider>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Markers />
        <Menu />
      </MapContextProvider>
    </MapContainer>
  );
};

export default Map;
