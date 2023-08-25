import Wrapper from '@components/map/wrapper';
import { AppContextProvider } from '@contexts/app-context';

export default function Home() {
  return (
    <AppContextProvider>
      <Wrapper />
    </AppContextProvider>
  );
}
