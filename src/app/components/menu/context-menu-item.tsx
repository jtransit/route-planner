import { useMapContext } from '@contexts/map-context';

const ContextMenuItem = ({
  name,
  handler,
}: {
  name: string;
  handler: () => void;
}) => {
  const { action } = useMapContext();

  return (
    <li className='hover:bg-gray-200 p-1'>
      {action === undefined && (
        <a
          id={`context-menu-${name}`}
          onClick={handler}
          style={{ cursor: 'pointer' }}
        >
          {name}
        </a>
      )}
    </li>
  );
};

export default ContextMenuItem;
