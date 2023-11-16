import { ThemeContext } from "@/hooks/useTheme";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark" | "system" | null>(null);

  const darkMode = () => {
    document.documentElement.style.setProperty(
      "--foreground-rgb",
      "255, 255, 255",
    );
    document.documentElement.style.setProperty(
      "--background-start-rgb",
      "0, 0, 0",
    );
    document.documentElement.style.setProperty(
      "--background-end-rgb",
      "0, 0, 0",
    );
    setTheme("dark");
  };

  const lightMode = () => {
    document.documentElement.style.setProperty("--foreground-rgb", "0, 0, 0");
    document.documentElement.style.setProperty(
      "--background-start-rgb",
      "214, 219, 220",
    );
    document.documentElement.style.setProperty(
      "--background-end-rgb",
      "255, 255, 255",
    );
    setTheme("light");
  };

  const setMode = useCallback((mode: "dark" | "light") => {
    mode === "dark" ? darkMode() : lightMode();
  }, []);

  useEffect(() => {
    if (theme === "system" && typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const themeChangeHandler = (e: MediaQueryListEvent) =>
        setMode(e.matches ? "dark" : "light");

      setMode(mediaQuery.matches ? "dark" : "light");

      mediaQuery.addEventListener("change", themeChangeHandler);

      return () => mediaQuery.removeEventListener("change", themeChangeHandler);
    }
  }, [theme, setMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, lightMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
