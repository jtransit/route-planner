import { useMapContext } from '@contexts/map-context';
import ContextMenuItem from './context-menu-item';
import { actions } from '@components/map/actions';

export const Menu = () => {
  const {
    defaults: { action },
    contextMenu: { isContextMenuOpen, containerPoint },
    directions: { handleChangeFrom, handleChangeTo, handleRemove },
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
            {action === actions.marker ? (
              <ContextMenuItem name='Remove Marker' handler={handleRemove} />
            ) : (
              <>
                <ContextMenuItem
                  name='Directions from here'
                  handler={() => handleChangeFrom()}
                />
                <ContextMenuItem
                  name='Directions to here'
                  handler={() => handleChangeTo()}
                />
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};
