import App from "@components/App";
import { AppContextProvider } from "@contexts/AppContext";

export default function Home() {
  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
}
