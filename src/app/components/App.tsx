"use client";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import RoutingMachine from '@components/RoutingMachine';

type MarkersProps = {

    addMarker: (newMarker: any) => void
}

function Markers({addMarker}: MarkersProps) {

    useMapEvents({
        click: (location) => {

            addMarker(L.latLng(location.latlng.lat, location.latlng.lng))
        }
    })

    return null;
}

function App() {

    const [markers, setMarkers] = useState<any[]>([]);

    const addMarker = (newMarker: any) => {

        setMarkers([...markers, newMarker])
    }

    return (
        <>
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

                <Markers addMarker={addMarker}/>

                <RoutingMachine />
                
            </MapContainer>
        </>
    )
}

export default App