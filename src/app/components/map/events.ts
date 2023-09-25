import { useMapEvents } from 'react-leaflet';
import L from 'leaflet';

import { useMapContext } from '@contexts/map-context';
import { actions } from '@components/map/actions';
import { useAppContext } from '@contexts/app-context';

const MARKER = 'Marker';
const LEAFLET = 'leaflet';
const STRING = 'string';

export const Events = () => {
  const { handleShowDrawer, handleShowNavigationMenu } = useAppContext();
  const {
    defaults: { handleAction },
    contextMenu: { handleContextMenuOpen, handleContextMenuClose },
  } = useMapContext();

  const isMap = (e: L.LeafletMouseEvent) => {
    const className = (e.originalEvent.target as HTMLInputElement).className;
    return typeof className === STRING && className.includes(LEAFLET);
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
      handleShowNavigationMenu(false);
      handleShowDrawer(false);
      handleReset();
    },
    dragend: () => {
      handleShowNavigationMenu(true);
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
