import 'leaflet-routing-machine';
import L from 'leaflet';

export const routingControlOptions = {
  waypoints: [],
  lineOptions: {
    styles: [{ color: '#0ea5e9', weight: 5 }],
    extendToWaypoints: true,
    missingRouteTolerance: 0,
  },
  show: false,
  addWaypoints: true,
  routeWhileDragging: true,
  fitSelectedRoutes: true,
  showAlternatives: false,
  containerClassName: 'display-none',
  createMarker: (
    waypointIndex: number,
    waypoint: L.Routing.Waypoint,
    numberOfWaypoints: number
  ) => {
    return new L.Marker(waypoint.latLng, {
      alt: `${waypointIndex}`,
      title: 'Marker',
      draggable: true,
    });
  },
};
