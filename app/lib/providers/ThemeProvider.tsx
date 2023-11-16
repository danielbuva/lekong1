import { ThemeContext } from "@/hooks/useTheme";
import type { ReactNode } from "react";
import { useCallback, useLayoutEffect, useState } from "react";

type Theme = "light" | "dark" | "system" | null;

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const initialTheme = localStorage.getItem("theme") as Theme;
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const darkMode = () => {
    setDarkBody();
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const lightMode = () => {
    setLightBody();
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  const setMode = useCallback((mode: "dark" | "light") => {
    mode === "dark" ? darkMode() : lightMode();
  }, []);

  useLayoutEffect(() => {
    if (!theme || (theme === "system" && typeof window !== "undefined")) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const themeChangeHandler = (e: MediaQueryListEvent) =>
        setMode(e.matches ? "dark" : "light");

      setMode(mediaQuery.matches ? "dark" : "light");

      mediaQuery.addEventListener("change", themeChangeHandler);

      return () => mediaQuery.removeEventListener("change", themeChangeHandler);
    } else if (theme === "light") {
      setLightBody();
    } else {
      setDarkBody();
    }
  }, [theme, setMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, lightMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function setDarkBody() {
  document.documentElement.style.setProperty(
    "--foreground-rgb",
    "255, 255, 255",
  );
  document.documentElement.style.setProperty(
    "--background-start-rgb",
    "0, 0, 0",
  );
  document.documentElement.style.setProperty("--background-end-rgb", "0, 0, 0");
}

function setLightBody() {
  document.documentElement.style.setProperty("--foreground-rgb", "0, 0, 0");
  document.documentElement.style.setProperty(
    "--background-start-rgb",
    "214, 219, 220",
  );
  document.documentElement.style.setProperty(
    "--background-end-rgb",
    "255, 255, 255",
  );
}
