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

  const handleReset = () => {
    handleContextMenuOpen(false);
    handleAction();
  };

  useMapEvents({
    click: (e) => {
      isContextMenuElement(e) && handleReset();
      if (isMarker(e)) {
        handleAction(actions.marker);
        handleContextMenu(e);
      }
    },
    zoom: () => {
      handleReset();
    },
    dragstart: () => {
      handleReset();
    },
    contextmenu: (e) => {
      if (isMarker(e)) return;
      handleContextMenu(e);
    },
  });

  return null;
};
