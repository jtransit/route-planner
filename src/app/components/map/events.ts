import { useMapEvents } from 'react-leaflet';
import L from 'leaflet';

import { useMapContext } from '@contexts/map-context';
import { actions } from '@components/map/actions';
import { useAppContext } from '@contexts/app-context';

const MARKER = 'Marker';
const MAP = 'leaflet';

export const Events = () => {
  const { handleShowDrawer } = useAppContext();
  const { handleContextMenuOpen, handleContextMenuClose, handleAction } =
    useMapContext();

  const isMap = (e: L.LeafletMouseEvent) => {
    return (e.originalEvent.target as HTMLInputElement).className.includes(MAP);
  };

  const isMarker = (e: L.LeafletMouseEvent) => {
    return (e.originalEvent.target as HTMLInputElement).title === MARKER;
  };

  const isContextMenu = (e: L.LeafletMouseEvent) => {
    return (e.originalEvent.target as HTMLInputElement).id === '';
  };

  const handleReset = () => {
    handleContextMenuClose();
    handleAction();
  };

  useMapEvents({
    click: (e) => {
      handleShowDrawer(false);
      isContextMenu(e) && handleReset();
      if (isMarker(e)) {
        handleAction(actions.marker);
        handleContextMenuOpen(e);
      }
    },
    zoom: () => {
      handleReset();
    },
    dragstart: () => {
      handleReset();
    },
    contextmenu: (e) => {
      if (isMap(e)) {
        const action = isMarker(e) ? actions.marker : undefined;
        handleAction(action);
        handleContextMenuOpen(e);
      } else {
        handleContextMenuClose();
      }
    },
  });

  return null;
};
