const ContextMenuItem = ({
  name,
  handler,
}: {
  name: string;
  handler: () => void;
}) => {
  return (
    <li className='hover:bg-gray-200 cursor-pointer'>
      <a
        className='block w-full h-full p-1'
        id={`context-menu-${name}`}
        onClick={handler}
      >
        {name}
      </a>
    </li>
  );
};

export default ContextMenuItem;
