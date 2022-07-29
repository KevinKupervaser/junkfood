import * as React from "react";

interface UIProviderProps {
  children: React.ReactNode;
}

const UIContext = React.createContext<{ [key: string]: any }>({
  uiState: "defaultState",
});

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  const uiState = {
    isSidebarOpen,
    setSidebarOpen,
  };

  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  return context;
};
