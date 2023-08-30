import { useMapContext } from '@contexts/map-context';

// WIP Navigation Menu
const NavigationMenu = () => {
  const { from, to } = useMapContext();

  const _from = from?.toString() ?? '';
  const _to = to?.toString() ?? '';

  return (
    <>
      <div className='absolute z-[400] w-[25rem] h-auto border-2 border-solid border-gray-400 rounded p-[0.3rem] bg-white top-[1rem] left-[1rem]'>
        <div className='py-1'>Where are you? {_from}</div>
        <div className='py-1'>Where do you want to go? {_to}</div>
      </div>
    </>
  );
};

export default NavigationMenu;
