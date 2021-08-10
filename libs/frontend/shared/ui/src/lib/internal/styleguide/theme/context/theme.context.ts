import React, { Dispatch, SetStateAction } from 'react';
import { EThemeMode } from '../enums';

interface IThemeContextState {
  currentTheme: EThemeMode;
  setCurrentTheme: Dispatch<SetStateAction<EThemeMode>>;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createContext<A extends Record<string, any> | null>() {
  const context = React.createContext<A | undefined>(undefined);

  const useContext = () => {
    const c = React.useContext(context);
    if (c === undefined)
      throw new Error('useContext must be inside a Provider with a value');
    return c;
  };
  return [useContext, context.Provider] as const;
}
export const [useSqueakThemeContext, SqueakThemeContextProvider] =
  createContext<IThemeContextState>();
