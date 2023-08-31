import Wrapper from '@components/map/wrapper';
import { AppContextProvider } from '@contexts/app-context';
import Drawer from '@components/menu/drawer';

export default function Home() {
  return (
    <AppContextProvider>
      <Wrapper />
      <Drawer />
    </AppContextProvider>
  );
}
