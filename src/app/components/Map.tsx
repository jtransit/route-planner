import React, {useState} from 'react'
import {MapContainer, TileLayer, useMapEvents} from 'react-leaflet'
import RoutingMachine from '@components/RoutingMachine'

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MarkersProps = {

  addMarker: (newMarker: L.LatLng) => void
}

const Markers = ({ addMarker }: MarkersProps) => {

  useMapEvents({
    click: (location) => {

      addMarker(L.latLng(location.latlng.lat, location.latlng.lng))
    }
  })

  return null;
}

const Map = () => {

  const [markers, setMarkers] = useState<L.LatLng[]>([]);

  const addMarker = (newMarker: L.LatLng) => {

    setMarkers([...markers, newMarker])
  }

  return (
    <MapContainer
      center={[10.323267, 123.905601]} // Cebu City
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '100vh', width: '100wh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Markers addMarker={addMarker} />
      <RoutingMachine />

    </MapContainer>
  )
}

export default Map