import { useMapEvents } from 'react-leaflet';
import L from 'leaflet';

import { useMapContext } from '@contexts/MapContext';
import { actions } from '@components/map/actions';

export const Markers = () => {
  const {
    handleContextMenuOpen,
    handleContainerPoint,
    handleLatLng,
    handleAction,
  } = useMapContext();

  const isMarker = (e: L.LeafletMouseEvent) => {
    return (e.originalEvent.target as HTMLInputElement).alt === 'Marker';
  };

  const isContextMenuElement = (e: L.LeafletMouseEvent) => {
    return (e.originalEvent.target as HTMLInputElement).id === '';
  };

  const handleContextMenu = (e: L.LeafletMouseEvent) => {
    handleContextMenuOpen(true);
    handleContainerPoint(e.containerPoint);
    handleLatLng(e.latlng);
  };

  useMapEvents({
    click: (e) => {
      isContextMenuElement(e) && handleContextMenuOpen(false);
      if (isMarker(e)) {
        handleAction(actions.marker);
        handleContextMenu(e);
      }
    },
    zoom: () => {
      handleContextMenuOpen(false);
    },
    dragstart: () => {
      handleContextMenuOpen(false);
    },
    contextmenu: (e) => {
      if (isMarker(e)) return;
      handleContextMenu(e);
    },
  });

  return null;
};
