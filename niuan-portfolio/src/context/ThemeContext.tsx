import React, { createContext, useContext, useEffect, useState } from "react";
import { THEMES } from "./themes";

interface ThemeContextType {
  theme: string;
  setTheme: (themeId: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<string>(() => {
    return localStorage.getItem("portfolio-theme") || THEMES[0].id;
  });

  const applyTheme = (themeId: string) => {
    const selectedTheme = THEMES.find((t) => t.id === themeId) || THEMES[0];
    const root = document.documentElement;

    Object.entries(selectedTheme.colors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    root.setAttribute("data-theme", themeId);
    localStorage.setItem("portfolio-theme", themeId);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = (themeId: string) => {
    setThemeState(themeId);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
