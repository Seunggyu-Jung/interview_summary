import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from 'styles/theme';

interface IThemeContext {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  isDarkMode: false,
  toggleDarkMode: () => null,
});

interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);

  return context;
};
