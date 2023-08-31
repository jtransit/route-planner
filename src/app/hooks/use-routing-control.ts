import { useMemo, useState } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';

import { routingControlOptions } from '@config/routing-control';

const options = {
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

const WAYPOINT_CHANGED_EVENT = 'waypointschanged';

const useRoutingControl = () => {
  const [waypoints, setWaypoints] = useState<L.Routing.Waypoint[]>([
    new L.Routing.Waypoint(new L.LatLng(0, 0), '', {}),
    new L.Routing.Waypoint(new L.LatLng(0, 0), '', {}),
  ]);

  const handleWaypointsChanged = (e: L.Routing.RoutingEvent) => {
    setWaypoints(e.waypoints);
  };

  const routingControl = useMemo(() => {
    return new L.Routing.Control(options).on(
      WAYPOINT_CHANGED_EVENT,
      handleWaypointsChanged
    );
  }, []);

  const handleSpliceWaypoints = (
    index: number,
    waypointsToRemove: number,
    ...wayPoints: L.Routing.Waypoint[] | L.LatLng[]
  ) => {
    const _wayPoints =
      wayPoints[index] instanceof L.LatLng
        ? (wayPoints as L.LatLng[]).map((w: L.LatLng) => {
            return new L.Routing.Waypoint(w, '', {});
          })
        : (wayPoints as L.Routing.Waypoint[]);

    routingControl.spliceWaypoints(index, waypointsToRemove, ..._wayPoints);
  };

  return {
    routingControl,
    waypoints,
    handleSpliceWaypoints,
  };
};

export default useRoutingControl;
