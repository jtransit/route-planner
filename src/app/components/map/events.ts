import { useMapEvents } from 'react-leaflet';
import L from 'leaflet';

import { useMapContext } from '@contexts/map-context';
import { actions } from '@components/map/actions';

const MARKER = 'Marker';

export const Events = () => {
  const { handleContextMenuOpen, handleContextMenuClose, handleAction } =
    useMapContext();

  const isMarker = (e: L.LeafletMouseEvent) => {
    return (e.originalEvent.target as HTMLInputElement).alt === MARKER;
  };

  const isContextMenu = (e: L.LeafletMouseEvent) => {
    return (e.originalEvent.target as HTMLInputElement).id === '';
  };

  const handleContextMenu = (e: L.LeafletMouseEvent) => {
    handleContextMenuOpen(e);
  };

  const handleReset = () => {
    handleContextMenuClose();
    handleAction();
  };

  useMapEvents({
    click: (e) => {
      isContextMenu(e) && handleReset();
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
      const action = isMarker(e) ? actions.marker : undefined;
      handleAction(action);
      handleContextMenu(e);
    },
  });

  return null;
};
