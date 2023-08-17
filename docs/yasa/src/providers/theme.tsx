import React, { useContext, createContext, useState, useEffect } from "react";

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  const handleSetTheme = (theme: "light" | "dark") => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme") as string;

    if (["light", "dark"].includes(theme)) {
      setTheme(theme as "light" | "dark");
    }
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
