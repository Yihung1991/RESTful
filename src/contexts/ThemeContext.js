import { createContext, useState } from "react";

export const themes = {
  dark: {
    name: "dark",
    backgroundColor: "gray",
    color: "white",
  },
  light: {
    name: "light",
    backgroundColor: "white",
    color: "black",
  },
};

const ThemeContext = createContext({});
export default ThemeContext;

export const ThemeContextProvider = function({ children }) {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{...theme, setTheme}}>
      { children }
    </ThemeContext.Provider>
  )
};