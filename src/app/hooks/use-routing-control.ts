import { useState } from 'react';
import L from 'leaflet';

import { routingControlOptions } from '@config/routing-control';

const WAYPOINT_CHANGED_EVENT = 'waypointschanged';

const useRoutingControl = () => {
  const [waypoints, setWaypoints] = useState<L.Routing.Waypoint[]>([
    new L.Routing.Waypoint(new L.LatLng(0, 0), '', {}),
    new L.Routing.Waypoint(new L.LatLng(0, 0), '', {}),
  ]);

  const handleWaypointsChanged = (e: L.Routing.RoutingEvent) => {
    setWaypoints(e.waypoints);
  };

  const [routingControl] = useState<L.Routing.Control>(
    L.Routing.control(routingControlOptions).on(
      WAYPOINT_CHANGED_EVENT,
      handleWaypointsChanged
    )
  );

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

    routingControl?.spliceWaypoints(index, waypointsToRemove, ..._wayPoints);
  };

  return {
    routingControl,
    waypoints,
    handleSpliceWaypoints,
  };
};

export default useRoutingControl;
