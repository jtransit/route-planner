import { useMapContext } from '@contexts/map-context';
import { actions } from '@components/map/actions';

export const Menu = () => {
  const { isContextMenuOpen, action, containerPoint, handleAddMarker } =
    useMapContext();

  return (
    <>
      {isContextMenuOpen && (
        <div
          style={{
            position: 'absolute',
            zIndex: 400,
            width: '8rem',
            height: 'auto',
            border: '1px solid gray',
            borderRadius: '5px',
            padding: '0.3rem',
            background: 'white',
            top: `${containerPoint.y}px`,
            left: `${containerPoint.x}px`,
          }}
        >
          <ul>
            <li>
              {action === undefined && (
                <a
                  id='context-menu-add-marker'
                  onClick={handleAddMarker}
                  style={{ cursor: 'pointer' }}
                >
                  Add marker
                </a>
              )}
              {action === actions.marker && (
                <a
                  id='context-menu-remove-marker'
                  onClick={() => {}}
                  style={{ cursor: 'pointer' }}
                >
                  Remove marker
                </a>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
