import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(false);

  const toogleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toogleTheme }}>
      <div
        style={{
          background: darkMode ? "#333" : "#fff",
          color: darkMode ? "#fff" : "#333",
          minHeight: "100rem",
          padding: "1rem",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
