import L from 'leaflet';
import 'leaflet-routing-machine';

export const routeControl = new L.Routing.Control({
  waypoints: [],
  lineOptions: {
    styles: [{ color: '#FF2D00', weight: 5 }],
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
