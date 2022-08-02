import React from "react";

// createContext + useContext => makes the variable accessible to the entire application
export const ThemeContext = React.createContext({ isDarkMode: false, toggleIsDarkMode : () => {} })