import { useMapContext } from '@contexts/map-context';
import { actions } from '@components/map/actions';

export const Menu = () => {
  const {
    isContextMenuOpen,
    action,
    containerPoint,
    handleAddFrom,
    handleAddTo,
  } = useMapContext();

  return (
    <>
      {isContextMenuOpen && (
        <div
          style={{
            position: 'absolute',
            zIndex: 400,
            width: '9rem',
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
            <li className='hover:bg-gray-200 p-1'>
              {action === undefined && (
                <a
                  id='context-menu-add-marker'
                  onClick={handleAddFrom}
                  style={{ cursor: 'pointer' }}
                >
                  Directions from here
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
            <li className='hover:bg-gray-200 p-1'>
              {action === undefined && (
                <a
                  id='context-menu-add-marker'
                  onClick={handleAddTo}
                  style={{ cursor: 'pointer' }}
                >
                  Directions to here
                </a>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
