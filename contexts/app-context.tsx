'use client';

import { Component } from '@/type/component';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

type AppContextType = {
  is404: boolean;
  setIs404: (value: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: Component<PropsWithChildren> = ({ children }) => {
  const [is404, setIs404] = useState(false);

  return (
    <AppContext.Provider value={{ is404, setIs404 }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
}