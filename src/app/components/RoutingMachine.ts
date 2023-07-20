import L from 'leaflet';
import 'leaflet-routing-machine';
import {createControlComponent} from "@react-leaflet/core"

const createRoutingMachineLayer = () => {

  const instance = L.Routing.control({
    // TODO: To use state for dynamic markers
    waypoints:[
      L.latLng(10.327731, 123.908455),
      L.latLng(10.315234, 123.901631)
    ],
    lineOptions: {
      styles: [{color: "#FF2D00", weight: 5}],
      extendToWaypoints: true,
      missingRouteTolerance: 0
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  });

  return instance;
}

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;