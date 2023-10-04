import Wrapper from '@components/map/wrapper';
import { AppContextProvider } from '@contexts/app-context';
import Drawer from '@components/menu/drawer';
import ThemeContextProvider from '@contexts/theme-context';

export default function Home() {
  return (
    <ThemeContextProvider>
      <AppContextProvider>
        <Wrapper />
        <Drawer />
      </AppContextProvider>
    </ThemeContextProvider>
  );
}
