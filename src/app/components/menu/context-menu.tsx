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
          className='absolute z-[400] w-[9rem] h-auto bg-white p-[0.3rem] rounded-[5px] border border-solid border-gray-100'
          style={{
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
