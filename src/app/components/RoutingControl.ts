import L from 'leaflet';
import 'leaflet-routing-machine';

export const routeControl = L.Routing.control({
  waypoints:[],
  lineOptions: {
    styles: [{color: "#FF2D00", weight: 5}],
    extendToWaypoints: true,
    missingRouteTolerance: 0
  },
  show: false,
  addWaypoints: false,
  routeWhileDragging: true,
  fitSelectedRoutes: true,
  showAlternatives: false,
  containerClassName: 'display-none'
});

export const getRouteWaypoints = (): L.LatLng[] => {
  const waypoints: L.LatLng[] = [];

  const currentWaypoints = routeControl.getWaypoints();
  
  for (const item of currentWaypoints) {
    if (item.latLng?.lat && item.latLng?.lng) {
      waypoints.push(L.latLng(item.latLng.lat, item.latLng.lng));
    }
  }

  return waypoints;
};