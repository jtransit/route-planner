import React from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import '@components/assets/maps.css'

import { routeControl } from '@components/RoutingControl'

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconAnchor: [0, 51],
  popupAnchor: [0, -51]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Markers = () => {

  const map = useMapEvents({
    dblclick: (event) => {
      
      const newWaypoint = L.latLng(event.latlng.lat, event.latlng.lng)
      const waypoints = getRouteWaypoints()

      waypoints.push(newWaypoint)

      routeControl.setWaypoints(waypoints).addTo(map)
    }
  })

  return null;
}

const getRouteWaypoints = (): L.LatLng[] => {

  let waypoints: L.LatLng[] = []

  const currentWaypoints = routeControl.getWaypoints()

  for (const item of currentWaypoints) {

    if (item.latLng?.lat && item.latLng?.lng) {

      waypoints.push( L.latLng(item.latLng.lat, item.latLng.lng) )
    }
  }

  return waypoints
}

const Map = () => {

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

      <Markers />

    </MapContainer>
  )
}

export default Map