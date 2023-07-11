import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = props => {
  const [themeName, setThemeName] = useState("day");

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
