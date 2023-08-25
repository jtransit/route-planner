import L from 'leaflet';
import 'leaflet-routing-machine';

export const routeControl = new L.Routing.Control({
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
});
