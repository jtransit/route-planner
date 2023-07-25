export interface AppContext {
  isLoading: boolean;
  handleLoading: () => void;
}

export const defaultAppContext: AppContext = {
  isLoading: false,
  handleLoading: () => {},
};
